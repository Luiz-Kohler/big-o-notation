// O(n log n) Log Linear Time Complexity

function basicNLogNFunc(number){
    let index = number;

    while (number > 1) {
        number = Math.floor(number / 2);

        for(let i = 1; i <= index; i++){
            counter++
            console.log(i);
        }
    }
}

function quickSort(arr, left = 0, right = arr.length - 1) {

    if (left >= right) 
        return; 

    let pivotIndex = partition(arr, left, right); 

    quickSort(arr, left, pivotIndex - 1); 
    quickSort(arr, pivotIndex + 1, right); 
}

function partition(arr, left, right) {
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
}

const array = [34, 7, 23, 32, 5, 7, 62, 7];
quickSort(array);
console.log(array); 