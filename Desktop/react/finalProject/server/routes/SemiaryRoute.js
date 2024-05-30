const express=require("express")
const Seminary = require("../models/Seminary")
const router=express.Router()

const seminaryController=require("../controllers/SeminaryController")

router.get("/",seminaryController.getAllSeminaries)
//router.get("/:id",seminaryController.getSeminaryById)
router.put("/",seminaryController.updateSeminary)
router.post("/",seminaryController.createSeminary)
router.delete("/",seminaryController.deleteSeminary)

module.exports=router