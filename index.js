// Code your solutions in this file

// for (let age = 30; age < 40; age++)
// {
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;

//   }
//   return gifts;

// }

// wrapGifts(gifts);

const nameArr = ["Guadalupe", "Ollie", "Aki"];

function writeCards(nameArr, eventName) {
  for (let i = 0; i < nameArr.length; i++) {
    console.log(`Thank you, ${nameArr[i]}, for the wonderful surprise gift!`);
  }
  return nameArr;
}

writeCards(nameArr);

// this is console logging fine but it's not passing the tests, why?
// let countDown =10;
// while (countDown >=0) {
//     console.log(countDown--);
// }

// this is console logging fine but not passing tests - i might be starting with the wrong number

function countDown(startingNumber) {
    while (startingNumber >= 0) {
        console.log(startingNumber--);
}}

countDown(10);
