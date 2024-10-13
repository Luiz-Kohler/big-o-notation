// O(n!) Factorial Time Complexity
import operationsCounter from '../operations-counter.js';

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

const factorialComplexityBenchMark = (inputSizes) => {
    const response = [];

    for (let n of inputSizes) {
        const input = createRandomString(n);
        operationsCounter.reset();

        const startTime = performance.now();
        const initialMemory = process.memoryUsage().heapUsed;

        permute(input);

        const endTime = performance.now();
        const finalMemory = process.memoryUsage().heapUsed;

        const data = {
            operationsCount: operationsCounter.count,
            executionTime: endTime - startTime,
            memoryUsage: finalMemory - initialMemory,
            function: {
                notation: 'O(n!) factorial',
                name: permute.name,
            },
        };

        response.push(data);
    }

    return response;
};

export { factorialComplexityBenchMark };