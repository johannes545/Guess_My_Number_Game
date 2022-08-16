'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1

function redScreen() {
    document.querySelector("body").style.backgroundColor = "red"
};

document.querySelector(".number").textContent = randomNumber

function message(text) {
    document.querySelector(".message").textContent = text
}

function displayScore(score) {
    document.querySelector(".score").textContent = score
}

let score = 20
// message.textContent = "🎉 Congrats it the right number 🎉"

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value)
    console.log(typeof guess, guess)
    if(guess<=0) {
        message("Please guess in the range of 1-20")
    } else if(guess > randomNumber) {
        if(score > 1) {
        message("⬇️ Too High")
        score--;
        displayScore(score)
        }else {
            message("You lost, Try again")
            displayScore(0)
            redScreen();
        }
    } else if(guess < randomNumber) {
        if(score > 1) {
        message("⬆️ Too Low")
        score--
        displayScore(score)
        } else {
            message("You lost, Try again")
            displayScore(0)
            redScreen()
        }
    } else if (guess === randomNumber) {
        if(score >1){
        message("🎉Congrats you found the number 🎉")
        document.querySelector("body").style.backgroundColor = "green"
        document.querySelector(".highscore").textContent = score
        }else{
            message("You lost, Try again")
            displayScore(0)
            redScreen()
        }
    }
})

document.querySelector(".again").addEventListener("click", function(){
    document.querySelector("body").style.backgroundColor = "#222"
    score = 20
    displayScore(score)
    message("Guess My Number!")
    randomNumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector(".number").textContent = randomNumber
})

