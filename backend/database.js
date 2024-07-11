// connect command mpngoose.connect method

const mongoose = require("mongoose");

const user = require("./model/User_");
// require('./model/User')
//const con = mongoose.connect("mongodb://localhost:27017/sample");
// con?.then(() => {
  
//     console.log("connection successfull");
//   })
//   .catch((e) => {
//     console.log("no connection");
//   });


const connectDB=async()=>{
  try{
    await mongoose.connect("mongodb://localhost:27017/sample");
    console.log(" mongo db   connection successfull")
  }
  catch(err){
    console.error(err.message)
    process.exit(1)
  }
}

connectDB();

// //insert record into table  
// const newUser=new user({
//   name:"deepak",
//   email:"mc@gmail.com"
// })
// newUser.save()
// .then(()=>{console.log("user created")}).catch((e)=>(console.error(e.message))); 

/*
//.....create.....
user.create({name :"deepak306" ,email:"mc@gmail.com" }).then(()=>{console.log("user created")}).catch((e)=>{console.log("create error")})
// .........find.........
  user.find({email:"mc@gmail.com"}).then((data)=>{console.log(data)}
  ).catch((e)=>{
      console.log('find error')
  })
  
  // ........find update.......
  // user
  //   .findOneAndUpdate({ name: "rohit" }, { name: "hsrshit" })
  //   .then((data) => {
        //  console.log("updated")
  //     console.log(data);
  //   })
    //   .then(
    //     user.findMany({email:'nishant@gmail.com' }).then((data) => {
    //       console.log(data);
    //     })
    //   )
    // .catch((e) => {
    //   console.log("error");
    // });

    //..............delete user......
    user.findOneAndDelete({name:'deepak306'}).then(()=>console.log("deleted")).catch((err)=>console.log(err))

*/


