const mongoose=require('mongoose')
const ActionStepSchema=require('./SubSchema/ActionStepSchema')
const actionSchema=new mongoose.Schema({
    title:{
        type:string,
        require:true
    },
    body:{
        type:string
    },
    steps:{
        type:[ActionStepSchema]
    }
},{timestamps:true})


module.exports=mongoose.model('Action',actionSchema)