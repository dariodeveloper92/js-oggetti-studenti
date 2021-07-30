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
        strudente1 : 'Filippo',
    },
    {
        studente2: 'Alessio',
    },
    {
        studente3: 'Paolo'
    }
]

//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
//studenti.push( 'nome: ' + 'cognome: ')
studenti.nome = ' ';
studenti.cognome = ' ';
console.log(studenti);

//studenti.dati =  'nome: ' + 'cognome: ';
//console.log(studenti);

//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
//VARIABILI - NUMERI INSERITI DALL'UTENTE
let oggettiUtente = [];

for (i = 0; i < 3; i++) { //Se devo creare "3 PROMPT" utilizzo il Ciclo "For"
    //oggettiUtente.push(prompt('Inserisci in ordine: nome, cognome, e età'));//Per "INSERIRE" all'interno dell'Array un nuovo oggetto studente utilizzo il METODO "PUSH"
    //studenti.push(oggettiUtente);
    
    studenti.oggettiUtente = (prompt('Inserisci in ordine: nome, cognome, e età'));;
    //console.log(studenti);
}

for (let chiave in studenti) {
    console.log(chiave + ' ' + oggettiUtente[chiave]);
}
