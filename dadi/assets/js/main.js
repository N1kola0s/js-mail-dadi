//dichiaro variabile e la inizio con un numero random da 1 a 6
let user;
user = parseInt(Math.random()*6) + 1;
console.log(user);

//dichiaro variabile e la inizio con un numero random da 1 a 6

let computer;
computer = parseInt(Math.random()*6) + 1;
console.log(computer);

//imposto una condizione che stabilisca quale dei due numeri generati sia maggiore dell'altro per assegnare il vincitore e stamparlo in console

if (user > computer){
    console.log("Ha vinto l'utente");

} else if (user < computer) {

    console.log("Ha vinto il computer");
    
} else {

    console.log("User e Computer hanno pareggiato");
}