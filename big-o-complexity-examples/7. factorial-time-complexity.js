// O(n!) Factorial Time Complexity

function permute(str) {
    if (str.length === 0) return [''];
    
    let permutations = [];
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        let remainingStr = str.slice(0, i) + str.slice(i + 1);
        let remainingPerms = permute(remainingStr);
        
        for (let perm of remainingPerms) {
            permutations.push(char + perm);
        }
    }
    
    return permutations;
}

let inputString = "abcde";
let allPermutations = permute(inputString);
console.log(`All permutations of "${inputString}":`, allPermutations.length);