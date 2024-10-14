// O(1) Constant Time Complexity

import operationsCounter from '../common/operations-counter.js';

const addOneHundred = (input) => {
    for (let i = 1; i <= 100; i++) {
        operationsCounter.increment();
        input += 1;
    }

    return input;
}

const constantComplexityBenchMark = (inputSizes) => {

    var response = [];

    for(let n of inputSizes){
        operationsCounter.reset();
    
        addOneHundred(n);
        
        var data = {
            notation : 'CONSTANT O(1)',
            inputSize: n,
            operations: operationsCounter.get(),
        }

        response.push(data);
    }

    return response;
}

export { constantComplexityBenchMark };