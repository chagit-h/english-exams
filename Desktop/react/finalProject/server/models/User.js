const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    fullName:{type:String,
    require:true
},
userName:{
    type:String,
    required:true,
    unique:true
},
roles:{
    type:string,
    enum:["student","Teacher","User"],
    default:"Student"
},
email:{
    type:String,
    lowercase:true,
    trim:true,
},
password:{
    type:String,
    required:true
},
company:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"Seminary"
},
active:{
    type:Boolean,
    default:false
},
deleted:{
    type:Boolean,
    default:false
}

},{timestamps:true})
module.exports=mongoose.model("User",userSchema)