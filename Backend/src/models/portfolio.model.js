const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({

 userId:{
  type: mongoose.Schema.Types.ObjectId,
  ref:"User"
 },

 portfolioUrl:String,

 fileName:String,

 extractedText:String,

 skills:[String],

 projects:[String],

 githubLinks:[String],

 techStack:[String]

},{timestamps:true});

module.exports = mongoose.model("Portfolio",portfolioSchema);