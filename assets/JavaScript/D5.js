/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/


/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
//creo un ciclo per stampare uno per uno gli elementi dell'array
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i])
}



/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
//per ordinare gli elementi in ordine alfabetico utilizzo il metodo sort 
pets.sort()
console.log(pets)



/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
//per invertire gli elementi invece utilizzo il metodo reverse
pets.reverse()
console.log(pets)




/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

//duplico l'array 
let nuovoArrayPets = pets;
let primoElemento = nuovoArrayPets.shift(); // Rimuove il primo elemento e lo salva in una variabile
nuovoArrayPets.push(primoElemento); // Aggiunge il primo elemento alla fine dell'array
console.log(nuovoArrayPets);



/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

// duplico l'array cars
let carsDuplicato = cars;
// creo un ciclo per aggiungere una propietà ad ogni elemento
for (let i = 0; carsDuplicato.length != i; i++) {

  //aggiungo ad ogni elemento la propietà licensePlate con  un numero casuale
  carsDuplicato[i].licensePlate = Math.floor(Math.random() * (10 - 1)) + 1;
}
console.log(carsDuplicato)



/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
// Aggiungo un elemento all'array cars
const newCar = {
  brand: 'Panda',
  model: '4x4',
  color: 'silver',
  trims: ['Metal', 'xxl', 'style'],
};
cars.push(newCar);
// Rimozione dell'ultimo elemento della proprietà "trims" da ogni auto
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars);




/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

// creo un ciclo per salvare gli ultimi  elementi della propietà "trims" nel array
for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  if (car.trims.length > 0) {
    justTrims.push(car.trims[0]);
  }
}
console.log(justTrims);





/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/


for (let i = 0; i < cars.length; i++) {
  const auto = cars[i]; // Prende l'oggetto corrente dall'array "cars"
  const primaLettera = auto.color.charAt(0); // Estrae la prima lettera dalla proprietà "color" dell'oggetto corrente

  if (primaLettera === 'b') { // Controlla se la prima lettera è 'b'
    console.log("Fizz"); // Mostra "Fizz" in console se la condizione è vera
  } else {
    console.log("Buzz"); // Mostra "Buzz" in console se la condizione è falsa
  }
}






/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

//creo una variabile contatore
let i = 0;

// creo un Ciclo while che viene eseguito finché l'indice è inferiore alla lunghezza dell'array e il valore corrente nell'array non è 32
while (i < numericArray.length && numericArray[i] !== 32) {

  console.log(numericArray[i]);
  //incremento la variabile contatore per evitare un ciclo infinito
  i++;
}





/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]




// Array che conterrà le posizioni dei caratteri
const posizioneArray = [];

// Iteriamo attraverso gli elementi dell'array charactersArray
for (let i = 0; i < charactersArray.length; i++) {

  // Carattere corrente
  const char = charactersArray[i];

  // Variabile che conterrà la posizione del carattere nell'alfabeto
  let position;

  // Utilizziamo un costrutto switch per assegnare la posizione corretta in base al carattere
  switch (char) {
    case "a":
      position = 1;
      break;
    case "b":
      position = 2;
      break;
    case "c":
      position = 3;
      break;
    case "d":
      position = 4;
      break;
    case "e":
      position = 5;
      break;
    case "f":
      position = 6;
      break;
    case "g":
      position = 7;
      break;
    case "h":
      position = 8;
      break;
    case "i":
      position = 9;
      break;
    case "j":
      position = 10;
      break;
    case "k":
      position = 11;
      break;
    case "l":
      position = 12;
      break;
    case "m":
      position = 13;
      break;
    case "n":
      position = 14;
      break;
    case "o":
      position = 15;
      break;
    case "p":
      position = 16;
      break;
    case "q":
      position = 17;
      break;
    case "r":
      position = 18;
      break;
    case "s":
      position = 19;
      break;
    case "t":
      position = 20;
      break;
    case "u":
      position = 21;
      break;
    case "w":
      position = 22;
      break;
    case "x":
      position = 23;
      break;
    case "y":
      position = 24;
      break;
    case "z":
      position = 25;
      break;

    default:
      // Se il carattere non viene trovato nell'alfabeto, assegnamo la posizione 0
      position = 0;
      break;
  }

  // Aggiungiamo la posizione all'array positionsArray
  posizioneArray.push(position);
}

// Stampiamo l'array con le posizioni dei caratteri
console.log(posizioneArray); 
