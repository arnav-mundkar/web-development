let userscore = 0;
let compscore = 0;
let gameover = false;
const choice = document.querySelectorAll(".icon-image");
const msg = document.getElementById("msg");
const userScoreShow = document.getElementById("user-score");
const compScoreShow = document.getElementById("comp-score");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    userscore = 0;
    compscore = 0;
    userScoreShow.innerText = userscore;
    compScoreShow.innerText = compscore;
    gameover = false;
    msg.innerText = "Welcome to Rock-Paper-Scissors! Click on an icon to start the game!";
    msg.style.backgroundColor = "rgb(1, 1, 80)";
});
const computerChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
};

const play = (userChoice, compChoice) => {
    if(gameover === true){
        return;
    }

    if(userChoice === compChoice){
        msg.innerText = "It's a tie!";
        msg.style.backgroundColor = "rgb(1, 1, 80)";
    }
    else if((userChoice === "Rock" && compChoice === "Scissors") ||
            (userChoice === "Scissors" && compChoice === "Paper") ||
            (userChoice === "Paper" && compChoice === "Rock")){
                msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
                msg.style.backgroundColor = "green";
                userscore++;
                userScoreShow.innerText = userscore;
            }
    else{
        msg.innerText = `Computer wins! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compscore++;
        compScoreShow.innerText = compscore;
    }

    if(userscore === 5){
        msg.innerText = "Congratulations! You win the game!";
        gameover = true;
    }
    else if(compscore === 5){
        msg.innerText = "Alas! Computer wins the game!";
        gameover = true;
    }   
}
choice.forEach((image) => {
    image.addEventListener("click", () => {
        const userChoice = image.id;
        const compChoice = computerChoice();
        play(userChoice, compChoice);
    });
});
