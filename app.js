var express=require('express')
var bodyParser=require('express')
var mongoose=require('mongoose')


var {studentModel}=require('./models/studentModel')
var {exmarkModel}=require('./models/exmarksModel')
var {studentRouter}=require('./controllers/studentController')

mongoose.connect("mongodb+srv://amru78:@amru@cluster0.1mnsm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true})

var app=express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/student',studentRouter)
app.listen( process.env.PORT || 3000,()=>{
    console.log("running")
})