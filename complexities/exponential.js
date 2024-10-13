// O(c^n) Exponential Time Complexity

import operationsCounter from '../operations-counter.js';

const fibonacci = (input) => {
    operationsCounter.increment();

    if (input <= 1) 
        return input;
    
    return fibonacci(input - 1) + fibonacci(input - 2);
}

const exponentialComplexityBenchMark = (inputSizes) => {
    const response = [];

    for (let n of inputSizes) {
        operationsCounter.reset();

        const startTime = performance.now();
        const initialMemory = process.memoryUsage().heapUsed;

        fibonacci(n);

        const endTime = performance.now();
        const finalMemory = process.memoryUsage().heapUsed;

        const data = {
            operationsCount: operationsCounter.count,
            executionTime: endTime - startTime,
            memoryUsage: finalMemory - initialMemory,
            function: {
                notation: 'O(c^n)exponential',
                name: fibonacci.name,
            },
        };

        response.push(data);
    }

    return response;
};

export { exponentialComplexityBenchMark };
