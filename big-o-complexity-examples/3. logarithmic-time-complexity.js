// O(log n) Logarithmic Time Complexity

function binarySearchRecursive(array, start, end, element) {
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

function binarySearchIterative(array, element) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (array[mid] == element) {
            return true; 
        } else
         if (array[mid] > element) {
            end = mid - 1; 
        } else {
            start = mid + 1; 
        }
    }

    return false; 
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var numberToFind = 61;

console.log(binarySearchRecursive(numbers, 0, numbers.length - 1, numberToFind));
console.log(binarySearchIterative(numbers, numberToFind));