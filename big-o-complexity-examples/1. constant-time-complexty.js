// O(1) Constant Time Complexity Examples

function addOneHundred(number) {
    for (let i = 1; i <= 100; i++) 
        number += 1;

    return number;
}

let number = 10;

console.log(`the number ${number} divided by half is ${divideByHalf(number)}`);
console.log(`the number ${number} + 100 = ${addOneHundred(number)}`);