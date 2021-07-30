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
//console.log(studente);

//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Accediamo a tutte le proprietà di un oggetto //
for (let key in datiStudente) {
    //console.log(datiStudente[key]);
}

//Creare un array di oggetti di studenti.
let studenti = [
    {
        strudente1 : 'Filippo',
    },
    {
        studente2: 'Paolo',
    },
    {
        studente3: 'Alessio'
    }
]

//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
studenti.push(datiStudente);
//console.log(studenti);

studenti.dati = 'nome: ' + 'cognome: '; 
console.log(studenti);

//Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

