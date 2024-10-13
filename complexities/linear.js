// O(n) Linear Time Complexity

import operationsCounter from '../operations-counter.js';

const createArrayOfSize = (size) => {
    let array = [];
    for (let i = 1; i <= size; i++) {
        operationsCounter.increment();
        array.push(i);
    }
    return array;
};

const linearComplexityBenchMark = (inputSizes) => {
    const response = [];

    for (let n of inputSizes) {
        operationsCounter.reset();

        const startTime = performance.now();
        const initialMemory = process.memoryUsage().heapUsed;

        createArrayOfSize(n);

        const endTime = performance.now();
        const finalMemory = process.memoryUsage().heapUsed;

        const data = {
            operationsCount: operationsCounter.count,
            executionTime: endTime - startTime,
            memoryUsage: finalMemory - initialMemory,
            function: {
                notation: 'O(n) linear',
                name: createArrayOfSize.name,
            },
        };

        response.push(data);
    }

    return response;
};

export { linearComplexityBenchMark };