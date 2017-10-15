var mongoose = require('mongoose');
var empsSchema=mongoose.Schema({
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
var emps1=module.exports=mongoose.model('emps1',empsSchema);					
module.exports.getemp=function(callback,limit)
{
	emps1.find(callback).limit(limit);
}