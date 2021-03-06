const mongoose = require("mongoose");


const ClientSchema = mongoose.Schema({
  userName : String,
  email : String,
  password:{type:String,min:8},
  job:String,
  bio:{type:String,default:""},
  rating:{type:Number,max:5,min:0,default:0},
  reviewersNum:{type:Number,default:0},
  status:{type:String,default:"client"},
  phoneNumber:{type:String,max:100},
  longitude :{type:Number,default:null},
  latitude:{type:Number,default:null},
  active:{type:Boolean,default:false},
  creationDate : {type:Date,default:Date.now},
  profileImg:{type:String,default:""}
})


module.exports = mongoose.model("Client",ClientSchema)