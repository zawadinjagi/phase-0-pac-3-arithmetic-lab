1 + 80; //=> 81
60 - 40; //=> 20
2 * 3.4; //=> 6.8
5.0 / 2.5; //=> 2
function add() {
    return "something";
  }
  let number = 5;
  
function add( a = 1,b = 80) {
    return a + b;
}

function subtract(a = 60,b = 40) {
    return a - b;
}

function multiply(a = 2, b = 3.4) {
    return a* b;
}

function divide(a = 5.0 , b = 2.5) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}
number = 10;

function increment(n) {
    return n + 1;
}

function decrement(n) {
    return n - 1;
}

function makeInt(n) {
    return parseInt(n, 10);
}

function preserveDecimal(n) {
    return parseFloat(n);
}
