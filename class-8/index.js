const express = require("express")

const app = express();

app.get("/sum/:a/:b", function(req, res){

    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const sum = a + b;
    res.json({
        ans: sum
    })
    
})

app.listen(3002);