// O(n) Linear Time Complexity Examples

function countDown(number) {
    console.log(number);

    if (number === 0)
        return number;

    countDown(number - 1);
}

function createArrayOfSize(size) {

    let array = [];

    for(let i = 1; i <= size; i++)
        array.push(i);

    return array;
}

function createArraysOfSize(size) {

    let array = [];

    for(let i = 1; i <= size; i++)
        array.push(i);

    return array;
}

function findHighestAndLowestNumber(array) {
    let highest = array[0];
    let lowest = array[0];

    for(let i = 0; i < array.length; i++)
        if(array[i] > highest)
            highest = array[i];

    for(let i = 0; i < array.length; i++)
        if(array[i] < lowest)
            lowest = array[i];

    return [highest, lowest];
}