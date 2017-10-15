var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/info');
var db=mongoose.connection;
emps1=require('./models/emps');
//console.log(emps1);

app.get('/',function(req,res){
	res.send('Please use /api/emp');
});
app.get('/api/emp',function(req,res)
{
 		emps1.getemp(function(err,emp){
		res.json(emp);
	});

});

app.listen(3000);
console.log('Running on port 3000....');
