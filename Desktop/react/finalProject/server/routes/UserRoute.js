const express=require("express")
const router=express.Router()


const userController=require('../controllers/UserController')
const verifyJWT=require("../middleware/verifyJWT")
const verifyAdmin=require("../middleware/verifyAdmin")

// router.use(verifyJWT)
// router.use(verifyAdmin)

router.get("/",userController.getUsers)
//router.get("/:id")
router.post("/",userController.addUser)
router.put("/",userController.updateUser)
router.delete("/",userController.deleteUser)
module.exports=router