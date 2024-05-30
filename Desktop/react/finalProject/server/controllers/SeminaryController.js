const Seminary=require("../models/Seminary")

 const getAllSeminaries=async(req,res)=>{
    const seminarys=await Seminary.find({}).lean();
    if(!seminarys.length){
        return res.status(400).json({
            error:true,
            message:"no seminary",
            data:null
        })
    }
    res.json(seminarys);
};


//  const getSeminary=async(req,res)=>{

// }
 const createSeminary=async(req,res)=>{
    const {name,type,active,imag}=req.body;
    if(!name||!type) {
        return res.status(400).json({
            error:true,
            message:"name and type are required!",
            data:null
        })
    }
    
    const seminary=await Seminary.create({name,type,active,imag});
    if(!seminary){
        return res.status(201).json({
            error:true,
            message:"something wrong",
            data:null
        })
    }
};

 const updateSeminary=async(req,res)=>{
const {_id,name,type,active,imag}=req.body
if(!_id||!name||!type) {
    return res.status(400).json({
        error:true,
        message:"id, name and type are required!",
        data:null
    })}
    const seminary=await Seminary.findById(_id)
    if(!seminary) {
        return res.status(400).json({
            error:true,
            message:"no seminary found",
            data:null
        })}
        seminary.name=name,
        seminary.active=active,
        seminary.image=image,
        seminary.type=type
        const updadeSeminary=await seminary.save()
        
            return res.json({
                error:false,
                message:"",
                data:updadeSeminary
            })

}

const deleteSeminary=async(req,res)=>{
    const {id}=req.body
    if(!id) {
        return res.status(400).json({
            error:true,
            message:"id is required!",
            data:null
        })}

        const seminary=await Seminary.findById(id)
        if(!seminary) {
            return res.status(400).json({
                error:true,
                message:"no seminary found",
                data:null
            })}
        const deletedSeminary=await seminary.deleteOne()
        return res.json({
            error:false,
            message:"",
            data:deletedSeminary
        })
}




module.exports={getAllSeminaries,createSeminary,updateSeminary,deleteSeminary}