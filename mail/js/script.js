const adminEmails = [
    "voglio-inverno@gmail.com",
    "facaldo@gmail.com",
    "machièquesto@gmail.com",
    "avantiilprossimo@gmail.com",
    "lefaremosapere@gmail.com"
]
let loggedIn = false;

while(!loggedIn) {

    const usrLogin = prompt("Inserisci l'email per l'accesso.");

    for(let i = 0; i < adminEmails.length; i++){
    
        if (usrLogin == adminEmails[i]){
            loggedIn = true;
            alert("E-mail-corretta.");
        }
    
    }
    
    if (!loggedIn) {
        alert("E-mail errata.");
    }

}