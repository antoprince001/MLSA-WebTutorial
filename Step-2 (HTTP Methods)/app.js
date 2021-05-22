const express = require('express');

const app = express();

app.get('/String',function(req,res){

    res.send('Hello World');
})

app.get('/JSON',function(req,res){
    
    res.json({
        name : 'Name',
        college : 'SJCE',
        dept : 'IT'
    });
})

app.get('/ARRAY',function(req,res){
    
    res.send([1,2,3]);
})
app.listen(5000);
