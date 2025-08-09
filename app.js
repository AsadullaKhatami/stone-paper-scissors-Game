let messagesBox = document.querySelector("#messagesBox");
let yourPoint = document.querySelector("#yourPoint");
let comPoint = document.querySelector("#comPoint");
let btn = document.querySelectorAll(".btn");

let cPoint = 0;
let youPoint = 0;

function playGame(userMove, comMove){
    console.log("you move: ", userMove);
    console.log("computer move: ", comMove);

    let winner;

    if(userMove === comMove){
        mess = "Game was draw! play your Move";
        drawMess(mess);
    }else if(userMove === "rock" && comMove === "paper"){
        winner = false;
        mess = "You lose paper bets rock";
        shoWinner(mess, winner);
    }else if(userMove === "rock" && comMove === "scissor"){
        winner = true;
        mess = "win rock bets scissor";
        shoWinner(mess, winner);
    }else if(userMove === "scissor" && comMove === "paper"){
        winner = true;
        mess = "win scissor bets paper";
        shoWinner(mess, winner);
    }else if(userMove === "scissor" && comMove === "rock"){
        winner = false;
        mess = "lose scissor bets rock";
        shoWinner(mess, winner);
    }else if(userMove === "paper" && comMove === "rock"){
        winner = true;
        mess = "win paper bets rock";
        shoWinner(mess, winner);
    }else if(userMove === "paper" && comMove === "scissor"){
        winner = false;
        mess = "lose scissor bets paper";
        shoWinner(mess, winner);
    }

}

let drawMess = (mess) => {
    messagesBox.innerText = mess;
    messagesBox.style.backgroundColor = "#000";
}

let shoWinner = (mess, winner) => {
    messagesBox.innerText = mess;
    if(winner){
        messagesBox.style.backgroundColor = "green";
        youPoint++;
        yourPoint.innerText = youPoint;
    }else{
        messagesBox.style.backgroundColor = "red";
        cPoint++;
        comPoint.innerText = cPoint;
    }
}

for(let vlu of btn){
    vlu.addEventListener("click", () => {
        const userMove = vlu.getAttribute("id");
        const comMove = computerMove();
        playGame(userMove, comMove);
    });
}

let computerMove = () => {
    const arr = ["rock", "scissor", "paper"];
    let num = Math.floor(Math.random() * 3 );
    return arr[num];
}