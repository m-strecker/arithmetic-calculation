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
       
        console.log("Operation: Addition");
        console.log("Value 1: "+ requestedCalc.value_1 );
        console.log("Value 1: "+ requestedCalc.value_2 );
        console.log("Result: " + calc.add(requestedCalc.value_1,requestedCalc.value_2));
    }
    else if(requestedCalc.operation == "sub"){

        console.log("Operation: Subtraction");
        console.log("Value 1: "+ requestedCalc.value_1 );
        console.log("Value 1: "+ requestedCalc.value_2 );
        console.log("Result: " + calc.sub(requestedCalc.value_1,requestedCalc.value_2));
    }
    else if(requestedCalc.operation == "mul"){

        console.log("Operation: Multiplication");
        console.log("Value 1: "+ requestedCalc.value_1 );
        console.log("Value 1: "+ requestedCalc.value_2 );
        console.log("Result: " + calc.mul(requestedCalc.value_1,requestedCalc.value_2));
    }
    else if(requestedCalc.operation == "div"){

        console.log("Operation: Division");
        console.log("Value 1: "+ requestedCalc.value_1 );
        console.log("Value 1: "+ requestedCalc.value_2 );
        console.log("Result: " + calc.div(requestedCalc.value_1,requestedCalc.value_2));
    }
    else{
        console.log("Input Error: Must request add, sub, mul or div for an operation");
    }



    
    });


    

    
