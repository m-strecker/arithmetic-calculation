const express = require('express');
const app = express();

const calc = require("./arithmeticFunctions")

//Turn on server on port 8000
app.listen(8000, ()=>{
    console.log("Server is ON");
})



app.use(express.json());
//Create Post method to add another object to Employer array
app.post('/perform_calc', (req, res)=>{
    

     //read new record from json
    const requestedCalc = {
        operation: req.body.operation,
        value_1: req.body.value_1,
        value_2: req.body.value_2
    };
    

    //send successful reponse
    res.status(200).send(requestedCalc);

    if (requestedCalc.operation == "add"){
        console.log(calc.add(requestedCalc.value_1,requestedCalc.value_2));
    }
    else if(requestedCalc.operation == "sub"){
        console.log(calc.sub(requestedCalc.value_1,requestedCalc.value_2));
    }
    else if(requestedCalc.operation == "mul"){
        console.log(calc.mul(requestedCalc.value_1,requestedCalc.value_2));
    }
    else if(requestedCalc.operation == "div"){
        console.log(calc.div(requestedCalc.value_1,requestedCalc.value_2));
    }
    else{
        console.log("Input Error: Must request add, sub, mul or div for an operation");
    }



    
    });


    

    
