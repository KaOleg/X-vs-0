let table = document.querySelector("table");
table.onclick = function (event) {
    if (event.target.tagName == "TD") {
        let pictureName = "url(крестик.png)";
        let backColor = "purple";
        let symbol = "x";
        if (turn % 2 == 0) {
            pictureName = "url(нолик.png)";
            backColor = "blue";
            symbol = 0;
        }
        let td = event.target;
        let colomnIndex = td.cellIndex;
        let rowIndex = td.parentElement.rowIndex;
        if(playGround [rowIndex] [colomnIndex] == "*") {
            playGround[rowIndex][colomnIndex] = symbol;
            td.style.backgroundColor = backColor;
            td.style.backgroundImage = pictureName;
            turn = turn + 1;
            console.log(playGround);
            if (winner() == "x") {
                alert("Победили x");
                changeDisabled()

            } else if (winner() === 0) {
                alert("Победили 0");
                changeDisabled()
            } else if (winner() == false && turn > 9) {
                alert("Ничья");
                changeDisabled()
            }
        }
        
    }
    
};
function changeDisabled() {
    table.style.pointerEvents = "none"
}
function newGame() {
    window.location.reload()
}
let playGround = [
    ["*", "*", "*"],
    ["*", "*", "*"],
    ["*", "*", "*"],
];
let turn = 1;
function winner() {
    if (
        playGround[0][0] == "x" &&
        playGround[0][1] == "x" &&
        playGround[0][2] == "x"
    ) {
        return "x";
    }
    if (
        playGround[1][0] == "x" &&
        playGround[1][1] == "x" &&
        playGround[1][2] == "x"
    ) {
        return "x";
    }
    if (
        playGround[2][0] == "x" &&
        playGround[2][1] == "x" &&
        playGround[2][2] == "x"
    ) {
        return "x";
    }
    if (
        playGround[0][0] == "x" &&
        playGround[1][0] == "x" &&
        playGround[2][0] == "x"
    ) {
        return "x";
    }
    if (
        playGround[0][1] == "x" &&
        playGround[1][1] == "x" &&
        playGround[2][1] == "x"
    ) {
        return "x";
    }
    if (
        playGround[0][2] == "x" &&
        playGround[1][2] == "x" &&
        playGround[2][2] == "x"
    ) {
        return "x";
    }
    if (
        playGround[0][0] == "x" &&
        playGround[1][1] == "x" &&
        playGround[2][2] == "x"
    ) {
        return "x";
    }
    if (
        playGround[0][2] == "x" &&
        playGround[1][1] == "x" &&
        playGround[2][0] == "x"
    ) {
        return "x";
    }

    if (
        playGround[0][0] == 0 &&
        playGround[0][1] == 0 &&
        playGround[0][2] == 0
    ) {
        return 0;
    }
    if (
        playGround[1][0] == 0 &&
        playGround[1][1] == 0 &&
        playGround[1][2] == 0
    ) {
        return 0;
    }
    if (
        playGround[2][0] == 0 &&
        playGround[2][1] == 0 &&
        playGround[2][2] == 0
    ) {
        return 0;
    }
    if (
        playGround[0][0] == 0 &&
        playGround[1][0] == 0 &&
        playGround[2][0] == 0
    ) {
        return 0;
    }
    if (
        playGround[0][1] == 0 &&
        playGround[1][1] == 0 &&
        playGround[2][1] == 0
    ) {
        return 0;
    }
    if (
        playGround[0][2] == 0 &&
        playGround[1][2] == 0 &&
        playGround[2][2] == 0
    ) {
        return 0;
    }
    if (
        playGround[0][0] == 0 &&
        playGround[1][1] == 0 &&
        playGround[2][2] == 0
    ) {
        return 0;
    }
    if (
        playGround[0][2] == 0 &&
        playGround[1][1] == 0 &&
        playGround[2][0] == 0
    ) {
        return 0;
    }
    return false;
}

