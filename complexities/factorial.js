// O(n!) Factorial Time Complexity
import operationsCounter from '../common/operations-counter.js';

const permute = (str) => {
    if (str.length === 0) 
        return [''];

    let permutations = [];

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        let remainingStr = str.slice(0, i) + str.slice(i + 1);
        let remainingPerms = permute(remainingStr);

        for (let perm of remainingPerms) {
            operationsCounter.increment();
            permutations.push(char + perm);
        }
    }

    return permutations;
};


const createRandomString = (length) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

const factorialComplexityBenchMark = (inputSizes) => {
    const response = [];

    for (let n of inputSizes) {
        const input = createRandomString(n);
        operationsCounter.reset();

        permute(input);

        const data = {
            notation : 'FACTORIAL O(n!)',
            inputSize: n,
            operations: operationsCounter.get(),
        };

        response.push(data);
    }

    return response;
};

export { factorialComplexityBenchMark };