const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.sendFile("C:\\Users\\Wajiha Kulsum\\OneDrive\\Desktop\\cohort-4\\class-8\\index.html");
});

app.get("/add/:num1/:num2", (req, res) => {

    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);

    const result = num1 + num2;

    res.json({
        result: result
    });
});

app.listen(3002, () => {
    console.log("Server running on port 3003");
});