const mongoose=require('mongoose')

const SeminarySchema=new mongoose.Schema({
    name:{type:String,
        required:true
    },
    type:{
        type:String,
        enum:['op','om','am'],
        required:true

    },


    // nameSeminary:{
    //     type:mongoose.Schema.Types.String,
    //     require:true,
    //     unique:true
    // },
    // password:{
    //     type:string,
    //     require:true
    // },
    active:{
        type:Boolean,
        default:true
    },
    image:{
        type:String
    }

},{timestamps:true});

module.exports=mongoose.model("Seminary",SeminarySchema);