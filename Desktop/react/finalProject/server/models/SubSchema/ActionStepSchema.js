const mongoose=require("mongoose")

const ActionStepSchema=new mongoose.Schema({
    hasText:{
        type:Boolean,
        required:true
    },
    textLable:{
        type:String
    },
    textRequired:{
        type:Boolean
    },
    singleFileLable:{
        type:String
    },
    singleFileRequired:{
        type:Boolean
    },
    hasMultyFiles:{
        type:String
    },
    multyFlsLable:{
        type:String
    },
    minimumFilsRequired:{
        type:Number
    },
    maximumFilesAlowd:{
        type:Number
    },
    filesType:{
        type:[String],
        enum:["pdf","jpg","xls","txt"]
    },
    relatedList:{
        type:[{
            name:{
                type:String,
                required:true,
            },
            alowText:Boolean,
            textLable:String
        }]


    }
    
},{timestamps:true})

module.exports=ActionStepSchema