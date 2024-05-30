const bcrypt=require("bcrypt")
const User=require("../models/User")

export const getUsers=async(req,res)=>{
    const users=await User.find({deleted:false},{password:0}.lean())
   if(!users){
         return res
         .status(400)
         .json({error:true,message:"no users",data:null})
}
res.json({error:true,message:"",data:users})
};
export const getUser=async(req,res)=>{
    res.send("todos")
};

export const addUser=async(req,res)=>{
    const {fullName,userName,password,active,type,email}=req.body;
    if(!fullName||!userName||!password){
        return res.status(400)
        .json({
            error:true,message:"fullName,userName and password are required",
            data:null
        });

    }
    const duplicateUser=await userName.findOneO({userName})
    if(duplicateUser){
        return res.status(409).json({
            error:true,
            message:"duplicate user",
            data:null
        })

    }
    const hashpwd=await bcrypt.hash(password,10)

    const user=await User.create({fullName,userName,password:hashpwd,active,email})
    if(!user){
        return res.status(400)
        .json({ error: true, message: "something wrong", data: null });
    }
    res.json({ error: false, message: "", data: {username:user.username,_id:user._id} });
  };

  
  export const deleteUser = async (req, res) => {
    const { _id } = req.body;
    if (!_id) {
      return res
        .status(400)
        .json({ error: true, message: "id is required!", data: null });
    }
    const user = await User.findById(_id);
    if (!user) {
      return res
        .status(400)
        .json({ error: true, message: "no user found", data: null });
    }
    user.deleted=true
    const updateUser = await user.save();
    res.json({ error: false, message: "", data:  {username:updateUser.username,_id:updateUser._id,deleted:updateUser.deleted} });
  };

    
export const updateUser = async (req, res) => {
    const {_id, fullname, username, password, active, company, roles,email} = req.body;
    // if (!username  || !fullname || !company || !type||!_id) {
      if (!username  || !fullname|| !company||!_id) {
  
      return res
        .status(400)
        .json({
          error: true,
          message: "all fields are required!",
          data: null,
        });
    }
    const user = await User.findById(_id);
    if (!user) {
      return res
        .status(400)
        .json({ error: true, message: "no user found", data: null });
    }
    if(password){
      const hashpwd=await bcrypt.hash(password,10)
  user.password=hashpwd 
    }
    user.fullname = fullname;
    user.roles=roles
    user.username = username;
    user.active = active;
    user.email=email;
    user.company=company
    const updateUser = await user.save();
    res.json({ error: false, message: "", data:  {username:updateUser.username,_id:updateUser._id} });
  };

