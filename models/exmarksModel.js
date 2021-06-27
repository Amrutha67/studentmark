var mongoose=require('mongoose')

var exmarkSchema=new mongoose.Schema({
    studentId:{type:mongoose.Schema.Types.ObjectId,
        ref:'studentdetails'},
        examName:{type:String,required:true},
        sub_name1:{type:String,required:true},
        sub1_mark:{type:Number,required:true},
        sub1_totalMark:{type:Number,required:true},

        sub_name2:{type:String,required:true},
        sub2_mark:{type:Number,required:true},
        sub2_totalMark:{type:Number,required:true},

        sub_name3:{type:String,required:true},
        sub3_mark:{type:Number,required:true},
        sub3_totalMark:{type:Number,required:true},

        sub_name4:{type:String,required:true},
        sub4_mark:{type:Number,required:true},
        sub4_totalMark:{type:Number,required:true},

        sub_name5:{type:String,required:true},
        sub5_mark:{type:Number,required:true},
        sub5_totalMark:{type:Number,required:true}


})
var exmarkModel=mongoose.model('studentmarks',exmarkSchema)
module.exports={exmarkModel}