const express = require('express');

const app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('index',{ name :'anto', list : ['Helo','Hi','Bye']} );
})

app.get('/home',function(req,res){
    res.redirect('/');
})


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

app.get('/user/:name',function(req,res){

    res.send('Welcome '+req.params.name );
})

app.get('/profile/:country/:id',function(req,res){

    res.send('Welcome '+req.params.id +' from '+req.params.country);
})

app.get('/profile',function(req,res){
    res.send('Welcome '+req.query.id +' from '+req.query.country);
})
app.listen(5000);
