/*Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
*/



//dichiaro una costante che richiama il pulsante submit

const btn = document.getElementById("submit");

//imposto una funzione al click del pulsante

btn.addEventListener("click", function() {
    console.log("click");

    const user_email = document.querySelector(".user_email").value;

    /* console.log(user_email); */



 //dichiaro una variabile la inizio con un array che contenga una lista di email registrate

    const registered_mail = ["tizio@gmail.com","caio@gmail.com","pippo@hotmail.com", "pluto@hotmail.com"];

    //dichiaro una variabile booleana e stabilisco un risultato

    let bool = false;


    //imposto un ciclo for che controlli il contenuto delle stringhe all'interno del mio array

    
    for (let i=0; i<registered_mail.length; i++){

        /* console.log(registered_mail[i]); */

        //imposto una condizione per verificare che l'email inserita dall'utente rientri tra quelle presenti nell'array

        if (user_email == registered_mail[i] ){

            bool = true;
        } 

        /* else {
            bool = false;
        } */

    }
    

    //imposto una condizione per la stampa in console nell'ipotesi che l'email rientri tra quelle registrate e in caso non sia nella nostra lista

    if (bool==true){
        console.log("Ok la tua email è corretta");

        document.querySelector(".verify").innerHTML = "La tua email è corretta"
    }

    else {

        console.log("La tua email non è registrata, riprova con un altra email")

        document.querySelector(".verify").innerHTML = "La tua email non è corretta"
    }

});
