// O(n^c) Polynomial Time Complexity
// C = 2, Square
// C = 3. Cubic

import operationsCounter from '../operations-counter.js';

function createMatrix(size) {
    var matrix = [];
    for (let column = 0; column < size; column++) {
        matrix[column] = [];

        for (let row = 0; row < size; row++) {
            operationsCounter.increment();
            matrix[column][row] = `${column} ${row}`;
        }
    }

    return matrix;
}

function createCube(size) {
    var matrix = [];
    for (let column = 0; column < size; column++) {
        matrix[column] = [];

        for (let row = 0; row < size; row++) {
            matrix[column][row] = [];
            for(let height = 0; height < size; height++){
                operationsCounter.increment();
                matrix[column][row][height] = `${column} ${row}`;
            }
        }
    }

    return matrix;
}

function bubbleSort(arr) {
    let n = arr.length;
    let swapped; 

    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        for (let j = 0; j < n - 1 - i; j++) {
            operationsCounter.increment();
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

const polynomialSquareComplexityBenchMark = (inputSizes) => {
    const response = [];

    for (let n of inputSizes) {
        operationsCounter.reset();

        const startTime = performance.now();
        const initialMemory = process.memoryUsage().heapUsed;

        createMatrix(n);

        const endTime = performance.now();
        const finalMemory = process.memoryUsage().heapUsed;

        const data = {
            operationsCount: operationsCounter.count,
            executionTime: endTime - startTime,
            memoryUsage: finalMemory - initialMemory,
            function: {
                notation: 'O(n^2) polynomial square',
                name: createMatrix.name,
            },
        };

        response.push(data);
    }

    return response;
};

const polynomialCubicComplexityBenchMark = (inputSizes) => {
    const response = [];

    for (let n of inputSizes) {
        operationsCounter.reset();

        const startTime = performance.now();
        const initialMemory = process.memoryUsage().heapUsed;

        createCube(n);

        const endTime = performance.now();
        const finalMemory = process.memoryUsage().heapUsed;

        const data = {
            operationsCount: operationsCounter.count,
            executionTime: endTime - startTime,
            memoryUsage: finalMemory - initialMemory,
            function: {
                notation: 'O(n^2) polynomial cubic',
                name: createMatrix.name,
            },
        };

        response.push(data);
    }

    return response;
};

export { polynomialSquareComplexityBenchMark, polynomialCubicComplexityBenchMark };