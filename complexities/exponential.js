// O(c^n) Exponential Time Complexity

import operationsCounter from '../common/operations-counter.js';

function generatePowerSet(set) {
    const powerSet = [];
    
    function backtrack(currentSet, index) {
        if (index === set.length) {
            operationsCounter.increment();
            powerSet.push([...currentSet]);
            return;
        }
        
        backtrack(currentSet, index + 1);
        
        currentSet.push(set[index]);
        backtrack(currentSet, index + 1);
        
        currentSet.pop();
    }
    
    backtrack([], 0);
    return powerSet;
}

const exponentialComplexityBenchMark = (inputSizes) => {
    const response = [];

    for (let n of inputSizes) {
        let array = Array.from({ length: n }, (_, i) => i);

        operationsCounter.reset();

        generatePowerSet(array);

        const data = {
            notation : 'EXPONENTIAL O(2^n)',
            inputSize: n,
            operations: operationsCounter.get(),
        };

        response.push(data);
    }

    return response;
};

export { exponentialComplexityBenchMark };
