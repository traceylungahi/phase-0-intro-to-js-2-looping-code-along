let messages = [];
function writeCards(names, eventName) {
    for (let n = 0; n < names.length; n++) {
        messages.push(`Thank you, ${names[n]}, for the wonderful ${eventName} gift!`);
    }
    return messages; 
}
function countDown() {
    let count = 10;
    while(count >-1) {
        console.log(count--);
    }
}