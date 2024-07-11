 const mongoose=require('mongoose')
 var Schema=mongoose.Schema;

//creating a schema................

 var userSchema=new Schema({
    // _id:mongoose.ObjectID,
    name:{type:String ,required: true, max:[127,"max length is 127 characters"]},
    email:{type:String, required:true  },
    password:{type:String ,required:true},
    otp:{type:String },
    phone:{type:Number, required:true,max:[9999999999], min:[1000000000]},
    address:String,
    image:{type:String },
  registration_date:{type:Date,default:Date.now()}
 })

//creating a model..............
//two arguments first is the name of the model and second is the schema
const user=mongoose.model('testusers',userSchema);

module.exports=user;


//nodemon database.js commmand to update database automatically