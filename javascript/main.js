let turn = "x";
let squares = document.querySelectorAll(".square");
let title = document.querySelector(".title");
// console.log(squares[0]);
function theEnd(num1, num2, num3) {
    title.innerHTML = `${squares[num1].innerHTML} Winner`;
    squares[num1].style.backgroundColor = "black";
    squares[num2].style.backgroundColor = "black";
    squares[num3].style.backgroundColor = "black";
    setInterval(() => title.innerHTML += ".", 1000);
    setTimeout(() => location.reload(), 4000);
}
console.log(squares[1]);
for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = function game(e) {
        if (turn === "x" && e.target.innerHTML === "") {
            let id = squares[i].id;
            e.target.innerHTML = "X"
            // squares[i].innerHTML = "X";
            turn = "o";
            title.innerHTML = "O";
        } else if (turn === "o" && e.target.innerHTML === "") {
            let id = squares[i].id;
            e.target.innerHTML = "O"
            // squares[i].innerHTML = "O";
            turn = "x";
            title.innerHTML = "X";
        }
        winner()

    }
    function winner() {
        //افقي
        if (squares[0].innerHTML === squares[1].innerHTML && squares[1].innerHTML === squares[2].innerHTML && squares[0].innerHTML !== "") {
            theEnd(0, 1, 2)
        } else if (squares[3].innerHTML === squares[4].innerHTML && squares[4].innerHTML === squares[5].innerHTML && squares[3].innerHTML !== "") {
            theEnd(3, 4, 5)
        } else if (squares[6].innerHTML === squares[7].innerHTML && squares[7].innerHTML === squares[8].innerHTML && squares[6].innerHTML !== "") {
            theEnd(6, 7, 8)
        } else if (squares[0].innerHTML === squares[3].innerHTML && squares[3].innerHTML === squares[6].innerHTML && squares[0].innerHTML !== "") {
            theEnd(0, 3, 6)
        }

        else if (squares[1].innerHTML === squares[4].innerHTML && squares[4].innerHTML === squares[7].innerHTML && squares[1].innerHTML !== "") {
            theEnd(1, 4, 7)
        }
        else if (squares[2].innerHTML === squares[5].innerHTML && squares[5].innerHTML === squares[8].innerHTML && squares[2].innerHTML !== "") {
            theEnd(2, 5, 8)
        } else if (squares[0].innerHTML === squares[4].innerHTML && squares[4].innerHTML === squares[8].innerHTML && squares[0].innerHTML !== "") {
            theEnd(0, 4, 8)
        } else if (squares[2].innerHTML === squares[4].innerHTML && squares[4].innerHTML === squares[6].innerHTML && squares[2].innerHTML !== "") {
            theEnd(2, 4, 6)
        }

    }

}

