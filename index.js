/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 */

/* SCRIVI QUI LA TUA RISPOSTA */

 let n1 = 18 /* Il datatype è di formato numerico anche decimale*/
 let nome = "Mario"  /* Il datatype è di tipo stringa e può contenere numeri e lettere*/
 let booleano = true  /* Il data type è di tipo booleano che dà come risultato true o false*/ 
 let v1 = null /* segnala l'assenza intenzionale di un oggetto*/
 let v2 = undefined /* segnala che l'oggetto non è definito*/
 
/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Vincenzo"

console.log ("Mio nome: " + name)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number1 = 12
let number2 = 20

let risultato1 = number1 + number2

console.log ("Risultato Esercizio 3 è: " + risultato1)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12

console.log ("La variabile X è il numero: " + x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

name = "Vincenzo"
const cognome = "Picone"

/* const cognome = "Rossi" */

/*COMMENTO: non può essere modificato in quanto name è di tipo "const"*/

console.log("Nome nuovo: "+ name)
console.log("Cognome: " + cognome )

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let number3 = 4
let risultato3 = x - number3

console.log ("La sottrazione fra la variabile X e 4 è: " + risultato3)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john"
let name2 = "John"

console.log (name1 !== name2);

name1 = name1.toLowerCase();
console.log (name1 !== name2.toLowerCase())