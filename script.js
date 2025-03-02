let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
const compChoiceMsg = document.querySelector("#comp-choice-msg");
const compChoiceDisplay = document.querySelector("#comp-choice-display");

const getcompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    return options[Math.floor(Math.random() * 3)];
};

const drawGame = () => {
    msg.innerText = "Game was Draw, Play again!";
    msg.style.backgroundColor = "blue";
};

const showwinner = (userwin, compchoice, userchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lost! ${compchoice} beats ${userchoice}.`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    msg.innerText = `You chose: ${userchoice.toUpperCase()}`;
    msg.style.backgroundColor = "#032853";

    // Show "Computer is choosing..." message
    compChoiceMsg.style.display = "block";
    compChoiceDisplay.innerText = ""; // Clear previous choice

    setTimeout(() => {
        const compchoice = getcompchoice();
        compChoiceMsg.style.display = "none"; // Hide "Computer is choosing..."
        compChoiceDisplay.innerText = `Computer chose: ${compchoice.toUpperCase()}`; // Show computer's choice

        setTimeout(() => {
            if (userchoice === compchoice) {
                drawGame();
            } else {
                let userwin = (userchoice === "rock" && compchoice === "scissor") ||
                              (userchoice === "paper" && compchoice === "rock") ||
                              (userchoice === "scissor" && compchoice === "paper");
                showwinner(userwin, compchoice, userchoice);
            }
        }, 1500); // Delay before showing the winner
    }, 1500); // Delay before showing computer's choice
};

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        playgame(choice.getAttribute("id"));
    });
});

document.getElementById("reset-btn").addEventListener("click", () => {
    userscore = 0;
    compscore = 0;
    userscorepara.innerText = userscore;
    compscorepara.innerText = compscore;
    msg.innerText = "Play Your Turn";
    msg.style.backgroundColor = "#032853";
    compChoiceDisplay.innerText = ""; // Clear computer's choice
    compChoiceMsg.style.display = "none"; // Hide "Computer is choosing..."
});