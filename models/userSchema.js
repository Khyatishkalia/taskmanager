
const mongoose =require("mongoose");


const taskSchema = new mongoose.Schema({
    id: {
        type: Number,
        autoIncrement: true,
    },
    title:{
        type:String,
        required:true,
          unique:true 
    },
    description:{
        type:String,
        required:true,
         unique:true 
    },

    date:{
        type:Date,
        default:Date.now
    },
    status: {
        type: String
    }
    
})


// store the message -------------# 36  4
taskSchema.methods.addMessage = async function(title,description,date,status){
try{
this.messages = this.messages.concat({title,description,date,status});// message add hogyaa h bss ab save krnaa h
await this.save();
return this.messages;
}catch(err){
    console.log(err);
}
}
// model collection create kr rhe h jiske andr hm bhott sare documents likh skte h
const Task =  mongoose.model("Task",taskSchema);
module.exports = Task;
