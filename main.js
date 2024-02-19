let player1,player2;
window.onload = function getPlayers(){
    player1 = prompt("Please enter the first player's name").toUpperCase();
    player2 = prompt("Please enter the second player's name").toUpperCase();
    if (player1 == null || player1 == "" && player2 == null || player2 == "") {
    
  } else {
    document.querySelector('.container').style.display="block";
    title.innerHTML = `${player1}, Play now.`
  }
}



let teurnX = "X"
let title = document.querySelector(".title");

function playTurn(id){

    let itemId = document.getElementById(id);
    if(itemId.innerHTML == "" && teurnX =="X"){
        itemId.innerHTML = "X";
        title.innerHTML = `${player2}, Play now.`;
        teurnX = "O";
        winner();
    } else if(itemId.innerHTML == "" && teurnX =="O"){
        itemId.innerHTML = "O";
        title.innerHTML = `${player1}, Play now.`;
        teurnX = "X";
        winner();
    }
}

function winnerMsg(winner){
    if(winner=="X")
        {
            title.innerHTML = `Great ${player1}, You Won🎉​`
            removeChile();
        }else{
            title.innerHTML = `Great ${player2}, You Won🎉​`
            removeChile();
        }
}


function winner(){
    let arr = [];
    
    for(let i = 1 ; i<10; i++){
        arr[i]= document.getElementById("play"+i).innerHTML;
    };
    let elementEmpty = arr.find((element) => element == "");
    if(arr[1]==arr[2] && arr[2]==arr[3] && arr[1]!="") winnerMsg(arr[1]);
    else if(arr[4]==arr[5] && arr[5]==arr[6] && arr[5]!="") winnerMsg(arr[4]);
    else if(arr[7]==arr[8] && arr[8]==arr[9] && arr[9]!="") winnerMsg(arr[7]);
    else if(arr[1]==arr[4] && arr[4]==arr[7] && arr[4]!="") winnerMsg(arr[1]);
    else if(arr[2]==arr[5] && arr[5]==arr[8] && arr[8]!="") winnerMsg(arr[2]);
    else if(arr[3]==arr[6] && arr[6]==arr[9] && arr[9]!="") winnerMsg(arr[3]);
    else if(arr[1]==arr[5] && arr[5]==arr[9] && arr[9]!="") winnerMsg(arr[1]);
    else if(arr[3]==arr[5] && arr[5]==arr[7] && arr[7]!="") winnerMsg(arr[3]);
    else if(elementEmpty == undefined) title.innerHTML = `Game Over​`;
}

function removeChile() {
        var container = document.querySelector('.container');
        var titleAndSquars = document.querySelector('.title');
        var eSquars = document.querySelector('.squars');
        titleAndSquars.style.marginTop = "50%";
        container.removeChild(eSquars);
        document.querySelector('.newBtn').style.display="block";
    }


    function reset()
    {
        for(let i = 1 ; i<10; i++){
            document.getElementById("play"+i).innerHTML = "";
        };
        teurnX = "X"
        title.innerHTML = `${player1}, Play now.`;
    };
    function reload(){
        location.reload();
    }