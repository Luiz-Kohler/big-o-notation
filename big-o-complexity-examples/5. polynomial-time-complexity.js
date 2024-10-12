// O(n^c) Polynomial Time Complexity
// C = 2, Square
// C = 3. Cubic

function createMatrix(size) {
    var matrix = [];
    for (let column = 0; column < size; column++) {
        matrix[column] = [];

        for (let row = 0; row < size; row++) 
            matrix[column][row] = `${column} ${row}`;
    }

    return matrix;
}

function bubbleSort(arr) {
    let n = arr.length;
    let swapped; 

    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }

    return arr;
}