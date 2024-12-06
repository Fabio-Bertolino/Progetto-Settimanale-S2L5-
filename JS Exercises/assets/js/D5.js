/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

console.log("ESERCIZIO 1");
for(i = 0; i < pets.length; i++) {
  console.log(pets[i])
}
console.log("********************************************************");
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("ESERCIZIO 2");
pets.sort();
console.log(pets);
console.log("********************************************************");
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("ESERCIZIO 3");
pets.reverse();
console.log(pets)
/* se intendeva ogni elemento singolarmente come prima:
for(i = 0; i < pets.length; i++) {
  console.log(pets[i])
}
*/
console.log("********************************************************");
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("ESERCIZIO 4");
let first = pets.shift()
pets.push(first)
console.log(pets)
console.log("********************************************************");
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

console.log("ESERCIZIO 5");

for(const element of cars) {
  let obj = element
  switch(obj.brand) {
    case 'Ford':
      element.licenseplate = "XXX";
      break;
    case 'Peugeot':
      element.licenseplate = "YYY";
      break;
    case 'Volkswagen':
      element.licenseplate = "ZZZ";
      break;
    default:
      break;
  }
}
console.log(cars)
console.log("********************************************************");
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("ESERCIZIO 6");
const panda = {
  brand: 'Fiat',
  model: 'Panda 45',
  color: 'yellow',
  trims: ['trim1', 'trim2'],
  licenseplate: 'FFF'
}

cars.push(panda)

for(const element of cars) {
  let obj = element.trims;
  obj.pop()
}

console.log(cars)
console.log("********************************************************");
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
console.log("ESERCIZIO 7");

for(const element of cars) {
  let obj = element.trims;
  let firstTrim = obj.shift();
  justTrims.push(firstTrim)
}
console.log(justTrims)
console.log("********************************************************");
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log("ESERCIZIO 8");
for(const element of cars) {
  let obj = element.color;
  if (obj.charAt(0) === "b") {
    console.log("Fizz")
  } else {
    console.log("Buzz")
  }
}
console.log("********************************************************");
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

console.log("ESERCIZIO 9");
let index = 0;
while (index < numericArray.length) {
  console.log(numericArray[index])
  if (numericArray[index] === 32) {
    break
  }
  index++
}
console.log("********************************************************");
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

console.log("ESERCIZIO 10");
const positionsArray = []
for(i = 0; i < charactersArray.length; i++) {
  let obj = charactersArray[i];
  switch(obj) {
    case 'g':
      let positionG = obj.replace('g', 7)
      positionsArray.push(positionG)
      break;
    case 'n':
      let positionN = obj.replace('n', 12)
      positionsArray.push(positionN)
      break;
    case 'u':
      let positionU = obj.replace('u' ,19)
      positionsArray.push(positionU)
      break;
    case 'z':
      let positionZ = obj.replace('z', 21)
      positionsArray.push(positionZ)
      break;
    case 'd':
      let positionD = obj.replace('d', 4)
      positionsArray.push(positionD)
      break;
    default:
      break;
  }
}

console.log(positionsArray)
console.log("********************************************************");