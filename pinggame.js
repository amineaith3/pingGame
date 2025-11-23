// Optimized pinggame.js
// - Replaced 36 nearly-identical functions with a single generic handler
// - Preserves original behavior: clicking a cell toggles its neighbors (including diagonals) but not itself
// - Keeps global function names (touch_a1 ... touch_f6) so existing HTML onClick handlers keep working
// - Fixes win() summation bug (no cumulative accumulation across calls) and ensures conteur_touch increments consistently

const ROWS = 6;
const COLS = 6;
let flag = new Array(ROWS * COLS).fill(0);
let conteur_touch = 0;

// helper: index -> element id like "a1"
function idFromIndex(idx) {
  const row = Math.floor(idx / COLS);
  const col = (idx % COLS) + 1;
  return String.fromCharCode(97 + row) + col; // 'a' + col number
}

function setCellState(idx, value) {
  flag[idx] = value ? 1 : 0;
  const el = document.getElementById(idFromIndex(idx));
  if (el) el.style.backgroundColor = flag[idx] ? "black" : "grey";
}

function toggleIndex(idx) {
  setCellState(idx, flag[idx] ? 0 : 1);
}

function win() {
  const sum_flag = flag.reduce((s, v) => s + v, 0);
  if (sum_flag === ROWS * COLS) {
    // keep original timing: show alert after 10s, then reload 10s after that
    setTimeout(function () {
      alert("you win!!\n" + "It took you " + (conteur_touch + 1) + " touches");
      setTimeout(function () {
        location.reload();
      }, 10000);
    }, 10000);
  }
}

// Generic handler: toggles all neighbors (8-connected) of the clicked cell, but not the cell itself
function handleTouchByIndex(centerIdx) {
  const row = Math.floor(centerIdx / COLS);
  const col = centerIdx % COLS;
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue; // original code doesn't toggle the clicked cell itself
      const nr = row + dr;
      const nc = col + dc;
      if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS) {
        toggleIndex(nr * COLS + nc);
      }
    }
  }
  conteur_touch++;
  // call win() so the game can detect completion after each touch (keeps UX intuitive)
  win();
}

// Create and expose legacy function names (touch_a1 ... touch_f6) for backward compatibility
(function exposeLegacyFunctions() {
  for (let r = 0; r < ROWS; r++) {
    for (let c = 1; c <= COLS; c++) {
      const name = `touch_${String.fromCharCode(97 + r)}${c}`;
      const idx = r * COLS + (c - 1);
      // define globally so existing HTML that calls these functions still works
      window[name] = (function (index) {
        return function () {
          handleTouchByIndex(index);
        };
      })(idx);
    }
  }
})();

// Initialize DOM cells to match flag array (in case page starts with different colors)
function initCells() {
  for (let i = 0; i < ROWS * COLS; i++) {
    const el = document.getElementById(idFromIndex(i));
    if (el) {
      el.style.backgroundColor = flag[i] ? "black" : "grey";
    }
  }
}
document.addEventListener("DOMContentLoaded", initCells);

// Info and returner functions (kept, with minor cleanup)
function info() {
  if (conteur_touch > 200) {
    alert(
      "restart it, think of the table as a matrix of 6*6" +
        "\n" +
        "from a1 to a6 and from a1 to f1..." +
        "\n" +
        "the first 5 right touches are : " +
        "\n" +
        "a1, a6, f1, f6, b2 " +
        "\n" +
        "this being said, you can do it in 16 correct touches..."
    );
  }
}
function returner() {
  window.location.href = "https://compilcourt.w3spaces.com/big_linker/main_page.html";
}

// Export commonly used identifiers (optional)
window.flag = flag;
window.conteur_touch = conteur_touch;
window.win = win;
window.info = info;
window.returner = returner;
