// O(n log n) Log Linear Time Complexity

import operationsCounter from '../common/operations-counter.js';

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    operationsCounter.increment();

    if (left >= right) 
        return;

    let pivotIndex = partition(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
};

const partition = (arr, left, right) => {
    let pivot = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
};

const logLinearComplexityBenchMark = (inputSizes) => {
    const response = [];

    for (let n of inputSizes) {
        operationsCounter.reset();
        
        let array = Array.from({ length: n }, (_, i) => i);

        quickSort(array);

        const data = {
            notation : 'LOG LINEAR O(n log n)',
            inputSize: n,
            operations: operationsCounter.get()
        };

        response.push(data);
    }

    return response;
};

export { logLinearComplexityBenchMark };
