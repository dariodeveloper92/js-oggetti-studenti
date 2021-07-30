//Esercizio: Oggetti Studenti
//Descrizione:
//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
let datiStudente = [
    {
        nome : 'Carlo',
        cognome : 'Rossi',
        eta : 29
    }
]
//console.log(datiStudente);

//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Accediamo a tutte le proprietà di un oggetto //
for (let key in datiStudente) {
    console.log(datiStudente[key]);
}

//Creare un array di oggetti di studenti.
let studenti = [
    {
        nome : 'Filippo ',
        cognome : 'Rossi ',
        eta : 29
    },
    {
        nome : 'Alessio ',
        cognome : 'Biachi ',
        eta : 22
    },
    {
        nome : 'Paolo ',
        cognome : 'Verdi ',
        eta : 32
    }
]

//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (i = 0; i < studenti.length; i++)  { //ESEGUO UN CICLO FOR E ISNERISCO NELL'ARRAY STUDENTI: NOME E COGNOME
    console.log(studenti[i]['nome']+ studenti[i]['cognome']);
    //console.log(studenti[i].nome + studenti[i].cognome);
}


//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
//VARIABILI - NUMERI INSERITI DALL'UTENTE
let oggettiUtente = [];
var numPrompt = 3;

for (i = 0; i < numPrompt; i++) { //Se devo creare "3 PROMPT" utilizzo il Ciclo "For"
    oggettiUtente.push(prompt('Inserisci in ordine: nome, cognome, e età'));//Per "INSERIRE" all'interno dell'Array un nuovo oggetto studente utilizzo il METODO "PUSH"
}

console.log(oggettiUtente); //STAMPO SU CONSOLE oggettiUtente

//Faccio un OBJECTS (nuovoStudente) e richiamo il primo / secondo / terzo "Array" 
let nuovoStudente = {
    nome : oggettiUtente[0], //RICHIAMO IL PRIMO ARRAY
    cognome : oggettiUtente[1],//RICHIAMO IL SECONDO ARRAY
    eta : oggettiUtente[2]//RICHIAMO IL TERZO ARRAY
}

console.log(nuovoStudente);//STAMPO SU CONSOLE nuovoStudente

studenti.push(nuovoStudente); //INSERISCO "nuovoStudente" ALL'INERNO DELL'ARRAY OGGETTI "studenti" con il METODO "PUSH"
console.log(studenti);//STAMPO SU CONSOLE studenti
