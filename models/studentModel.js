var mongoose=require('mongoose')
var studentSchema= new mongoose.Schema
({
    name:{type:String,required:true},
    admno:{type:String,required:true},
    rollno:{type:Number,required:true},
    clg:{type:String,required:true}  
})
var studentModel=mongoose.model('studentdetails',studentSchema)
module.exports={studentModel}