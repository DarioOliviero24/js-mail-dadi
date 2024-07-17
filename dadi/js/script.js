
/*Genero un numero random per l'user */
const userNumber = Math.floor (Math.random() *6) +1;
console.log('userNumber', userNumber, typeof userNumber);

/*Genero un numero random per il Pc */
const pcNumber = Math.floor (Math.random() *6) +1;
console.log('pcNumber', pcNumber, typeof pcNumber);

/*Controllo di chi vince*/ 
if (il numero dello user è piu alto del numero del pc){
    alert ('Hai vintoo!')
}
else if (il numero del pc è piu alto del numero del user){
    alert ('Hai perso..')
}
else (i numeri sono uguali){
    alert('Pareggio.')
}