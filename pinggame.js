
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
        alert("you win!!\n" + "It took you " + (conteur_touch + 1) + "touches");

        location.reload();
    }
    sum_flag = 0;
}

function touch_a1() {
    if (flag[1] == 0) {
        document.getElementById("a2").style.backgroundColor = "blue";
        flag[1] = 1;
    } else {
        document.getElementById("a2").style.backgroundColor = "red";
        flag[1] = 0;
    }
    if (flag[6] == 0) {
        document.getElementById("b1").style.backgroundColor = "blue";
        flag[6] = 1;
    } else {
        document.getElementById("b1").style.backgroundColor = "red";
        flag[6] = 0;
    }
    if (flag[7] == 0) {
        document.getElementById("b2").style.backgroundColor = "blue";
        flag[7] = 1;
    } else {
        document.getElementById("b2").style.backgroundColor = "red";
        flag[7] = 0;
    } conteur_touch++;
}

function touch_a2() {
    if (flag[0] == 0) {
        document.getElementById("a1").style.backgroundColor = "blue";
        flag[0] = 1;
    } else {
        document.getElementById("a1").style.backgroundColor = "red";
        flag[0] = 0;
    }
    if (flag[2] == 0) {
        document.getElementById("a3").style.backgroundColor = "blue";
        flag[2] = 1;
    } else {
        document.getElementById("a3").style.backgroundColor = "red";
        flag[2] = 0;
    }
    if (flag[6] == 0) {
        document.getElementById("b1").style.backgroundColor = "blue";
        flag[6] = 1;
    } else {
        document.getElementById("b1").style.backgroundColor = "red";
        flag[6] = 0;
    }
    if (flag[7] == 0) {
        document.getElementById("b2").style.backgroundColor = "blue";
        flag[7] = 1;
    } else {
        document.getElementById("b2").style.backgroundColor = "red";
        flag[7] = 0;
    }
    if (flag[8] == 0) {
        document.getElementById("b3").style.backgroundColor = "blue";
        flag[8] = 1;
    } else {
        document.getElementById("b3").style.backgroundColor = "red";
        flag[8] = 0;
    }
    conteur_touch++;
}

function touch_a3() {
    if (flag[1] == 0) {
        document.getElementById("a2").style.backgroundColor = "blue";
        flag[1] = 1;
    } else {
        document.getElementById("a2").style.backgroundColor = "red";
        flag[1] = 0;
    }
    if (flag[3] == 0) {
        document.getElementById("a4").style.backgroundColor = "blue";
        flag[3] = 1;
    } else {
        document.getElementById("a4").style.backgroundColor = "red";
        flag[3] = 0;
    }
    if (flag[7] == 0) {
        document.getElementById("b2").style.backgroundColor = "blue";
        flag[7] = 1;
    } else {
        document.getElementById("b2").style.backgroundColor = "red";
        flag[7] = 0;
    }
    if (flag[8] == 0) {
        document.getElementById("b3").style.backgroundColor = "blue";
        flag[8] = 1;
    } else {
        document.getElementById("b3").style.backgroundColor = "red";
        flag[8] = 0;
    }
    if (flag[9] == 0) {
        document.getElementById("b4").style.backgroundColor = "blue";
        flag[9] = 1;
    } else {
        document.getElementById("b4").style.backgroundColor = "red";
        flag[9] = 0;
    }
    conteur_touch++;
}

function touch_a4() {
    if (flag[2] == 0) {
        document.getElementById("a3").style.backgroundColor = "blue";
        flag[2] = 1;
    } else {
        document.getElementById("a3").style.backgroundColor = "red";
        flag[2] = 0;
    }
    if (flag[4] == 0) {
        document.getElementById("a5").style.backgroundColor = "blue";
        flag[4] = 1;
    } else {
        document.getElementById("a5").style.backgroundColor = "red";
        flag[4] = 0;
    }
    if (flag[8] == 0) {
        document.getElementById("b3").style.backgroundColor = "blue";
        flag[8] = 1;
    } else {
        document.getElementById("b3").style.backgroundColor = "red";
        flag[8] = 0;
    }
    if (flag[9] == 0) {
        document.getElementById("b4").style.backgroundColor = "blue";
        flag[9] = 1;
    } else {
        document.getElementById("b4").style.backgroundColor = "red";
        flag[9] = 0;
    }
    if (flag[10] == 0) {
        document.getElementById("b5").style.backgroundColor = "blue";
        flag[10] = 1;
    } else {
        document.getElementById("b5").style.backgroundColor = "red";
        flag[10] = 0;
    }
    conteur_touch++;
}

function touch_a5() {
    if (flag[3] == 0) {
        document.getElementById("a4").style.backgroundColor = "blue";
        flag[3] = 1;
    } else {
        document.getElementById("a4").style.backgroundColor = "red";
        flag[3] = 0;
    }
    if (flag[5] == 0) {
        document.getElementById("a6").style.backgroundColor = "blue";
        flag[5] = 1;
    } else {
        document.getElementById("a6").style.backgroundColor = "red";
        flag[5] = 0;
    }
    if (flag[9] == 0) {
        document.getElementById("b4").style.backgroundColor = "blue";
        flag[9] = 1;
    } else {
        document.getElementById("b4").style.backgroundColor = "red";
        flag[9] = 0;
    }
    if (flag[10] == 0) {
        document.getElementById("b5").style.backgroundColor = "blue";
        flag[10] = 1;
    } else {
        document.getElementById("b5").style.backgroundColor = "red";
        flag[10] = 0;
    }
    if (flag[11] == 0) {
        document.getElementById("b6").style.backgroundColor = "blue";
        flag[11] = 1;
    } else {
        document.getElementById("b6").style.backgroundColor = "red";
        flag[11] = 0;
    }
    conteur_touch++;
}

function touch_a6() {
    if (flag[4] == 0) {
        document.getElementById("a5").style.backgroundColor = "blue";
        flag[4] = 1;
    } else {
        document.getElementById("a5").style.backgroundColor = "red";
        flag[4] = 0;
    }
    if (flag[10] == 0) {
        document.getElementById("b5").style.backgroundColor = "blue";
        flag[10] = 1;
    } else {
        document.getElementById("b5").style.backgroundColor = "red";
        flag[10] = 0;
    }
    if (flag[11] == 0) {
        document.getElementById("b6").style.backgroundColor = "blue";
        flag[11] = 1;
    } else {
        document.getElementById("b6").style.backgroundColor = "red";
        flag[11] = 0;
    }
    conteur_touch++;
}

function touch_b1() {
    if (flag[0] == 0) {
        document.getElementById("a1").style.backgroundColor = "blue";
        flag[0] = 1;
    } else {
        document.getElementById("a1").style.backgroundColor = "red";
        flag[0] = 0;
    }
    if (flag[1] == 0) {
        document.getElementById("a2").style.backgroundColor = "blue";
        flag[1] = 1;
    } else {
        document.getElementById("a2").style.backgroundColor = "red";
        flag[1] = 0;
    }
    if (flag[7] == 0) {
        document.getElementById("b2").style.backgroundColor = "blue";
        flag[7] = 1;
    } else {
        document.getElementById("b2").style.backgroundColor = "red";
        flag[7] = 0;
    }
    if (flag[12] == 0) {
        document.getElementById("c1").style.backgroundColor = "blue";
        flag[12] = 1;
    } else {
        document.getElementById("c1").style.backgroundColor = "red";
        flag[12] = 0;
    }
    if (flag[13] == 0) {
        document.getElementById("c2").style.backgroundColor = "blue";
        flag[13] = 1;
    } else {
        document.getElementById("c2").style.backgroundColor = "red";
        flag[13] = 0;
    }
    conteur_touch++;
}// fct a_1

function touch_b2() {
    if (flag[0] == 0) {
        document.getElementById("a1").style.backgroundColor = "blue";
        flag[0] = 1;
    } else {
        document.getElementById("a1").style.backgroundColor = "red";
        flag[0] = 0;
    }
    if (flag[1] == 0) {
        document.getElementById("a2").style.backgroundColor = "blue";
        flag[1] = 1;
    } else {
        document.getElementById("a2").style.backgroundColor = "red";
        flag[1] = 0;
    }
    if (flag[2] == 0) {
        document.getElementById("a3").style.backgroundColor = "blue";
        flag[2] = 1;
    } else {
        document.getElementById("a3").style.backgroundColor = "red";
        flag[2] = 0;
    }
    if (flag[6] == 0) {
        document.getElementById("b1").style.backgroundColor = "blue";
        flag[6] = 1;
    } else {
        document.getElementById("b1").style.backgroundColor = "red";
        flag[6] = 0;
    }
    if (flag[8] == 0) {
        document.getElementById("b3").style.backgroundColor = "blue";
        flag[8] = 1;
    } else {
        document.getElementById("b3").style.backgroundColor = "red";
        flag[8] = 0;
    }
    if (flag[12] == 0) {
        document.getElementById("c1").style.backgroundColor = "blue";
        flag[12] = 1;
    } else {
        document.getElementById("c1").style.backgroundColor = "red";
        flag[12] = 0;
    }
    if (flag[13] == 0) {
        document.getElementById("c2").style.backgroundColor = "blue";
        flag[13] = 1;
    } else {
        document.getElementById("c2").style.backgroundColor = "red";
        flag[13] = 0;
    }
    if (flag[14] == 0) {
        document.getElementById("c3").style.backgroundColor = "blue";
        flag[14] = 1;
    } else {
        document.getElementById("c3").style.backgroundColor = "red";
        flag[14] = 0;
    }
    conteur_touch++;
}

function touch_b3() {
    if (flag[1] == 0) {
        document.getElementById("a2").style.backgroundColor = "blue";
        flag[1] = 1;
    } else {
        document.getElementById("a2").style.backgroundColor = "red";
        flag[1] = 0;
    }
    if (flag[2] == 0) {
        document.getElementById("a3").style.backgroundColor = "blue";
        flag[2] = 1;
    } else {
        document.getElementById("a3").style.backgroundColor = "red";
        flag[2] = 0;
    }
    if (flag[3] == 0) {
        document.getElementById("a4").style.backgroundColor = "blue";
        flag[3] = 1;
    } else {
        document.getElementById("a4").style.backgroundColor = "red";
        flag[3] = 0;
    }
    if (flag[7] == 0) {
        document.getElementById("b2").style.backgroundColor = "blue";
        flag[7] = 1;
    } else {
        document.getElementById("b2").style.backgroundColor = "red";
        flag[7] = 0;
    }
    if (flag[9] == 0) {
        document.getElementById("b4").style.backgroundColor = "blue";
        flag[9] = 1;
    } else {
        document.getElementById("b4").style.backgroundColor = "red";
        flag[9] = 0;
    }
    if (flag[13] == 0) {
        document.getElementById("c2").style.backgroundColor = "blue";
        flag[13] = 1;
    } else {
        document.getElementById("c2").style.backgroundColor = "red";
        flag[13] = 0;
    }
    if (flag[14] == 0) {
        document.getElementById("c3").style.backgroundColor = "blue";
        flag[14] = 1;
    } else {
        document.getElementById("c3").style.backgroundColor = "red";
        flag[14] = 0;
    }
    if (flag[15] == 0) {
        document.getElementById("c4").style.backgroundColor = "blue";
        flag[15] = 1;
    } else {
        document.getElementById("c4").style.backgroundColor = "red";
        flag[15] = 0;
    }
    conteur_touch++;
}

function touch_b4() {
    if (flag[2] == 0) {
        document.getElementById("a3").style.backgroundColor = "blue";
        flag[2] = 1;
    } else {
        document.getElementById("a3").style.backgroundColor = "red";
        flag[2] = 0;
    }
    if (flag[3] == 0) {
        document.getElementById("a4").style.backgroundColor = "blue";
        flag[3] = 1;
    } else {
        document.getElementById("a4").style.backgroundColor = "red";
        flag[3] = 0;
    }
    if (flag[4] == 0) {
        document.getElementById("a5").style.backgroundColor = "blue";
        flag[4] = 1;
    } else {
        document.getElementById("a5").style.backgroundColor = "red";
        flag[4] = 0;
    }
    if (flag[8] == 0) {
        document.getElementById("b3").style.backgroundColor = "blue";
        flag[8] = 1;
    } else {
        document.getElementById("b3").style.backgroundColor = "red";
        flag[8] = 0;
    }
    if (flag[10] == 0) {
        document.getElementById("b5").style.backgroundColor = "blue";
        flag[10] = 1;
    } else {
        document.getElementById("b5").style.backgroundColor = "red";
        flag[10] = 0;
    }
    if (flag[14] == 0) {
        document.getElementById("c3").style.backgroundColor = "blue";
        flag[14] = 1;
    } else {
        document.getElementById("c3").style.backgroundColor = "red";
        flag[14] = 0;
    }
    if (flag[15] == 0) {
        document.getElementById("c4").style.backgroundColor = "blue";
        flag[15] = 1;
    } else {
        document.getElementById("c4").style.backgroundColor = "red";
        flag[15] = 0;
    }
    if (flag[16] == 0) {
        document.getElementById("c5").style.backgroundColor = "blue";
        flag[16] = 1;
    } else {
        document.getElementById("c5").style.backgroundColor = "red";
        flag[16] = 0;
    }
    conteur_touch++;
}

function touch_b5() {
    if (flag[3] == 0) {
        document.getElementById("a4").style.backgroundColor = "blue";
        flag[3] = 1;
    } else {
        document.getElementById("a4").style.backgroundColor = "red";
        flag[3] = 0;
    }
    if (flag[4] == 0) {
        document.getElementById("a5").style.backgroundColor = "blue";
        flag[4] = 1;
    } else {
        document.getElementById("a5").style.backgroundColor = "red";
        flag[4] = 0;
    }
    if (flag[5] == 0) {
        document.getElementById("a6").style.backgroundColor = "blue";
        flag[5] = 1;
    } else {
        document.getElementById("a6").style.backgroundColor = "red";
        flag[5] = 0;
    }
    if (flag[9] == 0) {
        document.getElementById("b4").style.backgroundColor = "blue";
        flag[9] = 1;
    } else {
        document.getElementById("b4").style.backgroundColor = "red";
        flag[9] = 0;
    }
    if (flag[11] == 0) {
        document.getElementById("b6").style.backgroundColor = "blue";
        flag[11] = 1;
    } else {
        document.getElementById("b6").style.backgroundColor = "red";
        flag[11] = 0;
    }
    if (flag[15] == 0) {
        document.getElementById("c4").style.backgroundColor = "blue";
        flag[15] = 1;
    } else {
        document.getElementById("c4").style.backgroundColor = "red";
        flag[15] = 0;
    }
    if (flag[16] == 0) {
        document.getElementById("c5").style.backgroundColor = "blue";
        flag[16] = 1;
    } else {
        document.getElementById("c5").style.backgroundColor = "red";
        flag[16] = 0;
    }
    if (flag[17] == 0) {
        document.getElementById("c6").style.backgroundColor = "blue";
        flag[17] = 1;
    } else {
        document.getElementById("c6").style.backgroundColor = "red";
        flag[17] = 0;
    }
    conteur_touch++;
}

function touch_b6() {
    if (flag[4] == 0) {
        document.getElementById("a5").style.backgroundColor = "blue";
        flag[4] = 1;
    } else {
        document.getElementById("a5").style.backgroundColor = "red";
        flag[4] = 0;
    }
    if (flag[5] == 0) {
        document.getElementById("a6").style.backgroundColor = "blue";
        flag[5] = 1;
    } else {
        document.getElementById("a6").style.backgroundColor = "red";
        flag[5] = 0;
    }
    if (flag[10] == 0) {
        document.getElementById("b5").style.backgroundColor = "blue";
        flag[10] = 1;
    } else {
        document.getElementById("b5").style.backgroundColor = "red";
        flag[10] = 0;
    }
    if (flag[16] == 0) {
        document.getElementById("c5").style.backgroundColor = "blue";
        flag[16] = 1;
    } else {
        document.getElementById("c5").style.backgroundColor = "red";
        flag[16] = 0;
    }
    if (flag[17] == 0) {
        document.getElementById("c6").style.backgroundColor = "blue";
        flag[17] = 1;
    } else {
        document.getElementById("c6").style.backgroundColor = "red";
        flag[17] = 0;
    }
    conteur_touch++;
}

function touch_c1() {
    if (flag[6] == 0) {
        document.getElementById("b1").style.backgroundColor = "blue";
        flag[6] = 1;
    } else {
        document.getElementById("b1").style.backgroundColor = "red";
        flag[6] = 0;
    }
    if (flag[7] == 0) {
        document.getElementById("b2").style.backgroundColor = "blue";
        flag[7] = 1;
    } else {
        document.getElementById("b2").style.backgroundColor = "red";
        flag[7] = 0;
    }
    if (flag[13] == 0) {
        document.getElementById("c2").style.backgroundColor = "blue";
        flag[13] = 1;
    } else {
        document.getElementById("c2").style.backgroundColor = "red";
        flag[13] = 0;
    }
    if (flag[18] == 0) {
        document.getElementById("d1").style.backgroundColor = "blue";
        flag[18] = 1;
    } else {
        document.getElementById("d1").style.backgroundColor = "red";
        flag[18] = 0;
    }
    if (flag[19] == 0) {
        document.getElementById("d2").style.backgroundColor = "blue";
        flag[19] = 1;
    } else {
        document.getElementById("d2").style.backgroundColor = "red";
        flag[19] = 0;
    }
    conteur_touch++;
}

function touch_c2() {
    if (flag[6] == 0) {
        document.getElementById("b1").style.backgroundColor = "blue";
        flag[6] = 1;
    } else {
        document.getElementById("b1").style.backgroundColor = "red";
        flag[6] = 0;
    }
    if (flag[7] == 0) {
        document.getElementById("b2").style.backgroundColor = "blue";
        flag[7] = 1;
    } else {
        document.getElementById("b2").style.backgroundColor = "red";
        flag[7] = 0;
    }
    if (flag[8] == 0) {
        document.getElementById("b3").style.backgroundColor = "blue";
        flag[8] = 1;
    } else {
        document.getElementById("b3").style.backgroundColor = "red";
        flag[8] = 0;
    }
    if (flag[12] == 0) {
        document.getElementById("c1").style.backgroundColor = "blue";
        flag[12] = 1;
    } else {
        document.getElementById("c1").style.backgroundColor = "red";
        flag[12] = 0;
    }
    if (flag[14] == 0) {
        document.getElementById("c3").style.backgroundColor = "blue";
        flag[14] = 1;
    } else {
        document.getElementById("c3").style.backgroundColor = "red";
        flag[14] = 0;
    }
    if (flag[18] == 0) {
        document.getElementById("d1").style.backgroundColor = "blue";
        flag[18] = 1;
    } else {
        document.getElementById("d1").style.backgroundColor = "red";
        flag[18] = 0;
    }
    if (flag[19] == 0) {
        document.getElementById("d2").style.backgroundColor = "blue";
        flag[19] = 1;
    } else {
        document.getElementById("d2").style.backgroundColor = "red";
        flag[19] = 0;
    }
    if (flag[20] == 0) {
        document.getElementById("d3").style.backgroundColor = "blue";
        flag[20] = 1;
    } else {
        document.getElementById("d3").style.backgroundColor = "red";
        flag[20] = 0;
    }
    conteur_touch++;
}

function touch_c3() {
    if (flag[7] == 0) {
        document.getElementById("b2").style.backgroundColor = "blue";
        flag[7] = 1;
    } else {
        document.getElementById("b2").style.backgroundColor = "red";
        flag[7] = 0;
    }
    if (flag[8] == 0) {
        document.getElementById("b3").style.backgroundColor = "blue";
        flag[8] = 1;
    } else {
        document.getElementById("b3").style.backgroundColor = "red";
        flag[8] = 0;
    }
    if (flag[9] == 0) {
        document.getElementById("b4").style.backgroundColor = "blue";
        flag[9] = 1;
    } else {
        document.getElementById("b4").style.backgroundColor = "red";
        flag[9] = 0;
    }
    if (flag[13] == 0) {
        document.getElementById("c2").style.backgroundColor = "blue";
        flag[13] = 1;
    } else {
        document.getElementById("c2").style.backgroundColor = "red";
        flag[13] = 0;
    }
    if (flag[15] == 0) {
        document.getElementById("c4").style.backgroundColor = "blue";
        flag[15] = 1;
    } else {
        document.getElementById("c4").style.backgroundColor = "red";
        flag[15] = 0;
    }
    if (flag[19] == 0) {
        document.getElementById("d2").style.backgroundColor = "blue";
        flag[19] = 1;
    } else {
        document.getElementById("d2").style.backgroundColor = "red";
        flag[19] = 0;
    }
    if (flag[20] == 0) {
        document.getElementById("d3").style.backgroundColor = "blue";
        flag[20] = 1;
    } else {
        document.getElementById("d3").style.backgroundColor = "red";
        flag[20] = 0;
    }
    if (flag[21] == 0) {
        document.getElementById("d4").style.backgroundColor = "blue";
        flag[21] = 1;
    } else {
        document.getElementById("d4").style.backgroundColor = "red";
        flag[21] = 0;
    }
    conteur_touch++;
}

function touch_c4() {
    if (flag[8] == 0) {
        document.getElementById("b3").style.backgroundColor = "blue";
        flag[8] = 1;
    } else {
        document.getElementById("b3").style.backgroundColor = "red";
        flag[8] = 0;
    }
    if (flag[9] == 0) {
        document.getElementById("b4").style.backgroundColor = "blue";
        flag[9] = 1;
    } else {
        document.getElementById("b4").style.backgroundColor = "red";
        flag[9] = 0;
    }
    if (flag[10] == 0) {
        document.getElementById("b5").style.backgroundColor = "blue";
        flag[10] = 1;
    } else {
        document.getElementById("b5").style.backgroundColor = "red";
        flag[10] = 0;
    }
    if (flag[14] == 0) {
        document.getElementById("c3").style.backgroundColor = "blue";
        flag[14] = 1;
    } else {
        document.getElementById("c3").style.backgroundColor = "red";
        flag[14] = 0;
    }
    if (flag[16] == 0) {
        document.getElementById("c5").style.backgroundColor = "blue";
        flag[16] = 1;
    } else {
        document.getElementById("c5").style.backgroundColor = "red";
        flag[16] = 0;
    }
    if (flag[20] == 0) {
        document.getElementById("d3").style.backgroundColor = "blue";
        flag[20] = 1;
    } else {
        document.getElementById("d3").style.backgroundColor = "red";
        flag[20] = 0;
    }
    if (flag[21] == 0) {
        document.getElementById("d4").style.backgroundColor = "blue";
        flag[21] = 1;
    } else {
        document.getElementById("d4").style.backgroundColor = "red";
        flag[21] = 0;
    }
    if (flag[22] == 0) {
        document.getElementById("d5").style.backgroundColor = "blue";
        flag[22] = 1;
    } else {
        document.getElementById("d5").style.backgroundColor = "red";
        flag[22] = 0;
    }
    conteur_touch++;
}

function touch_c5() {
    if (flag[9] == 0) {
        document.getElementById("b4").style.backgroundColor = "blue";
        flag[9] = 1;
    } else {
        document.getElementById("b4").style.backgroundColor = "red";
        flag[9] = 0;
    }
    if (flag[10] == 0) {
        document.getElementById("b5").style.backgroundColor = "blue";
        flag[10] = 1;
    } else {
        document.getElementById("b5").style.backgroundColor = "red";
        flag[10] = 0;
    }
    if (flag[11] == 0) {
        document.getElementById("b6").style.backgroundColor = "blue";
        flag[11] = 1;
    } else {
        document.getElementById("b6").style.backgroundColor = "red";
        flag[11] = 0;
    }
    if (flag[15] == 0) {
        document.getElementById("c4").style.backgroundColor = "blue";
        flag[15] = 1;
    } else {
        document.getElementById("c4").style.backgroundColor = "red";
        flag[15] = 0;
    }
    if (flag[17] == 0) {
        document.getElementById("c6").style.backgroundColor = "blue";
        flag[17] = 1;
    } else {
        document.getElementById("c6").style.backgroundColor = "red";
        flag[17] = 0;
    }
    if (flag[21] == 0) {
        document.getElementById("d4").style.backgroundColor = "blue";
        flag[21] = 1;
    } else {
        document.getElementById("d4").style.backgroundColor = "red";
        flag[21] = 0;
    }
    if (flag[22] == 0) {
        document.getElementById("d5").style.backgroundColor = "blue";
        flag[22] = 1;
    } else {
        document.getElementById("d5").style.backgroundColor = "red";
        flag[22] = 0;
    }
    if (flag[23] == 0) {
        document.getElementById("d6").style.backgroundColor = "blue";
        flag[23] = 1;
    } else {
        document.getElementById("d6").style.backgroundColor = "red";
        flag[23] = 0;
    }
    conteur_touch++;
}

function touch_c6() {
    if (flag[10] == 0) {
        document.getElementById("b5").style.backgroundColor = "blue";
        flag[10] = 1;
    } else {
        document.getElementById("b5").style.backgroundColor = "red";
        flag[10] = 0;
    }
    if (flag[11] == 0) {
        document.getElementById("b6").style.backgroundColor = "blue";
        flag[11] = 1;
    } else {
        document.getElementById("b6").style.backgroundColor = "red";
        flag[11] = 0;
    }
    if (flag[16] == 0) {
        document.getElementById("c5").style.backgroundColor = "blue";
        flag[16] = 1;
    } else {
        document.getElementById("c5").style.backgroundColor = "red";
        flag[16] = 0;
    }
    if (flag[22] == 0) {
        document.getElementById("d5").style.backgroundColor = "blue";
        flag[22] = 1;
    } else {
        document.getElementById("d5").style.backgroundColor = "red";
        flag[22] = 0;
    }
    if (flag[23] == 0) {
        document.getElementById("d6").style.backgroundColor = "blue";
        flag[23] = 1;
    } else {
        document.getElementById("d6").style.backgroundColor = "red";
        flag[23] = 0;
    }
    conteur_touch++;
}

function touch_d1() {
    if (flag[12] == 0) {
        document.getElementById("c1").style.backgroundColor = "blue";
        flag[12] = 1;
    } else {
        document.getElementById("c1").style.backgroundColor = "red";
        flag[12] = 0;
    }
    if (flag[13] == 0) {
        document.getElementById("c2").style.backgroundColor = "blue";
        flag[13] = 1;
    } else {
        document.getElementById("c2").style.backgroundColor = "red";
        flag[13] = 0;
    }
    if (flag[19] == 0) {
        document.getElementById("d2").style.backgroundColor = "blue";
        flag[19] = 1;
    } else {
        document.getElementById("d2").style.backgroundColor = "red";
        flag[19] = 0;
    }
    if (flag[24] == 0) {
        document.getElementById("e1").style.backgroundColor = "blue";
        flag[24] = 1;
    } else {
        document.getElementById("e1").style.backgroundColor = "red";
        flag[24] = 0;
    }
    if (flag[25] == 0) {
        document.getElementById("e2").style.backgroundColor = "blue";
        flag[25] = 1;
    } else {
        document.getElementById("e2").style.backgroundColor = "red";
        flag[25] = 0;
    }
    conteur_touch++;
}

function touch_d2() {
    if (flag[12] == 0) {
        document.getElementById("c1").style.backgroundColor = "blue";
        flag[12] = 1;
    } else {
        document.getElementById("c1").style.backgroundColor = "red";
        flag[12] = 0;
    }
    if (flag[13] == 0) {
        document.getElementById("c2").style.backgroundColor = "blue";
        flag[13] = 1;
    } else {
        document.getElementById("c2").style.backgroundColor = "red";
        flag[13] = 0;
    }
    if (flag[14] == 0) {
        document.getElementById("c3").style.backgroundColor = "blue";
        flag[14] = 1;
    } else {
        document.getElementById("c3").style.backgroundColor = "red";
        flag[14] = 0;
    }
    if (flag[18] == 0) {
        document.getElementById("d1").style.backgroundColor = "blue";
        flag[18] = 1;
    } else {
        document.getElementById("d1").style.backgroundColor = "red";
        flag[18] = 0;
    }
    if (flag[20] == 0) {
        document.getElementById("d3").style.backgroundColor = "blue";
        flag[20] = 1;
    } else {
        document.getElementById("d3").style.backgroundColor = "red";
        flag[20] = 0;
    }
    if (flag[24] == 0) {
        document.getElementById("e1").style.backgroundColor = "blue";
        flag[24] = 1;
    } else {
        document.getElementById("e1").style.backgroundColor = "red";
        flag[24] = 0;
    }
    if (flag[25] == 0) {
        document.getElementById("e2").style.backgroundColor = "blue";
        flag[25] = 1;
    } else {
        document.getElementById("e2").style.backgroundColor = "red";
        flag[25] = 0;
    }
    if (flag[26] == 0) {
        document.getElementById("e3").style.backgroundColor = "blue";
        flag[26] = 1;
    } else {
        document.getElementById("e3").style.backgroundColor = "red";
        flag[26] = 0;
    }
    conteur_touch++;
}

function touch_d3() {
    if (flag[13] == 0) {
        document.getElementById("c2").style.backgroundColor = "blue";
        flag[13] = 1;
    } else {
        document.getElementById("c2").style.backgroundColor = "red";
        flag[13] = 0;
    }
    if (flag[14] == 0) {
        document.getElementById("c3").style.backgroundColor = "blue";
        flag[14] = 1;
    } else {
        document.getElementById("c3").style.backgroundColor = "red";
        flag[14] = 0;
    }
    if (flag[15] == 0) {
        document.getElementById("c4").style.backgroundColor = "blue";
        flag[15] = 1;
    } else {
        document.getElementById("c4").style.backgroundColor = "red";
        flag[15] = 0;
    }
    if (flag[19] == 0) {
        document.getElementById("d2").style.backgroundColor = "blue";
        flag[19] = 1;
    } else {
        document.getElementById("d2").style.backgroundColor = "red";
        flag[19] = 0;
    }
    if (flag[21] == 0) {
        document.getElementById("d4").style.backgroundColor = "blue";
        flag[21] = 1;
    } else {
        document.getElementById("d4").style.backgroundColor = "red";
        flag[21] = 0;
    }
    if (flag[25] == 0) {
        document.getElementById("e2").style.backgroundColor = "blue";
        flag[25] = 1;
    } else {
        document.getElementById("e2").style.backgroundColor = "red";
        flag[25] = 0;
    }
    if (flag[26] == 0) {
        document.getElementById("e3").style.backgroundColor = "blue";
        flag[26] = 1;
    } else {
        document.getElementById("e3").style.backgroundColor = "red";
        flag[26] = 0;
    }
    if (flag[27] == 0) {
        document.getElementById("e4").style.backgroundColor = "blue";
        flag[27] = 1;
    } else {
        document.getElementById("e4").style.backgroundColor = "red";
        flag[27] = 0;
    }
    conteur_touch++;
}

function touch_d4() {
    if (flag[14] == 0) {
        document.getElementById("c3").style.backgroundColor = "blue";
        flag[14] = 1;
    } else {
        document.getElementById("c3").style.backgroundColor = "red";
        flag[14] = 0;
    }
    if (flag[15] == 0) {
        document.getElementById("c4").style.backgroundColor = "blue";
        flag[15] = 1;
    } else {
        document.getElementById("c4").style.backgroundColor = "red";
        flag[15] = 0;
    }
    if (flag[16] == 0) {
        document.getElementById("c5").style.backgroundColor = "blue";
        flag[16] = 1;
    } else {
        document.getElementById("c5").style.backgroundColor = "red";
        flag[16] = 0;
    }
    if (flag[20] == 0) {
        document.getElementById("d3").style.backgroundColor = "blue";
        flag[20] = 1;
    } else {
        document.getElementById("d3").style.backgroundColor = "red";
        flag[20] = 0;
    }
    if (flag[22] == 0) {
        document.getElementById("d5").style.backgroundColor = "blue";
        flag[22] = 1;
    } else {
        document.getElementById("d5").style.backgroundColor = "red";
        flag[22] = 0;
    }
    if (flag[26] == 0) {
        document.getElementById("e3").style.backgroundColor = "blue";
        flag[26] = 1;
    } else {
        document.getElementById("e3").style.backgroundColor = "red";
        flag[26] = 0;
    }
    if (flag[27] == 0) {
        document.getElementById("e4").style.backgroundColor = "blue";
        flag[27] = 1;
    } else {
        document.getElementById("e4").style.backgroundColor = "red";
        flag[27] = 0;
    }
    if (flag[28] == 0) {
        document.getElementById("e5").style.backgroundColor = "blue";
        flag[28] = 1;
    } else {
        document.getElementById("e5").style.backgroundColor = "red";
        flag[28] = 0;
    }
    conteur_touch++;
}

function touch_d5() {
    if (flag[15] == 0) {
        document.getElementById("c4").style.backgroundColor = "blue";
        flag[15] = 1;
    } else {
        document.getElementById("c4").style.backgroundColor = "red";
        flag[15] = 0;
    }
    if (flag[16] == 0) {
        document.getElementById("c5").style.backgroundColor = "blue";
        flag[16] = 1;
    } else {
        document.getElementById("c5").style.backgroundColor = "red";
        flag[16] = 0;
    }
    if (flag[17] == 0) {
        document.getElementById("c6").style.backgroundColor = "blue";
        flag[17] = 1;
    } else {
        document.getElementById("c6").style.backgroundColor = "red";
        flag[17] = 0;
    }
    if (flag[21] == 0) {
        document.getElementById("d4").style.backgroundColor = "blue";
        flag[21] = 1;
    } else {
        document.getElementById("d4").style.backgroundColor = "red";
        flag[21] = 0;
    }
    if (flag[23] == 0) {
        document.getElementById("d6").style.backgroundColor = "blue";
        flag[23] = 1;
    } else {
        document.getElementById("d6").style.backgroundColor = "red";
        flag[23] = 0;
    }
    if (flag[27] == 0) {
        document.getElementById("e4").style.backgroundColor = "blue";
        flag[27] = 1;
    } else {
        document.getElementById("e4").style.backgroundColor = "red";
        flag[27] = 0;
    }
    if (flag[28] == 0) {
        document.getElementById("e5").style.backgroundColor = "blue";
        flag[28] = 1;
    } else {
        document.getElementById("e5").style.backgroundColor = "red";
        flag[28] = 0;
    }
    if (flag[29] == 0) {
        document.getElementById("e6").style.backgroundColor = "blue";
        flag[29] = 1;
    } else {
        document.getElementById("e6").style.backgroundColor = "red";
        flag[29] = 0;
    }
}

function touch_d6() {
    if (flag[16] == 0) {
        document.getElementById("c5").style.backgroundColor = "blue";
        flag[16] = 1;
    } else {
        document.getElementById("c5").style.backgroundColor = "red";
        flag[16] = 0;
    }
    if (flag[17] == 0) {
        document.getElementById("c6").style.backgroundColor = "blue";
        flag[17] = 1;
    } else {
        document.getElementById("c6").style.backgroundColor = "red";
        flag[17] = 0;
    }
    if (flag[22] == 0) {
        document.getElementById("d5").style.backgroundColor = "blue";
        flag[22] = 1;
    } else {
        document.getElementById("d5").style.backgroundColor = "red";
        flag[22] = 0;
    }
    if (flag[28] == 0) {
        document.getElementById("e5").style.backgroundColor = "blue";
        flag[28] = 1;
    } else {
        document.getElementById("e5").style.backgroundColor = "red";
        flag[28] = 0;
    }
    if (flag[29] == 0) {
        document.getElementById("e6").style.backgroundColor = "blue";
        flag[29] = 1;
    } else {
        document.getElementById("e6").style.backgroundColor = "red";
        flag[29] = 0;
    }
    conteur_touch++;
}

function touch_e1() {
    if (flag[18] == 0) {
        document.getElementById("d1").style.backgroundColor = "blue";
        flag[18] = 1;
    } else {
        document.getElementById("d1").style.backgroundColor = "red";
        flag[18] = 0;
    }
    if (flag[19] == 0) {
        document.getElementById("d2").style.backgroundColor = "blue";
        flag[19] = 1;
    } else {
        document.getElementById("d2").style.backgroundColor = "red";
        flag[19] = 0;
    }
    if (flag[25] == 0) {
        document.getElementById("e2").style.backgroundColor = "blue";
        flag[25] = 1;
    } else {
        document.getElementById("e2").style.backgroundColor = "red";
        flag[25] = 0;
    }
    if (flag[30] == 0) {
        document.getElementById("f1").style.backgroundColor = "blue";
        flag[30] = 1;
    } else {
        document.getElementById("f1").style.backgroundColor = "red";
        flag[30] = 0;
    }
    if (flag[31] == 0) {
        document.getElementById("f2").style.backgroundColor = "blue";
        flag[31] = 1;
    } else {
        document.getElementById("f2").style.backgroundColor = "red";
        flag[31] = 0;
    }
    conteur_touch++;
}

function touch_e2() {
    if (flag[18] == 0) {
        document.getElementById("d1").style.backgroundColor = "blue";
        flag[18] = 1;
    } else {
        document.getElementById("d1").style.backgroundColor = "red";
        flag[18] = 0;
    }
    if (flag[19] == 0) {
        document.getElementById("d2").style.backgroundColor = "blue";
        flag[19] = 1;
    } else {
        document.getElementById("d2").style.backgroundColor = "red";
        flag[19] = 0;
    }
    if (flag[20] == 0) {
        document.getElementById("d3").style.backgroundColor = "blue";
        flag[20] = 1;
    } else {
        document.getElementById("d3").style.backgroundColor = "red";
        flag[20] = 0;
    }
    if (flag[24] == 0) {
        document.getElementById("e1").style.backgroundColor = "blue";
        flag[24] = 1;
    } else {
        document.getElementById("e1").style.backgroundColor = "red";
        flag[24] = 0;
    }
    if (flag[26] == 0) {
        document.getElementById("e3").style.backgroundColor = "blue";
        flag[26] = 1;
    } else {
        document.getElementById("e3").style.backgroundColor = "red";
        flag[26] = 0;
    }
    if (flag[30] == 0) {
        document.getElementById("f1").style.backgroundColor = "blue";
        flag[30] = 1;
    } else {
        document.getElementById("f1").style.backgroundColor = "red";
        flag[30] = 0;
    }
    if (flag[31] == 0) {
        document.getElementById("f2").style.backgroundColor = "blue";
        flag[31] = 1;
    } else {
        document.getElementById("f2").style.backgroundColor = "red";
        flag[31] = 0;
    }
    if (flag[32] == 0) {
        document.getElementById("f3").style.backgroundColor = "blue";
        flag[32] = 1;
    } else {
        document.getElementById("f3").style.backgroundColor = "red";
        flag[32] = 0;
    }
    conteur_touch++;
}

function touch_e3() {
    if (flag[19] == 0) {
        document.getElementById("d2").style.backgroundColor = "blue";
        flag[19] = 1;
    } else {
        document.getElementById("d2").style.backgroundColor = "red";
        flag[19] = 0;
    }
    if (flag[20] == 0) {
        document.getElementById("d3").style.backgroundColor = "blue";
        flag[20] = 1;
    } else {
        document.getElementById("d3").style.backgroundColor = "red";
        flag[20] = 0;
    }
    if (flag[21] == 0) {
        document.getElementById("d4").style.backgroundColor = "blue";
        flag[21] = 1;
    } else {
        document.getElementById("d4").style.backgroundColor = "red";
        flag[21] = 0;
    }
    if (flag[25] == 0) {
        document.getElementById("e2").style.backgroundColor = "blue";
        flag[25] = 1;
    } else {
        document.getElementById("e2").style.backgroundColor = "red";
        flag[25] = 0;
    }
    if (flag[27] == 0) {
        document.getElementById("e4").style.backgroundColor = "blue";
        flag[27] = 1;
    } else {
        document.getElementById("e4").style.backgroundColor = "red";
        flag[27] = 0;
    }
    if (flag[31] == 0) {
        document.getElementById("f2").style.backgroundColor = "blue";
        flag[31] = 1;
    } else {
        document.getElementById("f2").style.backgroundColor = "red";
        flag[31] = 0;
    }
    if (flag[32] == 0) {
        document.getElementById("f3").style.backgroundColor = "blue";
        flag[32] = 1;
    } else {
        document.getElementById("f3").style.backgroundColor = "red";
        flag[32] = 0;
    }
    if (flag[33] == 0) {
        document.getElementById("f4").style.backgroundColor = "blue";
        flag[33] = 1;
    } else {
        document.getElementById("f4").style.backgroundColor = "red";
        flag[33] = 0;
    }
    conteur_touch++;
}

function touch_e4() {
    if (flag[20] == 0) {
        document.getElementById("d3").style.backgroundColor = "blue";
        flag[20] = 1;
    } else {
        document.getElementById("d3").style.backgroundColor = "red";
        flag[20] = 0;
    }
    if (flag[21] == 0) {
        document.getElementById("d4").style.backgroundColor = "blue";
        flag[21] = 1;
    } else {
        document.getElementById("d4").style.backgroundColor = "red";
        flag[21] = 0;
    }
    if (flag[22] == 0) {
        document.getElementById("d5").style.backgroundColor = "blue";
        flag[22] = 1;
    } else {
        document.getElementById("d5").style.backgroundColor = "red";
        flag[22] = 0;
    }
    if (flag[26] == 0) {
        document.getElementById("e3").style.backgroundColor = "blue";
        flag[26] = 1;
    } else {
        document.getElementById("e3").style.backgroundColor = "red";
        flag[26] = 0;
    }
    if (flag[28] == 0) {
        document.getElementById("e5").style.backgroundColor = "blue";
        flag[28] = 1;
    } else {
        document.getElementById("e5").style.backgroundColor = "red";
        flag[28] = 0;
    }
    if (flag[32] == 0) {
        document.getElementById("f3").style.backgroundColor = "blue";
        flag[32] = 1;
    } else {
        document.getElementById("f3").style.backgroundColor = "red";
        flag[32] = 0;
    }
    if (flag[33] == 0) {
        document.getElementById("f4").style.backgroundColor = "blue";
        flag[33] = 1;
    } else {
        document.getElementById("f4").style.backgroundColor = "red";
        flag[33] = 0;
    }
    if (flag[34] == 0) {
        document.getElementById("f5").style.backgroundColor = "blue";
        flag[34] = 1;
    } else {
        document.getElementById("f5").style.backgroundColor = "red";
        flag[34] = 0;
    }
    conteur_touch++;
}

function touch_e5() {
    if (flag[21] == 0) {
        document.getElementById("d4").style.backgroundColor = "blue";
        flag[21] = 1;
    } else {
        document.getElementById("d4").style.backgroundColor = "red";
        flag[21] = 0;
    }
    if (flag[22] == 0) {
        document.getElementById("d5").style.backgroundColor = "blue";
        flag[22] = 1;
    } else {
        document.getElementById("d5").style.backgroundColor = "red";
        flag[22] = 0;
    }
    if (flag[23] == 0) {
        document.getElementById("d6").style.backgroundColor = "blue";
        flag[23] = 1;
    } else {
        document.getElementById("d6").style.backgroundColor = "red";
        flag[23] = 0;
    }
    if (flag[27] == 0) {
        document.getElementById("e4").style.backgroundColor = "blue";
        flag[27] = 1;
    } else {
        document.getElementById("e4").style.backgroundColor = "red";
        flag[27] = 0;
    }
    if (flag[29] == 0) {
        document.getElementById("e6").style.backgroundColor = "blue";
        flag[29] = 1;
    } else {
        document.getElementById("e6").style.backgroundColor = "red";
        flag[29] = 0;
    }
    if (flag[33] == 0) {
        document.getElementById("f4").style.backgroundColor = "blue";
        flag[33] = 1;
    } else {
        document.getElementById("f4").style.backgroundColor = "red";
        flag[33] = 0;
    }
    if (flag[34] == 0) {
        document.getElementById("f5").style.backgroundColor = "blue";
        flag[34] = 1;
    } else {
        document.getElementById("f5").style.backgroundColor = "red";
        flag[34] = 0;
    }
    if (flag[35] == 0) {
        document.getElementById("f6").style.backgroundColor = "blue";
        flag[35] = 1;
    } else {
        document.getElementById("f6").style.backgroundColor = "red";
        flag[35] = 0;
    }
    conteur_touch++;
}

function touch_e6() {
    if (flag[22] == 0) {
        document.getElementById("d5").style.backgroundColor = "blue";
        flag[22] = 1;
    } else {
        document.getElementById("d5").style.backgroundColor = "red";
        flag[22] = 0;
    }
    if (flag[23] == 0) {
        document.getElementById("d6").style.backgroundColor = "blue";
        flag[23] = 1;
    } else {
        document.getElementById("d6").style.backgroundColor = "red";
        flag[23] = 0;
    }
    if (flag[28] == 0) {
        document.getElementById("e5").style.backgroundColor = "blue";
        flag[28] = 1;
    } else {
        document.getElementById("e5").style.backgroundColor = "red";
        flag[28] = 0;
    }
    if (flag[34] == 0) {
        document.getElementById("f5").style.backgroundColor = "blue";
        flag[34] = 1;
    } else {
        document.getElementById("f5").style.backgroundColor = "red";
        flag[34] = 0;
    }
    if (flag[35] == 0) {
        document.getElementById("f6").style.backgroundColor = "blue";
        flag[35] = 1;
    } else {
        document.getElementById("f6").style.backgroundColor = "red";
        flag[35] = 0;
    }
    conteur_touch++;
}

function touch_f1() {
    if (flag[24] == 0) {
        document.getElementById("e1").style.backgroundColor = "blue";
        flag[24] = 1;
    } else {
        document.getElementById("e1").style.backgroundColor = "red";
        flag[24] = 0;
    }
    if (flag[25] == 0) {
        document.getElementById("e2").style.backgroundColor = "blue";
        flag[25] = 1;
    } else {
        document.getElementById("e2").style.backgroundColor = "red";
        flag[25] = 0;
    }
    if (flag[31] == 0) {
        document.getElementById("f2").style.backgroundColor = "blue";
        flag[31] = 1;
    } else {
        document.getElementById("f2").style.backgroundColor = "red";
        flag[31] = 0;
    } conteur_touch++;
}

function touch_f2() {
    if (flag[24] == 0) {
        document.getElementById("e1").style.backgroundColor = "blue";
        flag[24] = 1;
    } else {
        document.getElementById("e1").style.backgroundColor = "red";
        flag[24] = 0;
    }
    if (flag[25] == 0) {
        document.getElementById("e2").style.backgroundColor = "blue";
        flag[25] = 1;
    } else {
        document.getElementById("e2").style.backgroundColor = "red";
        flag[25] = 0;
    }
    if (flag[26] == 0) {
        document.getElementById("e3").style.backgroundColor = "blue";
        flag[26] = 1;
    } else {
        document.getElementById("e3").style.backgroundColor = "red";
        flag[26] = 0;
    }
    if (flag[30] == 0) {
        document.getElementById("f1").style.backgroundColor = "blue";
        flag[30] = 1;
    } else {
        document.getElementById("f1").style.backgroundColor = "red";
        flag[30] = 0;
    }
    if (flag[31] == 0) {
        document.getElementById("f3").style.backgroundColor = "blue";
        flag[31] = 1;
    } else {
        document.getElementById("f3").style.backgroundColor = "red";
        flag[31] = 0;
    }
    conteur_touch++;
}

function touch_f3() {
    if (flag[25] == 0) {
        document.getElementById("e2").style.backgroundColor = "blue";
        flag[25] = 1;
    } else {
        document.getElementById("e2").style.backgroundColor = "red";
        flag[25] = 0;
    }
    if (flag[26] == 0) {
        document.getElementById("e3").style.backgroundColor = "blue";
        flag[26] = 1;
    } else {
        document.getElementById("e3").style.backgroundColor = "red";
        flag[26] = 0;
    }
    if (flag[27] == 0) {
        document.getElementById("e4").style.backgroundColor = "blue";
        flag[27] = 1;
    } else {
        document.getElementById("e4").style.backgroundColor = "red";
        flag[27] = 0;
    }
    if (flag[31] == 0) {
        document.getElementById("f2").style.backgroundColor = "blue";
        flag[31] = 1;
    } else {
        document.getElementById("f2").style.backgroundColor = "red";
        flag[31] = 0;
    }
    if (flag[33] == 0) {
        document.getElementById("f4").style.backgroundColor = "blue";
        flag[33] = 1;
    } else {
        document.getElementById("f4").style.backgroundColor = "red";
        flag[33] = 0;
    }
    conteur_touch++;
}

function touch_f4() {
    if (flag[26] == 0) {
        document.getElementById("e3").style.backgroundColor = "blue";
        flag[26] = 1;
    } else {
        document.getElementById("e3").style.backgroundColor = "red";
        flag[26] = 0;
    }
    if (flag[27] == 0) {
        document.getElementById("e4").style.backgroundColor = "blue";
        flag[27] = 1;
    } else {
        document.getElementById("e4").style.backgroundColor = "red";
        flag[27] = 0;
    }
    if (flag[28] == 0) {
        document.getElementById("e5").style.backgroundColor = "blue";
        flag[28] = 1;
    } else {
        document.getElementById("e5").style.backgroundColor = "red";
        flag[28] = 0;
    }
    if (flag[32] == 0) {
        document.getElementById("f3").style.backgroundColor = "blue";
        flag[32] = 1;
    } else {
        document.getElementById("f3").style.backgroundColor = "red";
        flag[32] = 0;
    }
    if (flag[34] == 0) {
        document.getElementById("f5").style.backgroundColor = "blue";
        flag[34] = 1;
    } else {
        document.getElementById("f5").style.backgroundColor = "red";
        flag[34] = 0;
    }
    conteur_touch++;
}

function touch_f5() {
    if (flag[27] == 0) {
        document.getElementById("e4").style.backgroundColor = "blue";
        flag[27] = 1;
    } else {
        document.getElementById("e4").style.backgroundColor = "red";
        flag[27] = 0;
    }
    if (flag[28] == 0) {
        document.getElementById("e5").style.backgroundColor = "blue";
        flag[28] = 1;
    } else {
        document.getElementById("e5").style.backgroundColor = "red";
        flag[28] = 0;
    }
    if (flag[29] == 0) {
        document.getElementById("e6").style.backgroundColor = "blue";
        flag[29] = 1;
    } else {
        document.getElementById("e6").style.backgroundColor = "red";
        flag[29] = 0;
    }
    if (flag[33] == 0) {
        document.getElementById("f4").style.backgroundColor = "blue";
        flag[33] = 1;
    } else {
        document.getElementById("f4").style.backgroundColor = "red";
        flag[33] = 0;
    }
    if (flag[35] == 0) {
        document.getElementById("f6").style.backgroundColor = "blue";
        flag[35] = 1;
    } else {
        document.getElementById("f6").style.backgroundColor = "red";
        flag[35] = 0;
    }
    conteur_touch++;
}

function touch_f6() {
    if (flag[28] == 0) {
        document.getElementById("e5").style.backgroundColor = "blue";
        flag[28] = 1;
    } else {
        document.getElementById("e5").style.backgroundColor = "red";
        flag[28] = 0;
    }
    if (flag[29] == 0) {
        document.getElementById("e6").style.backgroundColor = "blue";
        flag[29] = 1;
    } else {
        document.getElementById("e6").style.backgroundColor = "red";
        flag[29] = 0;
    }
    if (flag[34] == 0) {
        document.getElementById("f5").style.backgroundColor = "blue";
        flag[34] = 1;
    } else {
        document.getElementById("f5").style.backgroundColor = "red";
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

