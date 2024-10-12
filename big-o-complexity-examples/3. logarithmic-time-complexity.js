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

    let counter = 0;

    while (start <= end) {
        counter++;

        let mid = Math.floor((start + end) / 2);

        if (array[mid] == element) {
            console.log(counter);
            return true; 
        } else
         if (array[mid] > element) {
            end = mid - 1; 
        } else {
            start = mid + 1; 
        }
    }

    console.log(counter);

    return false; 
}