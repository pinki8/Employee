var mongoose = require('mongoose');
var genreSchema=mongoose.Schema({
	firstName:{
		type :String,
		required :true
			},
	lastName:{
		type :String,
		required :true},
	age:{
		type :Number,
		required :true
			},
	email:{
		type :String,
		required :true
			},
	phone:{
		type :String,
		required :true
			},
	address:{
		type :String,
		required :true
			}
});	
var Genre=module.exports=mongoose.model('Genre',genreSchema);					
module.exports.getGenres=function(callback,limit)
{
	Genre.find(callback).limit(limit);
}
module.exports.addGenre=function(genre,callback)
{
	Genre.create(genre,callback);
	//console.log(t);
}
