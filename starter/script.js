'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1

document.querySelector(".number").textContent = randomNumber

let message = document.querySelector(".message")

let score = 20
let displayScore = document.querySelector(".score")
// message.textContent = "🎉 Congrats it the right number 🎉"

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value)
    console.log(typeof guess, guess)
    if(guess<=0) {
        message.textContent ="Please guess in the range of 1-20 "
    } else if(guess > randomNumber) {
        if(score > 1) {
        message.textContent = "⬇️ Too High";
        score--;
        displayScore.textContent = score
        }else {
            message.textContent = "You lost, Try again"
            displayScore.textContent = 0
            document.querySelector("body").style.backgroundColor = "red"
        }
    } else if(guess < randomNumber) {
        if(score > 1) {
        message.textContent = "⬆️ Too Low";
        score--
        displayScore.textContent = score
        } else {
            message.textContent = "You lost, Try again"
            displayScore.textContent = 0
            document.querySelector("body").style.backgroundColor = "red"
        }
    } else if (guess === randomNumber) {
        if(score >1){
        message.textContent = "🎉Congrats, you found the number🎉"
        document.querySelector("body").style.backgroundColor = "green"
        document.querySelector(".highscore").textContent = score
        }else{
            message.textContent = "You lost, Try again"
            displayScore.textContent = 0
            document.querySelector("body").style.backgroundColor = "red"
        }
    }
})

document.querySelector(".again").addEventListener("click", function(){
    document.querySelector("body").style.backgroundColor = "#222"
    score = 20
    displayScore.textContent = score
    message.textContent = "Guess My Number!"
    randomNumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector(".number").textContent = randomNumber
})

