const btnSubmit = document.querySelector("#btn_submit");

const userElement = document.querySelector(".my-user");
const computerElement = document.querySelector(".the-computer");

btnSubmit.addEventListener("click", function () { 
    let userScore = Math.floor(Math.random() * 6) + 1;
    let user = document.getElementById("my-demo");
    user.innerHTML = userScore

    let computerScore = Math.floor(Math.random() * 6) + 1;
    let computer = document.getElementById("my-demo2");
    computer.innerHTML = computerScore

        if(userScore > computerScore) {
            alert("Ha vinto il Giocatore")
        } else {
            alert("Il giocatore ha perso!")
        }
    }

)