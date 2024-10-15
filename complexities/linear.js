// O(n) Linear Time Complexity

import operationsCounter from '../common/operations-counter.js';

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

        createArrayOfSize(n);

        const data = {
            notation : 'LINEAR O(n)',
            inputSize: n,
            operations: operationsCounter.get(),
        };

        response.push(data);
    }

    return response;
};

export { linearComplexityBenchMark };