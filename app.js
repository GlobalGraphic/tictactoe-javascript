function startGame() {
    for(var i = 1; i <= 9; i++) {
        clearBox(i);
    }
    document.name = "X";
    document.winner = null;
    console.log(document.name);
    message('Písmeno ' + document.name + ' musí začať!');
}

function handleClick(cell) {
    if(document.winner != null) {
        message(document.name + ' vyhral toto kolo!');
    }else if(cell.innerText == '') {
        cell.innerText = document.name;
        switchTurn();
    }else {
        message('Vyber si iny stvorcek!');
    }
}

function switchTurn() {
    if(checkForWinner(document.name)){
        message('Gratulujem ' + document.name + ' vyhral');
        document.winner = document.name;
    }else if(document.name == "X") {
        document.name = "O";
        message('Písmeno ' + document.name + ' je na tahu');
    }else {
        document.name = "X";
        message('Písmeno ' + document.name + ' je na tahu');
    }
}

function message(msg) {
    document.querySelector('.msg').innerText = msg;
}

function checkForWinner(move) {
    var result = false;
    if(checkRow(1,2,3, move)||
       checkRow(4,5,6, move)||
       checkRow(7,8,9, move)||
       checkRow(1,4,7, move)||
       checkRow(2,5,8, move)||
       checkRow(3,6,9, move)||
       checkRow(1,5,9, move)||
       checkRow(3,5,7, move)) {
        result = true;
       }
       return result;
}

function checkRow(a,b,c,move) {
    var result = false;
    if(getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    } 
    return result; 
}

function getBox(number) {
    return document.getElementById('s' + number).innerText;
}

function clearBox(number) {
    document.getElementById('s' + number).innerText = '';
}



