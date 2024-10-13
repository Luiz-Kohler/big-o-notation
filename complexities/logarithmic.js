// O(log n) Logarithmic Time Complexity
import operationsCounter from '../operations-counter.js';

function binarySearchRecursive(array, start, end, element) {
    operationsCounter.increment();

    if (start > end) 
        return false;

    let mid = Math.floor((start + end) / 2)

    if(array[mid] == element)
        return true;

    if(array[mid] > element)
        return binarySearchRecursive(array, start, mid -1, element)
    else 
        return binarySearchRecursive(array, mid + 1, end, element)
}

// This one is better, it can be a slghtly more efficient in terms of memory usage
// cause recursive can cause stack overflow w/ large inputs
// converting to interative is possible to avoid this problem
const binarySearchIterative = (array, element) => {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        operationsCounter.increment();

        let mid = Math.floor((start + end) / 2);

        if (array[mid] === element) 
            return true;
        else if (array[mid] > element) 
            end = mid - 1;
        else 
            start = mid + 1;
    }

    return false;
};

const logarithmicComplexityBenchMark = (inputSizes) => {
    const response = [];

    for (let n of inputSizes) {
        operationsCounter.reset();
        
        let array = Array.from({ length: n }, (_, i) => i);
        const elementToSearch = array[0];

        const startTime = performance.now();
        const initialMemory = process.memoryUsage().heapUsed;

        binarySearchIterative(array, elementToSearch);

        const endTime = performance.now();
        const finalMemory = process.memoryUsage().heapUsed;

        const data = {
            operationsCount: operationsCounter.count,
            executionTime: endTime - startTime,
            memoryUsage: finalMemory - initialMemory,
            function: {
                notation: 'O(log n) logarithmic',
                name: binarySearchIterative.name,
            },
        };

        response.push(data);
    }

    return response;
};

export { logarithmicComplexityBenchMark };