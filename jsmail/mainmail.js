const mailUser = prompt("Qual è il tuo indirizzo email?");

const mailList = ["gigiostrada@gmail.com", "luigiverdi@libero.it", "mariorossi@hotmail.com", "alexbernardi@gmail.com"]

for (let i = 0; i < mailList.length; i++) {

    mailList[i];
  
    const mailGuide = mailList[i];
  
    console.log(mailList[i])

    if(mailGuide === mailUser) {
        alert("Benvenuto nel sito!")
    }

  }
  