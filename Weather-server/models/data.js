let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let weatherSchema = new Schema({
	city : String,
	country : String,
	date : String,
	maxtemp : String,
	mintemp : String,
	condition : String
},
{
	versionKey: false
});
 
 let data = mongoose.model('weather',weatherSchema)
 module.exports = data;