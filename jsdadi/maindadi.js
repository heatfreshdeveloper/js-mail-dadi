const btnSubmit = document.querySelector("#btn_submit");

const userElement = document.querySelector(".my-user");
const computerElement = document.querySelector(".the-computer");

btnSubmit.addEventListener("click", function () { 
    let user = document.getElementById("my-demo").innerHTML =
    Math.floor(Math.random() * 10) + 1;

    let computer = document.getElementById("my-demo2").innerHTML =
    Math.floor(Math.random() * 10) + 1;

        if(user > computer) {
            alert("Ha vinto il Giocatore")
        } else {
            alert("Il giocatore ha perso!")
        }
    }

)