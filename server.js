const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb+srv://roy:admin@hallo.g3iiw.mongodb.net/school');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const members = require('./moderls/personschema');


app.get('/',(req,res)=>{
    res.send('Hallo how can i help you');
})

app.post('/medam',async(req,res)=>{
       try{
        const data = req.body;

        const newPerson = new members(data);
         const response =   await newPerson.save()
         console.log('data saved');
         res.status(200).json(response);
        
    }catch(err){
        console.log(Error);
        res.status(500).json({Error: 'internal server error'});
    }
})


app.listen(8000,()=>{
    console.log('server lisning 8000');
})