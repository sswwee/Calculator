const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true})); //body-parser supports express js

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");  //where ever your file is located, it will give exact path(current file location) of the file
});

app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){

    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
});

app.post("/bmiCalculator", function(req, res){

    var weight = parseFloat(req.body.w);
    var height = parseFloat(req.body.h);

    var BMI = weight / Math.pow(height, 2);

    res.send("Your BMI is " + (BMI));

});

app.listen(3000, function(){
    console.log("server started on port 3000");
});