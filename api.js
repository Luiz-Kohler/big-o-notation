var express = require('express');  

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Listening on http://localhost:${PORT}`);
});

app.get("/status", (req, res) => {
    const status = {
       "Status": "Running"
    };
    
    res.send(status);
 });


 app.post("/calculate-n-to-operations", (req, res) => {
    const n = req.body.n;

    if (!n || typeof n !== 'number' || n <= 0) {
        return res.status(400).send('Invalid input: n must be a positive number');
    }

    function factorial(num) {
        if (num === 0 || num === 1) return 1;
        return num * factorial(num - 1);
    }

    let operations = [
        { type: "constant", operations: 1 },
        { type: "logarithmic", operations: Math.log(n) }, 
        { type: "linear", operations: n }, 
        { type: "log-linear", operations: n * Math.log(n) }, 
        { type: "square", operations: Math.pow(n, 2) }, 
        { type: "cubic", operations: Math.pow(n, 3) },
        { type: "exponential", operations: Math.pow(2, n) }, 
        { type: "factorial", operations: factorial(n) } 
    ];

    operations = operations.map(op => ({
        type: op.type,
        operations: Math.floor(op.operations)
    }));

    res.json({
        inputSize: n,
        operations: operations
    });
 });