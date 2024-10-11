// O(1) Constant Time Complexity

// The time and space required to execute this algorithm remain constant, 
// regardless of the size of the input (number, in these cases). This is why the algorithm 
// is considered Constant Time Complexity, O(1), in Big O notation.

// In both examples, the input size (whether the number is small or large) 
// will not affect factores like time/space. 
function divideByHalf(number) {
    return number / 2;
}

// This one can confuse us a little because the loop (for) inside
// but the numbers of runs will always be exatly the same, independently size of input
function addOneHundred(number) {
    for (let i = 1; i <= 100; i++) {
        number += 1;
    }

    return number;
}

let number = 10;

console.log(`The number ${number} divided by half is ${divideByHalf(number)}`);
console.log(`The number ${number} + 100 = ${addOneHundred(number)}`);