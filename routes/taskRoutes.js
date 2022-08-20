const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/taskController");

router.get("/",TaskController.showTasks);
router.get("/posts/:_id",TaskController.showSingleTask);
router.get("/editposts/:_id", TaskController.getupdatetemplate);
router.post("/update/:_id", TaskController.updateTask);
router.get("/compose", TaskController.compose);
router.post("/compose",TaskController.createTask);

module.exports = router;