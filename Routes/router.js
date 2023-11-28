const express=require("express");
const router=new express.Router();
const controllers=require("../Controllers/LogsControllers")
// routes
router.post("/", controllers.userpost);
router.get("/logs/details", controllers.userget);
router.get("/logsexport",controllers.userExport)
module.exports=router;

