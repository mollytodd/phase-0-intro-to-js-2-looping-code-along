function writeCards(nameArr, eventName) {
  return nameArr.map(
    (name) => `Thank you, ${name}, for the wonderful ${eventName} gift!`
  );
}
console.log(writeCards([["Guadalupe", "Ollie", "Aki"]], "birthday"));

function countDown(startingNumber) {
  while (startingNumber >= 0) {
    console.log(startingNumber--);
  }
}

countDown(10);
