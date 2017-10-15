var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/info');
var db=mongoose.connection;
Genre=require('./models/genre');
//console.log(emps1);

app.get('/',function(req,res){
	res.send('Please use /api/genres');
});
app.get('/api/genres',function(req,res)
{
 		Genre.getGenres(function(err,genres){
		res.json(genres);
	});

});

app.listen(3000);
console.log('Running on port 3000....');
