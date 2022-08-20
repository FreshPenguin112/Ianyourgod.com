const board = {1:"n",2:"n",3:"n",4:"n",5:"n",6:"n",7:"n",8:"n",9:"n"};
let going = "x";
function clicked(id) {
    let idd = parseInt(id);
    if (board[idd] == "n") {
        board[idd] = going;
    }
    if (going == "x") {
        going = "o"
    }
}