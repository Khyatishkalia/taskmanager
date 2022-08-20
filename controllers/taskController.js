const express = require("express");
const Task = require("../models/userSchema");

// const homeStartingContent = "sdsjdhsuidsdfhw";
const showTasks = (req, res) => {
   
  Task.find().then((response) => {
   
    //  var result = response.filter(req.params.status == "Done");
    
        res.render("home", {  Blogs:response });
      })
}
    
const updateTask = (req, res) => {
    let id = req.params._id;
    let data = req.body.newtask;
    let text = req.body.taskbody;
    let date = req.body.date;
    let status = req.body.status;
    let post = {
        title: data,
        description: text,
        date: date,
        status:status,
    }
    Task.findByIdAndUpdate(id, {$set:post}, {new:true}).then((response)=>{
        res.redirect('/')
    }
    )
}

const createTask = (req, res) => {
    let data = req.body.newtask;
    let text = req.body.taskbody;
      var input = req.body.date;
    var dateEntered = new Date(input);
    let status = req.body.status;
    let post = {
        title: data,
          description: text,
        date: dateEntered,
        status:status,
    }
    Task.create(post).then((response)=>{
        res.redirect('/')
    }
    )
}

const showSingleTask = (req, res) => {
    Task.findById(req.params._id).then((response)=>{
        res.render("post", {blog:response})
      }
      )
}

const compose = (req, res) => {
  res.render("compose");
}

const getupdatetemplate = (req, res) => {
    Task.findById(req.params._id).then((response) => {
   
    res.render("update", { blog: response });
  })
}

module.exports = { showTasks, updateTask, createTask, showSingleTask,compose,getupdatetemplate };