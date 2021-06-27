var express=require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var { studentModel } = require('../models/studentModel')
var { exmarkModel } = require('../models/exmarksModel')

var studentRouter=express.Router()
studentRouter.use(bodyParser.urlencoded({ extended: false }))
studentRouter.use(bodyParser.json())



studentRouter.post('/studentinfo',(req,res)=>{
    var studentObject=new studentModel(req.body);
    studentObject.save()
    res.json(studentObject)
})
studentRouter.get('/view',async(req,res)=>{
    try{
        var result=await studentModel.find()
        res.json(result)
    }
    catch(error){
        res.send(error)
    }
})
studentRouter.post('/addmarks',(req,res)=>{
    var mark=new exmarkModel(req.body)
    mark.save(
        (error)=>{
            if(error){
                res.send("Error"+ error)
            }
            else{
                res.json({"Status":"Success"})
            }
        }
    )
})
studentRouter.get('/viewmark',(req,res)=>{
    try{
        studentModel.aggregate([
            {
                $lookup:{
                    from:"studentmarks",
                    localField:"_id",
                    foreignField:"studentId",
                    as:"STUDENTMARKS"

                }
            }
        ],(error,data)=>{
            return res.json(data)
        }
         )
    }
    catch(error)
    {
        res.send(error)
    }
})
studentRouter.post('/search',async(req,res)=>{
    try{
        var result=await studentModel.find(req.body)
        res.json(result)
    }
    catch(error){
        res.json({"status":error})
    }
})


studentRouter.post('/edit',async(req,res)=>{
   try{
       var result=await studentModel.findByIdAndUpdate({"_id":req.body._id},req.body)
       res.json(result)
   }
   catch(error){
       res.json({"status":error})
   }
})

studentRouter.post('/delete',async(req,res)=>{
   try{
       var result=await studentModel.findByIdAndDelete({"_id":req.body._id})
       res.json(result)
   }
   catch(error){
       res.json({"status":error})     
   }    
})
module.exports={studentRouter}
