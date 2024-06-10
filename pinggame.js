
flag = [0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0];
sum_flag = 0;
conteur_touch = 0;
function win() {
    for (let i = 0; i < 36; i++) {
        sum_flag += flag[i];
    }
    if (sum_flag == 36) {
        setTimeout(function() {
            alert("you win!!\n" + "It took you " + (conteur_touch + 1) + " touches");
            setTimeout(function() {
                location.reload();
            }, 10000);
        }, 10000);
    }
    
    sum_flag = 0;
}

function touch_a1() {
    if (flag[1] == 0) {
        document.getElementById("a2").style.backgroundColor = "black";
        flag[1] = 1;
    } else {
        document.getElementById("a2").style.backgroundColor = "grey";
        flag[1] = 0;
    }
    if (flag[6] == 0) {
        document.getElementById("b1").style.backgroundColor = "black";
        flag[6] = 1;
    } else {
        document.getElementById("b1").style.backgroundColor = "grey";
        flag[6] = 0;
    }
    if (flag[7] == 0) {
        document.getElementById("b2").style.backgroundColor = "black";
        flag[7] = 1;
    } else {
        document.getElementById("b2").style.backgroundColor = "grey";
        flag[7] = 0;
    } conteur_touch++;
}

function touch_a2() {
    if (flag[0] == 0) {
        document.getElementById("a1").style.backgroundColor = "black";
        flag[0] = 1;
    } else {
        document.getElementById("a1").style.backgroundColor = "grey";
        flag[0] = 0;
    }
    if (flag[2] == 0) {
        document.getElementById("a3").style.backgroundColor = "black";
        flag[2] = 1;
    } else {
        document.getElementById("a3").style.backgroundColor = "grey";
        flag[2] = 0;
    }
    if (flag[6] == 0) {
        document.getElementById("b1").style.backgroundColor = "black";
        flag[6] = 1;
    } else {
        document.getElementById("b1").style.backgroundColor = "grey";
        flag[6] = 0;
    }
    if (flag[7] == 0) {
        document.getElementById("b2").style.backgroundColor = "black";
        flag[7] = 1;
    } else {
        document.getElementById("b2").style.backgroundColor = "grey";
        flag[7] = 0;
    }
    if (flag[8] == 0) {
        document.getElementById("b3").style.backgroundColor = "black";
        flag[8] = 1;
    } else {
        document.getElementById("b3").style.backgroundColor = "grey";
        flag[8] = 0;
    }
    conteur_touch++;
}

function touch_a3() {
    if (flag[1] == 0) {
        document.getElementById("a2").style.backgroundColor = "black";
        flag[1] = 1;
    } else {
        document.getElementById("a2").style.backgroundColor = "grey";
        flag[1] = 0;
    }
    if (flag[3] == 0) {
        document.getElementById("a4").style.backgroundColor = "black";
        flag[3] = 1;
    } else {
        document.getElementById("a4").style.backgroundColor = "grey";
        flag[3] = 0;
    }
    if (flag[7] == 0) {
        document.getElementById("b2").style.backgroundColor = "black";
        flag[7] = 1;
    } else {
        document.getElementById("b2").style.backgroundColor = "grey";
        flag[7] = 0;
    }
    if (flag[8] == 0) {
        document.getElementById("b3").style.backgroundColor = "black";
        flag[8] = 1;
    } else {
        document.getElementById("b3").style.backgroundColor = "grey";
        flag[8] = 0;
    }
    if (flag[9] == 0) {
        document.getElementById("b4").style.backgroundColor = "black";
        flag[9] = 1;
    } else {
        document.getElementById("b4").style.backgroundColor = "grey";
        flag[9] = 0;
    }
    conteur_touch++;
}

function touch_a4() {
    if (flag[2] == 0) {
        document.getElementById("a3").style.backgroundColor = "black";
        flag[2] = 1;
    } else {
        document.getElementById("a3").style.backgroundColor = "grey";
        flag[2] = 0;
    }
    if (flag[4] == 0) {
        document.getElementById("a5").style.backgroundColor = "black";
        flag[4] = 1;
    } else {
        document.getElementById("a5").style.backgroundColor = "grey";
        flag[4] = 0;
    }
    if (flag[8] == 0) {
        document.getElementById("b3").style.backgroundColor = "black";
        flag[8] = 1;
    } else {
        document.getElementById("b3").style.backgroundColor = "grey";
        flag[8] = 0;
    }
    if (flag[9] == 0) {
        document.getElementById("b4").style.backgroundColor = "black";
        flag[9] = 1;
    } else {
        document.getElementById("b4").style.backgroundColor = "grey";
        flag[9] = 0;
    }
    if (flag[10] == 0) {
        document.getElementById("b5").style.backgroundColor = "black";
        flag[10] = 1;
    } else {
        document.getElementById("b5").style.backgroundColor = "grey";
        flag[10] = 0;
    }
    conteur_touch++;
}

function touch_a5() {
    if (flag[3] == 0) {
        document.getElementById("a4").style.backgroundColor = "black";
        flag[3] = 1;
    } else {
        document.getElementById("a4").style.backgroundColor = "grey";
        flag[3] = 0;
    }
    if (flag[5] == 0) {
        document.getElementById("a6").style.backgroundColor = "black";
        flag[5] = 1;
    } else {
        document.getElementById("a6").style.backgroundColor = "grey";
        flag[5] = 0;
    }
    if (flag[9] == 0) {
        document.getElementById("b4").style.backgroundColor = "black";
        flag[9] = 1;
    } else {
        document.getElementById("b4").style.backgroundColor = "grey";
        flag[9] = 0;
    }
    if (flag[10] == 0) {
        document.getElementById("b5").style.backgroundColor = "black";
        flag[10] = 1;
    } else {
        document.getElementById("b5").style.backgroundColor = "grey";
        flag[10] = 0;
    }
    if (flag[11] == 0) {
        document.getElementById("b6").style.backgroundColor = "black";
        flag[11] = 1;
    } else {
        document.getElementById("b6").style.backgroundColor = "grey";
        flag[11] = 0;
    }
    conteur_touch++;
}

function touch_a6() {
    if (flag[4] == 0) {
        document.getElementById("a5").style.backgroundColor = "black";
        flag[4] = 1;
    } else {
        document.getElementById("a5").style.backgroundColor = "grey";
        flag[4] = 0;
    }
    if (flag[10] == 0) {
        document.getElementById("b5").style.backgroundColor = "black";
        flag[10] = 1;
    } else {
        document.getElementById("b5").style.backgroundColor = "grey";
        flag[10] = 0;
    }
    if (flag[11] == 0) {
        document.getElementById("b6").style.backgroundColor = "black";
        flag[11] = 1;
    } else {
        document.getElementById("b6").style.backgroundColor = "grey";
        flag[11] = 0;
    }
    conteur_touch++;
}

function touch_b1() {
    if (flag[0] == 0) {
        document.getElementById("a1").style.backgroundColor = "black";
        flag[0] = 1;
    } else {
        document.getElementById("a1").style.backgroundColor = "grey";
        flag[0] = 0;
    }
    if (flag[1] == 0) {
        document.getElementById("a2").style.backgroundColor = "black";
        flag[1] = 1;
    } else {
        document.getElementById("a2").style.backgroundColor = "grey";
        flag[1] = 0;
    }
    if (flag[7] == 0) {
        document.getElementById("b2").style.backgroundColor = "black";
        flag[7] = 1;
    } else {
        document.getElementById("b2").style.backgroundColor = "grey";
        flag[7] = 0;
    }
    if (flag[12] == 0) {
        document.getElementById("c1").style.backgroundColor = "black";
        flag[12] = 1;
    } else {
        document.getElementById("c1").style.backgroundColor = "grey";
        flag[12] = 0;
    }
    if (flag[13] == 0) {
        document.getElementById("c2").style.backgroundColor = "black";
        flag[13] = 1;
    } else {
        document.getElementById("c2").style.backgroundColor = "grey";
        flag[13] = 0;
    }
    conteur_touch++;
}// fct a_1

function touch_b2() {
    if (flag[0] == 0) {
        document.getElementById("a1").style.backgroundColor = "black";
        flag[0] = 1;
    } else {
        document.getElementById("a1").style.backgroundColor = "grey";
        flag[0] = 0;
    }
    if (flag[1] == 0) {
        document.getElementById("a2").style.backgroundColor = "black";
        flag[1] = 1;
    } else {
        document.getElementById("a2").style.backgroundColor = "grey";
        flag[1] = 0;
    }
    if (flag[2] == 0) {
        document.getElementById("a3").style.backgroundColor = "black";
        flag[2] = 1;
    } else {
        document.getElementById("a3").style.backgroundColor = "grey";
        flag[2] = 0;
    }
    if (flag[6] == 0) {
        document.getElementById("b1").style.backgroundColor = "black";
        flag[6] = 1;
    } else {
        document.getElementById("b1").style.backgroundColor = "grey";
        flag[6] = 0;
    }
    if (flag[8] == 0) {
        document.getElementById("b3").style.backgroundColor = "black";
        flag[8] = 1;
    } else {
        document.getElementById("b3").style.backgroundColor = "grey";
        flag[8] = 0;
    }
    if (flag[12] == 0) {
        document.getElementById("c1").style.backgroundColor = "black";
        flag[12] = 1;
    } else {
        document.getElementById("c1").style.backgroundColor = "grey";
        flag[12] = 0;
    }
    if (flag[13] == 0) {
        document.getElementById("c2").style.backgroundColor = "black";
        flag[13] = 1;
    } else {
        document.getElementById("c2").style.backgroundColor = "grey";
        flag[13] = 0;
    }
    if (flag[14] == 0) {
        document.getElementById("c3").style.backgroundColor = "black";
        flag[14] = 1;
    } else {
        document.getElementById("c3").style.backgroundColor = "grey";
        flag[14] = 0;
    }
    conteur_touch++;
}

function touch_b3() {
    if (flag[1] == 0) {
        document.getElementById("a2").style.backgroundColor = "black";
        flag[1] = 1;
    } else {
        document.getElementById("a2").style.backgroundColor = "grey";
        flag[1] = 0;
    }
    if (flag[2] == 0) {
        document.getElementById("a3").style.backgroundColor = "black";
        flag[2] = 1;
    } else {
        document.getElementById("a3").style.backgroundColor = "grey";
        flag[2] = 0;
    }
    if (flag[3] == 0) {
        document.getElementById("a4").style.backgroundColor = "black";
        flag[3] = 1;
    } else {
        document.getElementById("a4").style.backgroundColor = "grey";
        flag[3] = 0;
    }
    if (flag[7] == 0) {
        document.getElementById("b2").style.backgroundColor = "black";
        flag[7] = 1;
    } else {
        document.getElementById("b2").style.backgroundColor = "grey";
        flag[7] = 0;
    }
    if (flag[9] == 0) {
        document.getElementById("b4").style.backgroundColor = "black";
        flag[9] = 1;
    } else {
        document.getElementById("b4").style.backgroundColor = "grey";
        flag[9] = 0;
    }
    if (flag[13] == 0) {
        document.getElementById("c2").style.backgroundColor = "black";
        flag[13] = 1;
    } else {
        document.getElementById("c2").style.backgroundColor = "grey";
        flag[13] = 0;
    }
    if (flag[14] == 0) {
        document.getElementById("c3").style.backgroundColor = "black";
        flag[14] = 1;
    } else {
        document.getElementById("c3").style.backgroundColor = "grey";
        flag[14] = 0;
    }
    if (flag[15] == 0) {
        document.getElementById("c4").style.backgroundColor = "black";
        flag[15] = 1;
    } else {
        document.getElementById("c4").style.backgroundColor = "grey";
        flag[15] = 0;
    }
    conteur_touch++;
}

function touch_b4() {
    if (flag[2] == 0) {
        document.getElementById("a3").style.backgroundColor = "black";
        flag[2] = 1;
    } else {
        document.getElementById("a3").style.backgroundColor = "grey";
        flag[2] = 0;
    }
    if (flag[3] == 0) {
        document.getElementById("a4").style.backgroundColor = "black";
        flag[3] = 1;
    } else {
        document.getElementById("a4").style.backgroundColor = "grey";
        flag[3] = 0;
    }
    if (flag[4] == 0) {
        document.getElementById("a5").style.backgroundColor = "black";
        flag[4] = 1;
    } else {
        document.getElementById("a5").style.backgroundColor = "grey";
        flag[4] = 0;
    }
    if (flag[8] == 0) {
        document.getElementById("b3").style.backgroundColor = "black";
        flag[8] = 1;
    } else {
        document.getElementById("b3").style.backgroundColor = "grey";
        flag[8] = 0;
    }
    if (flag[10] == 0) {
        document.getElementById("b5").style.backgroundColor = "black";
        flag[10] = 1;
    } else {
        document.getElementById("b5").style.backgroundColor = "grey";
        flag[10] = 0;
    }
    if (flag[14] == 0) {
        document.getElementById("c3").style.backgroundColor = "black";
        flag[14] = 1;
    } else {
        document.getElementById("c3").style.backgroundColor = "grey";
        flag[14] = 0;
    }
    if (flag[15] == 0) {
        document.getElementById("c4").style.backgroundColor = "black";
        flag[15] = 1;
    } else {
        document.getElementById("c4").style.backgroundColor = "grey";
        flag[15] = 0;
    }
    if (flag[16] == 0) {
        document.getElementById("c5").style.backgroundColor = "black";
        flag[16] = 1;
    } else {
        document.getElementById("c5").style.backgroundColor = "grey";
        flag[16] = 0;
    }
    conteur_touch++;
}

function touch_b5() {
    if (flag[3] == 0) {
        document.getElementById("a4").style.backgroundColor = "black";
        flag[3] = 1;
    } else {
        document.getElementById("a4").style.backgroundColor = "grey";
        flag[3] = 0;
    }
    if (flag[4] == 0) {
        document.getElementById("a5").style.backgroundColor = "black";
        flag[4] = 1;
    } else {
        document.getElementById("a5").style.backgroundColor = "grey";
        flag[4] = 0;
    }
    if (flag[5] == 0) {
        document.getElementById("a6").style.backgroundColor = "black";
        flag[5] = 1;
    } else {
        document.getElementById("a6").style.backgroundColor = "grey";
        flag[5] = 0;
    }
    if (flag[9] == 0) {
        document.getElementById("b4").style.backgroundColor = "black";
        flag[9] = 1;
    } else {
        document.getElementById("b4").style.backgroundColor = "grey";
        flag[9] = 0;
    }
    if (flag[11] == 0) {
        document.getElementById("b6").style.backgroundColor = "black";
        flag[11] = 1;
    } else {
        document.getElementById("b6").style.backgroundColor = "grey";
        flag[11] = 0;
    }
    if (flag[15] == 0) {
        document.getElementById("c4").style.backgroundColor = "black";
        flag[15] = 1;
    } else {
        document.getElementById("c4").style.backgroundColor = "grey";
        flag[15] = 0;
    }
    if (flag[16] == 0) {
        document.getElementById("c5").style.backgroundColor = "black";
        flag[16] = 1;
    } else {
        document.getElementById("c5").style.backgroundColor = "grey";
        flag[16] = 0;
    }
    if (flag[17] == 0) {
        document.getElementById("c6").style.backgroundColor = "black";
        flag[17] = 1;
    } else {
        document.getElementById("c6").style.backgroundColor = "grey";
        flag[17] = 0;
    }
    conteur_touch++;
}

function touch_b6() {
    if (flag[4] == 0) {
        document.getElementById("a5").style.backgroundColor = "black";
        flag[4] = 1;
    } else {
        document.getElementById("a5").style.backgroundColor = "grey";
        flag[4] = 0;
    }
    if (flag[5] == 0) {
        document.getElementById("a6").style.backgroundColor = "black";
        flag[5] = 1;
    } else {
        document.getElementById("a6").style.backgroundColor = "grey";
        flag[5] = 0;
    }
    if (flag[10] == 0) {
        document.getElementById("b5").style.backgroundColor = "black";
        flag[10] = 1;
    } else {
        document.getElementById("b5").style.backgroundColor = "grey";
        flag[10] = 0;
    }
    if (flag[16] == 0) {
        document.getElementById("c5").style.backgroundColor = "black";
        flag[16] = 1;
    } else {
        document.getElementById("c5").style.backgroundColor = "grey";
        flag[16] = 0;
    }
    if (flag[17] == 0) {
        document.getElementById("c6").style.backgroundColor = "black";
        flag[17] = 1;
    } else {
        document.getElementById("c6").style.backgroundColor = "grey";
        flag[17] = 0;
    }
    conteur_touch++;
}

function touch_c1() {
    if (flag[6] == 0) {
        document.getElementById("b1").style.backgroundColor = "black";
        flag[6] = 1;
    } else {
        document.getElementById("b1").style.backgroundColor = "grey";
        flag[6] = 0;
    }
    if (flag[7] == 0) {
        document.getElementById("b2").style.backgroundColor = "black";
        flag[7] = 1;
    } else {
        document.getElementById("b2").style.backgroundColor = "grey";
        flag[7] = 0;
    }
    if (flag[13] == 0) {
        document.getElementById("c2").style.backgroundColor = "black";
        flag[13] = 1;
    } else {
        document.getElementById("c2").style.backgroundColor = "grey";
        flag[13] = 0;
    }
    if (flag[18] == 0) {
        document.getElementById("d1").style.backgroundColor = "black";
        flag[18] = 1;
    } else {
        document.getElementById("d1").style.backgroundColor = "grey";
        flag[18] = 0;
    }
    if (flag[19] == 0) {
        document.getElementById("d2").style.backgroundColor = "black";
        flag[19] = 1;
    } else {
        document.getElementById("d2").style.backgroundColor = "grey";
        flag[19] = 0;
    }
    conteur_touch++;
}

function touch_c2() {
    if (flag[6] == 0) {
        document.getElementById("b1").style.backgroundColor = "black";
        flag[6] = 1;
    } else {
        document.getElementById("b1").style.backgroundColor = "grey";
        flag[6] = 0;
    }
    if (flag[7] == 0) {
        document.getElementById("b2").style.backgroundColor = "black";
        flag[7] = 1;
    } else {
        document.getElementById("b2").style.backgroundColor = "grey";
        flag[7] = 0;
    }
    if (flag[8] == 0) {
        document.getElementById("b3").style.backgroundColor = "black";
        flag[8] = 1;
    } else {
        document.getElementById("b3").style.backgroundColor = "grey";
        flag[8] = 0;
    }
    if (flag[12] == 0) {
        document.getElementById("c1").style.backgroundColor = "black";
        flag[12] = 1;
    } else {
        document.getElementById("c1").style.backgroundColor = "grey";
        flag[12] = 0;
    }
    if (flag[14] == 0) {
        document.getElementById("c3").style.backgroundColor = "black";
        flag[14] = 1;
    } else {
        document.getElementById("c3").style.backgroundColor = "grey";
        flag[14] = 0;
    }
    if (flag[18] == 0) {
        document.getElementById("d1").style.backgroundColor = "black";
        flag[18] = 1;
    } else {
        document.getElementById("d1").style.backgroundColor = "grey";
        flag[18] = 0;
    }
    if (flag[19] == 0) {
        document.getElementById("d2").style.backgroundColor = "black";
        flag[19] = 1;
    } else {
        document.getElementById("d2").style.backgroundColor = "grey";
        flag[19] = 0;
    }
    if (flag[20] == 0) {
        document.getElementById("d3").style.backgroundColor = "black";
        flag[20] = 1;
    } else {
        document.getElementById("d3").style.backgroundColor = "grey";
        flag[20] = 0;
    }
    conteur_touch++;
}

function touch_c3() {
    if (flag[7] == 0) {
        document.getElementById("b2").style.backgroundColor = "black";
        flag[7] = 1;
    } else {
        document.getElementById("b2").style.backgroundColor = "grey";
        flag[7] = 0;
    }
    if (flag[8] == 0) {
        document.getElementById("b3").style.backgroundColor = "black";
        flag[8] = 1;
    } else {
        document.getElementById("b3").style.backgroundColor = "grey";
        flag[8] = 0;
    }
    if (flag[9] == 0) {
        document.getElementById("b4").style.backgroundColor = "black";
        flag[9] = 1;
    } else {
        document.getElementById("b4").style.backgroundColor = "grey";
        flag[9] = 0;
    }
    if (flag[13] == 0) {
        document.getElementById("c2").style.backgroundColor = "black";
        flag[13] = 1;
    } else {
        document.getElementById("c2").style.backgroundColor = "grey";
        flag[13] = 0;
    }
    if (flag[15] == 0) {
        document.getElementById("c4").style.backgroundColor = "black";
        flag[15] = 1;
    } else {
        document.getElementById("c4").style.backgroundColor = "grey";
        flag[15] = 0;
    }
    if (flag[19] == 0) {
        document.getElementById("d2").style.backgroundColor = "black";
        flag[19] = 1;
    } else {
        document.getElementById("d2").style.backgroundColor = "grey";
        flag[19] = 0;
    }
    if (flag[20] == 0) {
        document.getElementById("d3").style.backgroundColor = "black";
        flag[20] = 1;
    } else {
        document.getElementById("d3").style.backgroundColor = "grey";
        flag[20] = 0;
    }
    if (flag[21] == 0) {
        document.getElementById("d4").style.backgroundColor = "black";
        flag[21] = 1;
    } else {
        document.getElementById("d4").style.backgroundColor = "grey";
        flag[21] = 0;
    }
    conteur_touch++;
}

function touch_c4() {
    if (flag[8] == 0) {
        document.getElementById("b3").style.backgroundColor = "black";
        flag[8] = 1;
    } else {
        document.getElementById("b3").style.backgroundColor = "grey";
        flag[8] = 0;
    }
    if (flag[9] == 0) {
        document.getElementById("b4").style.backgroundColor = "black";
        flag[9] = 1;
    } else {
        document.getElementById("b4").style.backgroundColor = "grey";
        flag[9] = 0;
    }
    if (flag[10] == 0) {
        document.getElementById("b5").style.backgroundColor = "black";
        flag[10] = 1;
    } else {
        document.getElementById("b5").style.backgroundColor = "grey";
        flag[10] = 0;
    }
    if (flag[14] == 0) {
        document.getElementById("c3").style.backgroundColor = "black";
        flag[14] = 1;
    } else {
        document.getElementById("c3").style.backgroundColor = "grey";
        flag[14] = 0;
    }
    if (flag[16] == 0) {
        document.getElementById("c5").style.backgroundColor = "black";
        flag[16] = 1;
    } else {
        document.getElementById("c5").style.backgroundColor = "grey";
        flag[16] = 0;
    }
    if (flag[20] == 0) {
        document.getElementById("d3").style.backgroundColor = "black";
        flag[20] = 1;
    } else {
        document.getElementById("d3").style.backgroundColor = "grey";
        flag[20] = 0;
    }
    if (flag[21] == 0) {
        document.getElementById("d4").style.backgroundColor = "black";
        flag[21] = 1;
    } else {
        document.getElementById("d4").style.backgroundColor = "grey";
        flag[21] = 0;
    }
    if (flag[22] == 0) {
        document.getElementById("d5").style.backgroundColor = "black";
        flag[22] = 1;
    } else {
        document.getElementById("d5").style.backgroundColor = "grey";
        flag[22] = 0;
    }
    conteur_touch++;
}

function touch_c5() {
    if (flag[9] == 0) {
        document.getElementById("b4").style.backgroundColor = "black";
        flag[9] = 1;
    } else {
        document.getElementById("b4").style.backgroundColor = "grey";
        flag[9] = 0;
    }
    if (flag[10] == 0) {
        document.getElementById("b5").style.backgroundColor = "black";
        flag[10] = 1;
    } else {
        document.getElementById("b5").style.backgroundColor = "grey";
        flag[10] = 0;
    }
    if (flag[11] == 0) {
        document.getElementById("b6").style.backgroundColor = "black";
        flag[11] = 1;
    } else {
        document.getElementById("b6").style.backgroundColor = "grey";
        flag[11] = 0;
    }
    if (flag[15] == 0) {
        document.getElementById("c4").style.backgroundColor = "black";
        flag[15] = 1;
    } else {
        document.getElementById("c4").style.backgroundColor = "grey";
        flag[15] = 0;
    }
    if (flag[17] == 0) {
        document.getElementById("c6").style.backgroundColor = "black";
        flag[17] = 1;
    } else {
        document.getElementById("c6").style.backgroundColor = "grey";
        flag[17] = 0;
    }
    if (flag[21] == 0) {
        document.getElementById("d4").style.backgroundColor = "black";
        flag[21] = 1;
    } else {
        document.getElementById("d4").style.backgroundColor = "grey";
        flag[21] = 0;
    }
    if (flag[22] == 0) {
        document.getElementById("d5").style.backgroundColor = "black";
        flag[22] = 1;
    } else {
        document.getElementById("d5").style.backgroundColor = "grey";
        flag[22] = 0;
    }
    if (flag[23] == 0) {
        document.getElementById("d6").style.backgroundColor = "black";
        flag[23] = 1;
    } else {
        document.getElementById("d6").style.backgroundColor = "grey";
        flag[23] = 0;
    }
    conteur_touch++;
}

function touch_c6() {
    if (flag[10] == 0) {
        document.getElementById("b5").style.backgroundColor = "black";
        flag[10] = 1;
    } else {
        document.getElementById("b5").style.backgroundColor = "grey";
        flag[10] = 0;
    }
    if (flag[11] == 0) {
        document.getElementById("b6").style.backgroundColor = "black";
        flag[11] = 1;
    } else {
        document.getElementById("b6").style.backgroundColor = "grey";
        flag[11] = 0;
    }
    if (flag[16] == 0) {
        document.getElementById("c5").style.backgroundColor = "black";
        flag[16] = 1;
    } else {
        document.getElementById("c5").style.backgroundColor = "grey";
        flag[16] = 0;
    }
    if (flag[22] == 0) {
        document.getElementById("d5").style.backgroundColor = "black";
        flag[22] = 1;
    } else {
        document.getElementById("d5").style.backgroundColor = "grey";
        flag[22] = 0;
    }
    if (flag[23] == 0) {
        document.getElementById("d6").style.backgroundColor = "black";
        flag[23] = 1;
    } else {
        document.getElementById("d6").style.backgroundColor = "grey";
        flag[23] = 0;
    }
    conteur_touch++;
}

function touch_d1() {
    if (flag[12] == 0) {
        document.getElementById("c1").style.backgroundColor = "black";
        flag[12] = 1;
    } else {
        document.getElementById("c1").style.backgroundColor = "grey";
        flag[12] = 0;
    }
    if (flag[13] == 0) {
        document.getElementById("c2").style.backgroundColor = "black";
        flag[13] = 1;
    } else {
        document.getElementById("c2").style.backgroundColor = "grey";
        flag[13] = 0;
    }
    if (flag[19] == 0) {
        document.getElementById("d2").style.backgroundColor = "black";
        flag[19] = 1;
    } else {
        document.getElementById("d2").style.backgroundColor = "grey";
        flag[19] = 0;
    }
    if (flag[24] == 0) {
        document.getElementById("e1").style.backgroundColor = "black";
        flag[24] = 1;
    } else {
        document.getElementById("e1").style.backgroundColor = "grey";
        flag[24] = 0;
    }
    if (flag[25] == 0) {
        document.getElementById("e2").style.backgroundColor = "black";
        flag[25] = 1;
    } else {
        document.getElementById("e2").style.backgroundColor = "grey";
        flag[25] = 0;
    }
    conteur_touch++;
}

function touch_d2() {
    if (flag[12] == 0) {
        document.getElementById("c1").style.backgroundColor = "black";
        flag[12] = 1;
    } else {
        document.getElementById("c1").style.backgroundColor = "grey";
        flag[12] = 0;
    }
    if (flag[13] == 0) {
        document.getElementById("c2").style.backgroundColor = "black";
        flag[13] = 1;
    } else {
        document.getElementById("c2").style.backgroundColor = "grey";
        flag[13] = 0;
    }
    if (flag[14] == 0) {
        document.getElementById("c3").style.backgroundColor = "black";
        flag[14] = 1;
    } else {
        document.getElementById("c3").style.backgroundColor = "grey";
        flag[14] = 0;
    }
    if (flag[18] == 0) {
        document.getElementById("d1").style.backgroundColor = "black";
        flag[18] = 1;
    } else {
        document.getElementById("d1").style.backgroundColor = "grey";
        flag[18] = 0;
    }
    if (flag[20] == 0) {
        document.getElementById("d3").style.backgroundColor = "black";
        flag[20] = 1;
    } else {
        document.getElementById("d3").style.backgroundColor = "grey";
        flag[20] = 0;
    }
    if (flag[24] == 0) {
        document.getElementById("e1").style.backgroundColor = "black";
        flag[24] = 1;
    } else {
        document.getElementById("e1").style.backgroundColor = "grey";
        flag[24] = 0;
    }
    if (flag[25] == 0) {
        document.getElementById("e2").style.backgroundColor = "black";
        flag[25] = 1;
    } else {
        document.getElementById("e2").style.backgroundColor = "grey";
        flag[25] = 0;
    }
    if (flag[26] == 0) {
        document.getElementById("e3").style.backgroundColor = "black";
        flag[26] = 1;
    } else {
        document.getElementById("e3").style.backgroundColor = "grey";
        flag[26] = 0;
    }
    conteur_touch++;
}

function touch_d3() {
    if (flag[13] == 0) {
        document.getElementById("c2").style.backgroundColor = "black";
        flag[13] = 1;
    } else {
        document.getElementById("c2").style.backgroundColor = "grey";
        flag[13] = 0;
    }
    if (flag[14] == 0) {
        document.getElementById("c3").style.backgroundColor = "black";
        flag[14] = 1;
    } else {
        document.getElementById("c3").style.backgroundColor = "grey";
        flag[14] = 0;
    }
    if (flag[15] == 0) {
        document.getElementById("c4").style.backgroundColor = "black";
        flag[15] = 1;
    } else {
        document.getElementById("c4").style.backgroundColor = "grey";
        flag[15] = 0;
    }
    if (flag[19] == 0) {
        document.getElementById("d2").style.backgroundColor = "black";
        flag[19] = 1;
    } else {
        document.getElementById("d2").style.backgroundColor = "grey";
        flag[19] = 0;
    }
    if (flag[21] == 0) {
        document.getElementById("d4").style.backgroundColor = "black";
        flag[21] = 1;
    } else {
        document.getElementById("d4").style.backgroundColor = "grey";
        flag[21] = 0;
    }
    if (flag[25] == 0) {
        document.getElementById("e2").style.backgroundColor = "black";
        flag[25] = 1;
    } else {
        document.getElementById("e2").style.backgroundColor = "grey";
        flag[25] = 0;
    }
    if (flag[26] == 0) {
        document.getElementById("e3").style.backgroundColor = "black";
        flag[26] = 1;
    } else {
        document.getElementById("e3").style.backgroundColor = "grey";
        flag[26] = 0;
    }
    if (flag[27] == 0) {
        document.getElementById("e4").style.backgroundColor = "black";
        flag[27] = 1;
    } else {
        document.getElementById("e4").style.backgroundColor = "grey";
        flag[27] = 0;
    }
    conteur_touch++;
}

function touch_d4() {
    if (flag[14] == 0) {
        document.getElementById("c3").style.backgroundColor = "black";
        flag[14] = 1;
    } else {
        document.getElementById("c3").style.backgroundColor = "grey";
        flag[14] = 0;
    }
    if (flag[15] == 0) {
        document.getElementById("c4").style.backgroundColor = "black";
        flag[15] = 1;
    } else {
        document.getElementById("c4").style.backgroundColor = "grey";
        flag[15] = 0;
    }
    if (flag[16] == 0) {
        document.getElementById("c5").style.backgroundColor = "black";
        flag[16] = 1;
    } else {
        document.getElementById("c5").style.backgroundColor = "grey";
        flag[16] = 0;
    }
    if (flag[20] == 0) {
        document.getElementById("d3").style.backgroundColor = "black";
        flag[20] = 1;
    } else {
        document.getElementById("d3").style.backgroundColor = "grey";
        flag[20] = 0;
    }
    if (flag[22] == 0) {
        document.getElementById("d5").style.backgroundColor = "black";
        flag[22] = 1;
    } else {
        document.getElementById("d5").style.backgroundColor = "grey";
        flag[22] = 0;
    }
    if (flag[26] == 0) {
        document.getElementById("e3").style.backgroundColor = "black";
        flag[26] = 1;
    } else {
        document.getElementById("e3").style.backgroundColor = "grey";
        flag[26] = 0;
    }
    if (flag[27] == 0) {
        document.getElementById("e4").style.backgroundColor = "black";
        flag[27] = 1;
    } else {
        document.getElementById("e4").style.backgroundColor = "grey";
        flag[27] = 0;
    }
    if (flag[28] == 0) {
        document.getElementById("e5").style.backgroundColor = "black";
        flag[28] = 1;
    } else {
        document.getElementById("e5").style.backgroundColor = "grey";
        flag[28] = 0;
    }
    conteur_touch++;
}

function touch_d5() {
    if (flag[15] == 0) {
        document.getElementById("c4").style.backgroundColor = "black";
        flag[15] = 1;
    } else {
        document.getElementById("c4").style.backgroundColor = "grey";
        flag[15] = 0;
    }
    if (flag[16] == 0) {
        document.getElementById("c5").style.backgroundColor = "black";
        flag[16] = 1;
    } else {
        document.getElementById("c5").style.backgroundColor = "grey";
        flag[16] = 0;
    }
    if (flag[17] == 0) {
        document.getElementById("c6").style.backgroundColor = "black";
        flag[17] = 1;
    } else {
        document.getElementById("c6").style.backgroundColor = "grey";
        flag[17] = 0;
    }
    if (flag[21] == 0) {
        document.getElementById("d4").style.backgroundColor = "black";
        flag[21] = 1;
    } else {
        document.getElementById("d4").style.backgroundColor = "grey";
        flag[21] = 0;
    }
    if (flag[23] == 0) {
        document.getElementById("d6").style.backgroundColor = "black";
        flag[23] = 1;
    } else {
        document.getElementById("d6").style.backgroundColor = "grey";
        flag[23] = 0;
    }
    if (flag[27] == 0) {
        document.getElementById("e4").style.backgroundColor = "black";
        flag[27] = 1;
    } else {
        document.getElementById("e4").style.backgroundColor = "grey";
        flag[27] = 0;
    }
    if (flag[28] == 0) {
        document.getElementById("e5").style.backgroundColor = "black";
        flag[28] = 1;
    } else {
        document.getElementById("e5").style.backgroundColor = "grey";
        flag[28] = 0;
    }
    if (flag[29] == 0) {
        document.getElementById("e6").style.backgroundColor = "black";
        flag[29] = 1;
    } else {
        document.getElementById("e6").style.backgroundColor = "grey";
        flag[29] = 0;
    }
}

function touch_d6() {
    if (flag[16] == 0) {
        document.getElementById("c5").style.backgroundColor = "black";
        flag[16] = 1;
    } else {
        document.getElementById("c5").style.backgroundColor = "grey";
        flag[16] = 0;
    }
    if (flag[17] == 0) {
        document.getElementById("c6").style.backgroundColor = "black";
        flag[17] = 1;
    } else {
        document.getElementById("c6").style.backgroundColor = "grey";
        flag[17] = 0;
    }
    if (flag[22] == 0) {
        document.getElementById("d5").style.backgroundColor = "black";
        flag[22] = 1;
    } else {
        document.getElementById("d5").style.backgroundColor = "grey";
        flag[22] = 0;
    }
    if (flag[28] == 0) {
        document.getElementById("e5").style.backgroundColor = "black";
        flag[28] = 1;
    } else {
        document.getElementById("e5").style.backgroundColor = "grey";
        flag[28] = 0;
    }
    if (flag[29] == 0) {
        document.getElementById("e6").style.backgroundColor = "black";
        flag[29] = 1;
    } else {
        document.getElementById("e6").style.backgroundColor = "grey";
        flag[29] = 0;
    }
    conteur_touch++;
}

function touch_e1() {
    if (flag[18] == 0) {
        document.getElementById("d1").style.backgroundColor = "black";
        flag[18] = 1;
    } else {
        document.getElementById("d1").style.backgroundColor = "grey";
        flag[18] = 0;
    }
    if (flag[19] == 0) {
        document.getElementById("d2").style.backgroundColor = "black";
        flag[19] = 1;
    } else {
        document.getElementById("d2").style.backgroundColor = "grey";
        flag[19] = 0;
    }
    if (flag[25] == 0) {
        document.getElementById("e2").style.backgroundColor = "black";
        flag[25] = 1;
    } else {
        document.getElementById("e2").style.backgroundColor = "grey";
        flag[25] = 0;
    }
    if (flag[30] == 0) {
        document.getElementById("f1").style.backgroundColor = "black";
        flag[30] = 1;
    } else {
        document.getElementById("f1").style.backgroundColor = "grey";
        flag[30] = 0;
    }
    if (flag[31] == 0) {
        document.getElementById("f2").style.backgroundColor = "black";
        flag[31] = 1;
    } else {
        document.getElementById("f2").style.backgroundColor = "grey";
        flag[31] = 0;
    }
    conteur_touch++;
}

function touch_e2() {
    if (flag[18] == 0) {
        document.getElementById("d1").style.backgroundColor = "black";
        flag[18] = 1;
    } else {
        document.getElementById("d1").style.backgroundColor = "grey";
        flag[18] = 0;
    }
    if (flag[19] == 0) {
        document.getElementById("d2").style.backgroundColor = "black";
        flag[19] = 1;
    } else {
        document.getElementById("d2").style.backgroundColor = "grey";
        flag[19] = 0;
    }
    if (flag[20] == 0) {
        document.getElementById("d3").style.backgroundColor = "black";
        flag[20] = 1;
    } else {
        document.getElementById("d3").style.backgroundColor = "grey";
        flag[20] = 0;
    }
    if (flag[24] == 0) {
        document.getElementById("e1").style.backgroundColor = "black";
        flag[24] = 1;
    } else {
        document.getElementById("e1").style.backgroundColor = "grey";
        flag[24] = 0;
    }
    if (flag[26] == 0) {
        document.getElementById("e3").style.backgroundColor = "black";
        flag[26] = 1;
    } else {
        document.getElementById("e3").style.backgroundColor = "grey";
        flag[26] = 0;
    }
    if (flag[30] == 0) {
        document.getElementById("f1").style.backgroundColor = "black";
        flag[30] = 1;
    } else {
        document.getElementById("f1").style.backgroundColor = "grey";
        flag[30] = 0;
    }
    if (flag[31] == 0) {
        document.getElementById("f2").style.backgroundColor = "black";
        flag[31] = 1;
    } else {
        document.getElementById("f2").style.backgroundColor = "grey";
        flag[31] = 0;
    }
    if (flag[32] == 0) {
        document.getElementById("f3").style.backgroundColor = "black";
        flag[32] = 1;
    } else {
        document.getElementById("f3").style.backgroundColor = "grey";
        flag[32] = 0;
    }
    conteur_touch++;
}

function touch_e3() {
    if (flag[19] == 0) {
        document.getElementById("d2").style.backgroundColor = "black";
        flag[19] = 1;
    } else {
        document.getElementById("d2").style.backgroundColor = "grey";
        flag[19] = 0;
    }
    if (flag[20] == 0) {
        document.getElementById("d3").style.backgroundColor = "black";
        flag[20] = 1;
    } else {
        document.getElementById("d3").style.backgroundColor = "grey";
        flag[20] = 0;
    }
    if (flag[21] == 0) {
        document.getElementById("d4").style.backgroundColor = "black";
        flag[21] = 1;
    } else {
        document.getElementById("d4").style.backgroundColor = "grey";
        flag[21] = 0;
    }
    if (flag[25] == 0) {
        document.getElementById("e2").style.backgroundColor = "black";
        flag[25] = 1;
    } else {
        document.getElementById("e2").style.backgroundColor = "grey";
        flag[25] = 0;
    }
    if (flag[27] == 0) {
        document.getElementById("e4").style.backgroundColor = "black";
        flag[27] = 1;
    } else {
        document.getElementById("e4").style.backgroundColor = "grey";
        flag[27] = 0;
    }
    if (flag[31] == 0) {
        document.getElementById("f2").style.backgroundColor = "black";
        flag[31] = 1;
    } else {
        document.getElementById("f2").style.backgroundColor = "grey";
        flag[31] = 0;
    }
    if (flag[32] == 0) {
        document.getElementById("f3").style.backgroundColor = "black";
        flag[32] = 1;
    } else {
        document.getElementById("f3").style.backgroundColor = "grey";
        flag[32] = 0;
    }
    if (flag[33] == 0) {
        document.getElementById("f4").style.backgroundColor = "black";
        flag[33] = 1;
    } else {
        document.getElementById("f4").style.backgroundColor = "grey";
        flag[33] = 0;
    }
    conteur_touch++;
}

function touch_e4() {
    if (flag[20] == 0) {
        document.getElementById("d3").style.backgroundColor = "black";
        flag[20] = 1;
    } else {
        document.getElementById("d3").style.backgroundColor = "grey";
        flag[20] = 0;
    }
    if (flag[21] == 0) {
        document.getElementById("d4").style.backgroundColor = "black";
        flag[21] = 1;
    } else {
        document.getElementById("d4").style.backgroundColor = "grey";
        flag[21] = 0;
    }
    if (flag[22] == 0) {
        document.getElementById("d5").style.backgroundColor = "black";
        flag[22] = 1;
    } else {
        document.getElementById("d5").style.backgroundColor = "grey";
        flag[22] = 0;
    }
    if (flag[26] == 0) {
        document.getElementById("e3").style.backgroundColor = "black";
        flag[26] = 1;
    } else {
        document.getElementById("e3").style.backgroundColor = "grey";
        flag[26] = 0;
    }
    if (flag[28] == 0) {
        document.getElementById("e5").style.backgroundColor = "black";
        flag[28] = 1;
    } else {
        document.getElementById("e5").style.backgroundColor = "grey";
        flag[28] = 0;
    }
    if (flag[32] == 0) {
        document.getElementById("f3").style.backgroundColor = "black";
        flag[32] = 1;
    } else {
        document.getElementById("f3").style.backgroundColor = "grey";
        flag[32] = 0;
    }
    if (flag[33] == 0) {
        document.getElementById("f4").style.backgroundColor = "black";
        flag[33] = 1;
    } else {
        document.getElementById("f4").style.backgroundColor = "grey";
        flag[33] = 0;
    }
    if (flag[34] == 0) {
        document.getElementById("f5").style.backgroundColor = "black";
        flag[34] = 1;
    } else {
        document.getElementById("f5").style.backgroundColor = "grey";
        flag[34] = 0;
    }
    conteur_touch++;
}

function touch_e5() {
    if (flag[21] == 0) {
        document.getElementById("d4").style.backgroundColor = "black";
        flag[21] = 1;
    } else {
        document.getElementById("d4").style.backgroundColor = "grey";
        flag[21] = 0;
    }
    if (flag[22] == 0) {
        document.getElementById("d5").style.backgroundColor = "black";
        flag[22] = 1;
    } else {
        document.getElementById("d5").style.backgroundColor = "grey";
        flag[22] = 0;
    }
    if (flag[23] == 0) {
        document.getElementById("d6").style.backgroundColor = "black";
        flag[23] = 1;
    } else {
        document.getElementById("d6").style.backgroundColor = "grey";
        flag[23] = 0;
    }
    if (flag[27] == 0) {
        document.getElementById("e4").style.backgroundColor = "black";
        flag[27] = 1;
    } else {
        document.getElementById("e4").style.backgroundColor = "grey";
        flag[27] = 0;
    }
    if (flag[29] == 0) {
        document.getElementById("e6").style.backgroundColor = "black";
        flag[29] = 1;
    } else {
        document.getElementById("e6").style.backgroundColor = "grey";
        flag[29] = 0;
    }
    if (flag[33] == 0) {
        document.getElementById("f4").style.backgroundColor = "black";
        flag[33] = 1;
    } else {
        document.getElementById("f4").style.backgroundColor = "grey";
        flag[33] = 0;
    }
    if (flag[34] == 0) {
        document.getElementById("f5").style.backgroundColor = "black";
        flag[34] = 1;
    } else {
        document.getElementById("f5").style.backgroundColor = "grey";
        flag[34] = 0;
    }
    if (flag[35] == 0) {
        document.getElementById("f6").style.backgroundColor = "black";
        flag[35] = 1;
    } else {
        document.getElementById("f6").style.backgroundColor = "grey";
        flag[35] = 0;
    }
    conteur_touch++;
}

function touch_e6() {
    if (flag[22] == 0) {
        document.getElementById("d5").style.backgroundColor = "black";
        flag[22] = 1;
    } else {
        document.getElementById("d5").style.backgroundColor = "grey";
        flag[22] = 0;
    }
    if (flag[23] == 0) {
        document.getElementById("d6").style.backgroundColor = "black";
        flag[23] = 1;
    } else {
        document.getElementById("d6").style.backgroundColor = "grey";
        flag[23] = 0;
    }
    if (flag[28] == 0) {
        document.getElementById("e5").style.backgroundColor = "black";
        flag[28] = 1;
    } else {
        document.getElementById("e5").style.backgroundColor = "grey";
        flag[28] = 0;
    }
    if (flag[34] == 0) {
        document.getElementById("f5").style.backgroundColor = "black";
        flag[34] = 1;
    } else {
        document.getElementById("f5").style.backgroundColor = "grey";
        flag[34] = 0;
    }
    if (flag[35] == 0) {
        document.getElementById("f6").style.backgroundColor = "black";
        flag[35] = 1;
    } else {
        document.getElementById("f6").style.backgroundColor = "grey";
        flag[35] = 0;
    }
    conteur_touch++;
}

function touch_f1() {
    if (flag[24] == 0) {
        document.getElementById("e1").style.backgroundColor = "black";
        flag[24] = 1;
    } else {
        document.getElementById("e1").style.backgroundColor = "grey";
        flag[24] = 0;
    }
    if (flag[25] == 0) {
        document.getElementById("e2").style.backgroundColor = "black";
        flag[25] = 1;
    } else {
        document.getElementById("e2").style.backgroundColor = "grey";
        flag[25] = 0;
    }
    if (flag[31] == 0) {
        document.getElementById("f2").style.backgroundColor = "black";
        flag[31] = 1;
    } else {
        document.getElementById("f2").style.backgroundColor = "grey";
        flag[31] = 0;
    } conteur_touch++;
}

function touch_f2() {
    if (flag[24] == 0) {
        document.getElementById("e1").style.backgroundColor = "black";
        flag[24] = 1;
    } else {
        document.getElementById("e1").style.backgroundColor = "grey";
        flag[24] = 0;
    }
    if (flag[25] == 0) {
        document.getElementById("e2").style.backgroundColor = "black";
        flag[25] = 1;
    } else {
        document.getElementById("e2").style.backgroundColor = "grey";
        flag[25] = 0;
    }
    if (flag[26] == 0) {
        document.getElementById("e3").style.backgroundColor = "black";
        flag[26] = 1;
    } else {
        document.getElementById("e3").style.backgroundColor = "grey";
        flag[26] = 0;
    }
    if (flag[30] == 0) {
        document.getElementById("f1").style.backgroundColor = "black";
        flag[30] = 1;
    } else {
        document.getElementById("f1").style.backgroundColor = "grey";
        flag[30] = 0;
    }
    if (flag[31] == 0) {
        document.getElementById("f3").style.backgroundColor = "black";
        flag[31] = 1;
    } else {
        document.getElementById("f3").style.backgroundColor = "grey";
        flag[31] = 0;
    }
    conteur_touch++;
}

function touch_f3() {
    if (flag[25] == 0) {
        document.getElementById("e2").style.backgroundColor = "black";
        flag[25] = 1;
    } else {
        document.getElementById("e2").style.backgroundColor = "grey";
        flag[25] = 0;
    }
    if (flag[26] == 0) {
        document.getElementById("e3").style.backgroundColor = "black";
        flag[26] = 1;
    } else {
        document.getElementById("e3").style.backgroundColor = "grey";
        flag[26] = 0;
    }
    if (flag[27] == 0) {
        document.getElementById("e4").style.backgroundColor = "black";
        flag[27] = 1;
    } else {
        document.getElementById("e4").style.backgroundColor = "grey";
        flag[27] = 0;
    }
    if (flag[31] == 0) {
        document.getElementById("f2").style.backgroundColor = "black";
        flag[31] = 1;
    } else {
        document.getElementById("f2").style.backgroundColor = "grey";
        flag[31] = 0;
    }
    if (flag[33] == 0) {
        document.getElementById("f4").style.backgroundColor = "black";
        flag[33] = 1;
    } else {
        document.getElementById("f4").style.backgroundColor = "grey";
        flag[33] = 0;
    }
    conteur_touch++;
}

function touch_f4() {
    if (flag[26] == 0) {
        document.getElementById("e3").style.backgroundColor = "black";
        flag[26] = 1;
    } else {
        document.getElementById("e3").style.backgroundColor = "grey";
        flag[26] = 0;
    }
    if (flag[27] == 0) {
        document.getElementById("e4").style.backgroundColor = "black";
        flag[27] = 1;
    } else {
        document.getElementById("e4").style.backgroundColor = "grey";
        flag[27] = 0;
    }
    if (flag[28] == 0) {
        document.getElementById("e5").style.backgroundColor = "black";
        flag[28] = 1;
    } else {
        document.getElementById("e5").style.backgroundColor = "grey";
        flag[28] = 0;
    }
    if (flag[32] == 0) {
        document.getElementById("f3").style.backgroundColor = "black";
        flag[32] = 1;
    } else {
        document.getElementById("f3").style.backgroundColor = "grey";
        flag[32] = 0;
    }
    if (flag[34] == 0) {
        document.getElementById("f5").style.backgroundColor = "black";
        flag[34] = 1;
    } else {
        document.getElementById("f5").style.backgroundColor = "grey";
        flag[34] = 0;
    }
    conteur_touch++;
}

function touch_f5() {
    if (flag[27] == 0) {
        document.getElementById("e4").style.backgroundColor = "black";
        flag[27] = 1;
    } else {
        document.getElementById("e4").style.backgroundColor = "grey";
        flag[27] = 0;
    }
    if (flag[28] == 0) {
        document.getElementById("e5").style.backgroundColor = "black";
        flag[28] = 1;
    } else {
        document.getElementById("e5").style.backgroundColor = "grey";
        flag[28] = 0;
    }
    if (flag[29] == 0) {
        document.getElementById("e6").style.backgroundColor = "black";
        flag[29] = 1;
    } else {
        document.getElementById("e6").style.backgroundColor = "grey";
        flag[29] = 0;
    }
    if (flag[33] == 0) {
        document.getElementById("f4").style.backgroundColor = "black";
        flag[33] = 1;
    } else {
        document.getElementById("f4").style.backgroundColor = "grey";
        flag[33] = 0;
    }
    if (flag[35] == 0) {
        document.getElementById("f6").style.backgroundColor = "black";
        flag[35] = 1;
    } else {
        document.getElementById("f6").style.backgroundColor = "grey";
        flag[35] = 0;
    }
    conteur_touch++;
}

function touch_f6() {
    if (flag[28] == 0) {
        document.getElementById("e5").style.backgroundColor = "black";
        flag[28] = 1;
    } else {
        document.getElementById("e5").style.backgroundColor = "grey";
        flag[28] = 0;
    }
    if (flag[29] == 0) {
        document.getElementById("e6").style.backgroundColor = "black";
        flag[29] = 1;
    } else {
        document.getElementById("e6").style.backgroundColor = "grey";
        flag[29] = 0;
    }
    if (flag[34] == 0) {
        document.getElementById("f5").style.backgroundColor = "black";
        flag[34] = 1;
    } else {
        document.getElementById("f5").style.backgroundColor = "grey";
        flag[34] = 0;
    }
    conteur_touch++;
}

function info() {
    if (conteur_touch > 200) {
        alert("restart it, think of the table as a matrix of 6*6" + "\n" +
            "from a1 to a6 and from a1 to f1..." + "\n" + "the first 5 right touches are : " +
            "\n" + "a1, a6, f1, f6, b2 " + "\n" + "this being said, you can do it in 16 correct touches...");
    }
}

function returner() {
    window.location.href = "https://compilcourt.w3spaces.com/big_linker/main_page.html";
}

