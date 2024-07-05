let userScore = 0;
let compScore = 0;
let drawScore = 0 ;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawScorePara = document.querySelector("#draw-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
     const randIdx = Math.floor(Math.random () *3);
     return options[randIdx];
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin) {
        // console.log("you win");
        userScore++; 
        userScorePara.innerText =userScore;

        msg.innerText = `you win!. your ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose!. your ${compChoice} beats your ${userChoice}`;
        
        
        msg.style.backgroundColor = "red";
        
    }
    // else{
    //     drawScore++;
    //     compScorePara.innerText = drawScore;
    //     msg.innerText = `Drwa!. your ${compChoice} draw your ${userChoice}`;
        
        
    //     msg.style.backgroundColor = "yellow";
        
    // }
};

const drawGame = () => {
    console.log("game was draw");
         drawScore++;
        drawScorePara.innerText = drawScore;
    msg.innerText = "game was draw . play again";
    msg.style.backgroundColor = "blue";
}

const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true ;
        if(userChoice === "rock"){
            userWin =compChoice === "paper"?false:true;

        }
        else if(userChoice = "paper"){
            userWin =  compChoice === "scissors"?false:true;
        }
        else{
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice) =>{
    // console.log(choice) ;
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);

    });
});