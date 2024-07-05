function writeCards(names, gift) {
    let thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${gift} gift!`;
      thankYouMessages.push(message);
    }
    return thankYouMessages;
  }
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
   console.log(i);
    }}
// Code your solutions in this file
