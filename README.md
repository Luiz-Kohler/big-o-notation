# Big O Notation

## What is it?
It's a method used to measure the efficiency of an algorithim based on how much time and space are required as the input size grows. For that reason, we have different notations to classify it.

## How does it work?
Big O notation basically works by calculating the worst case of your algorothim, analyzing the time and space necessary to run it, and how the input size affect that, how much time and space will be necessary if your input size increases. 

## Why is important?
With that knowledge, we are able to create more efficient algorithms that support a massive scale of data. We can even refactor existing algorithms to make them consume less time and space to execute, performing better and doing the same thing.

## Notations:
Here some examples of notations, explaing each one of them:

- **Constant O(1)**

Constant time complexity does not change the space or time required to execute, regardless of the input size. In the example below, the number of operations is always the same, whether the input size is one or one thousand.
  ```js
    const addOneHundred = (input) => {
        for (let i = 1; i <= 100; i++) {
            operationsCounter.increment();
            input += 1;
        }

        return input;
    }
  ```


- **Linear O(n)**
  In linear time complexity, the number of operations increases directly in proportion to the input size. Here's an example:
  ```js
    const createArrayOfSize = (size) => {
        let array = [];

        // the number of operations in below algorithm will be equal as the input size.
        for (let i = 1; i <= size; i++) {
            operationsCounter.increment();
            array.push(i);
        }

        return array;
    };
    ```
 
- **Logaritmic O(log n)**
    In logarithmic time complexity, the number of operations increases logarithmically with respect to the input size. Here's an example:
  ```js
    const binarySearchRecursive = (array, start, end, element) => {
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
  ```

- **Quadratic O(n^2)**
    In quadratic time complexity, the number of operations increases quadratically as the input size grows. Here's an example:
  ```js
    const createMatrix = (size) => {
        var matrix = [];
        for (let column = 0; column < size; column++) {
            matrix[column] = [];

            for (let row = 0; row < size; row++) {
                operationsCounter.increment();
                matrix[column][row] = `${column} ${row}`;
            }
        }

        return matrix;
    }
  ```

- **Cubic O(n^3)**
       In cubic time complexity, the number of operations increases cubically as the input size grows. Here's an example:
  ```js
    const createCube = (size) => {
    var matrix = [];
    for (let column = 0; column < size; column++) {
        matrix[column] = [];

        for (let row = 0; row < size; row++) {
            matrix[column][row] = [];
            for(let height = 0; height < size; height++){
                operationsCounter.increment();
                matrix[column][row][height] = `${column} ${row}`;
            }
        }
    }

    return matrix;
    }
  ```

- **Exponential O(c^n)**
   In exponential time complexity, the number of operations grows exponentially with the input size. Here's an example:
  ```js
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
  ```

- **Factorial O(n!)**
      In factorial time complexity, the number of operations grows factorially with the input size. Here's an example:
  ```js
    const permute = (str) => {
        if (str.length === 0) 
            return [''];

        let permutations = [];

        for (let i = 0; i < str.length; i++) {
            let char = str[i];

            let remainingStr = str.slice(0, i) + str.slice(i + 1);
            let remainingPerms = permute(remainingStr);

            for (let perm of remainingPerms) {
                operationsCounter.increment();
                permutations.push(char + perm);
            }
        }

        return permutations;
    };
  ```

  ## how much does the growth of the input size increases the number of operations?

  Here a graph from FreeCodeCamp answering that question in the easily way possible. 
  
  ![image](https://github.com/user-attachments/assets/69ccd4d0-3b2e-498d-a5fb-a9abc43de867)

  ## API
  With that in mind I decide to create a simple api in node js using express, with just one endpoint.
  
  - **POST** - calculate-n-to-operations
      - It just calculate the input size and returns the number of operations on worst-case in each complexty type, body request:
  ```json
  {
    "n": 10
  }
  ```
  response:
  ```json
  {
      "inputSize": 10,
      "operations": [
          {
              "type": "constant",
              "operations": 1
          },
          {
              "type": "logarithmic",
              "operations": 3
          },
          {
              "type": "linear",
              "operations": 10
          },
          {
              "type": "log-linear",
              "operations": 24
          },
          {
              "type": "square",
              "operations": 100
          },
          {
              "type": "cubic",
              "operations": 1000
          },
          {
              "type": "exponential",
              "operations": 1024
          },
          {
              "type": "factorial",
              "operations": 3628800
          }
      ]
  }
  ```

  here my 50 cents. =)
  
