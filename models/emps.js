var mongoose = require('mongoose');
var empsSchema=mongoose.Schema({
	
});	
var Emps=module.exports=mongoose.model('Emps',empsSchema);					
module.exports.getEmps=function(callback,limit)
{
	Emps.find(callback).limit(5);
}
