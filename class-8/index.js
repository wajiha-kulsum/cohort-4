// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//     res.sendFile("C:\\Users\\Wajiha Kulsum\\OneDrive\\Desktop\\cohort-4\\class-8\\index.html");
// });

// app.get("/add/:num1/:num2", (req, res) => {

//     const num1 = Number(req.params.num1);
//     const num2 = Number(req.params.num2);

//     const result = num1 + num2;

//     res.json({
//         result: result
//     });
// });

// app.listen(3002, () => {
//     console.log("Server running on port 3003");
// });


const express = require("express");

const app = express();

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(
        "C:\\Users\\Wajiha Kulsum\\OneDrive\\Desktop\\cohort-4\\class-8\\index.html"
    );
});

// Addition API
app.get("/add/:num1/:num2", (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.json({
            error: "Please enter valid numbers"
        });
    }

    const result = num1 + num2;

    res.json({
        num1: num1,
        num2: num2,
        result: result
    });
});

// Multiplication API
app.get("/multiply/:num1/:num2", (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);

    const result = num1 * num2;

    res.json({
        result: result
    });
});

// Simple user route
app.get("/user/:name", (req, res) => {
    const name = req.params.name;

    res.json({
        message: `Hello ${name}!`
    });
});

app.listen(3002, () => {
    console.log("Server running on port 3002");
});
