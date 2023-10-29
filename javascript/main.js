let title = document.querySelector(".title")
let turn = "x"
let squares = document.querySelectorAll(".square");
function easy(num1, num2, num3) {
    title.innerHTML = `${squares[num1].innerHTML} Winner`
    squares[num1].style.background = "black"
    squares[num2].style.background = "black"
    squares[num3].style.background = "black"
    setInterval(function () { title.innerHTML += '.' }, 1000)
    setTimeout(function () { location.reload() }, 4000)
}
// let squares = [];
function game(id) {
    let element = document.getElementById(id)
    if (turn === "x" && element.innerHTML == "") {
        element.innerHTML = "X"
        turn = "o"
        title.innerHTML = "O"
    } else if (turn === "o" && element.innerHTML == "") {
        element.innerHTML = "O"
        turn = "x"
        title.innerHTML = "X"
    }
    winner()
}
function winner() {

    // for (let i = 1; i < 10; i++) {
    //     squares[i] = document.getElementById('item' +i).innerHTML
    // }
    //أفقي
    if (squares[0].innerHTML == squares[1].innerHTML && squares[1].innerHTML == squares[2].innerHTML && squares[0].innerHTML != "") {
        easy(0, 1, 2)
    }
    else if (squares[3].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[5].innerHTML && squares[3].innerHTML != "") {
        easy(3, 4, 5)
    }
    else if (squares[6].innerHTML == squares[7].innerHTML && squares[7].innerHTML == squares[8].innerHTML && squares[6].innerHTML != "") {
        easy(6, 7, 8)
    }//عامودي
    else if (squares[0].innerHTML == squares[3].innerHTML && squares[3].innerHTML == squares[6].innerHTML && squares[6].innerHTML != "") {
        easy(0, 3, 6)
    }
    else if (squares[1].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[7].innerHTML && squares[1].innerHTML != "") {
        easy(1, 4, 7);
    }
    else if (squares[2].innerHTML == squares[5].innerHTML && squares[5].innerHTML == squares[8].innerHTML && squares[2].innerHTML != "") {
        easy(2, 5, 8)
    }
    //إزاحة
    else if (squares[0].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[8].innerHTML && squares[4].innerHTML != "") {
        easy(0, 4, 8)
    }
    else if (squares[2].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[6].innerHTML && squares[6].innerHTML != "") {
        easy(2, 4, 6)
    }
}
