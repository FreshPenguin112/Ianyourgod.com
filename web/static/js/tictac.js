const board = {1:"n",2:"n",3:"n",4:"n",5:"n",6:"n",7:"n",8:"n",9:"n"};
const wins = [[1,2,3],[1,4,7],[3,6,9],[2,5,8],[4,5,6],[7,8,9],[1,5,9],[3,5,7],];
let going = "x";
function clicked(obj) {
    console.log(board);
    let idd = parseInt(obj.id);
    if (board[idd] == "n") {
        board[idd] = going;
        obj.src="/static/imgs/tictactoe/" + going.toUpperCase() + ".png"
    }
    if (going == "x") {
        going = "o"
    } else {
        going = "x";
    }
    let am = 0;
    for (const i of wins) {
        am = 0;
        for (const x of i) {
            if (board[x] == "x") {
                am += 1;
            }
        }
        if (am == 3) {
            document.getElementById("win").innerHTML = "<h1>X Wins!</h1>";
            break
        }
    }
    for (const i of wins) {
        am = 0;
        for (const x of i) {
            if (board[x] == "o") {
                am += 1;
            }
        }
        if (am == 3) {
            document.getElementById("win").innerHTML = "<h1>O Wins!</h1>";
            break
        }
    }

}