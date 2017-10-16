var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());
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
 			if(err){
 				throw err;
 			}
		res.json(genres);
	});

});
app.post('/api/genres',function(req,res)
{			var genre=req.body;
			//console.log(req.body.firstName);});
			Genre.addGenre(genre,function(err,genre){
 			if(err){
 				throw err;
 			}
		res.json(genre);
	});
});

app.put('/api/genres/:_id',function(req,res){
	var id=req.params._id;
	//console.log(id);
	var genre=req.body;
	Genre.updateGenre(id,genre,{},function(err,genre){
	if(err){
		throw err;
	}
	res.json(genre);
	});
});

app.listen(3000);
console.log('Running on port 3000....');
