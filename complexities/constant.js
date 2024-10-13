// O(1) Constant Time Complexity

import operationsCounter from '../operations-counter.js';

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

        const startTime = performance.now(); 
        const initialMemory = process.memoryUsage().heapUsed;
    
        addOneHundred(n);
        const endTime = performance.now();
        const finalMemory = process.memoryUsage().heapUsed;
        
        var data = {
            operationsCount: operationsCounter.get(),
            executionTime: endTime - startTime,
            memoryUsage: finalMemory - initialMemory,
            function: {
                notation: 'O(1) constant',
                name: addOneHundred.name,
            }
        }

        response.push(data);
    }

    return response;
}

export { constantComplexityBenchMark };