const user = require("../model/User_");
const bcrypt = require("bcrypt");
require('dotenv').config();
const jwt = require("jsonwebtoken");
const salt1 = process.env.Salt;
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service:'gmail',
  port: 465,
  secure:true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
    }
    });
   
const verifyToken=(req,res,next)=>{
  const authHeader =  req.headers['authorization'];
  console.log(authHeader)
  const token =authHeader&&authHeader.split(" ")[1];
  console.log(token)
  if (!token) return res.status(401).send({ auth: false, message:'no token no access'});
  jwt.verify(token, salt1, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'error occured while verifying token'});
    req.userId = decoded.id;
    next();
})
}
const AuthAdmin=(req,res,next)=>{

!req.query.id&&(!req.query.isAdmin) && res.status(401).send({ auth: false, message:'no token no access'});
req.query.id&& 
 ((req,res,next)=>{
  const authHeader =  req.headers['authorization'];
  console.log(authHeader)
  const token =authHeader&&authHeader.split(" ")[1];
  console.log(token)
  if (!token) return res.status(401).send({ auth: false, message:'no token no access'});
  jwt.verify(token, salt1, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'error occured while verifying token'});
    req.userId = decoded.id;
    // next();
})
})
next();
}




//................delete user
const deleteUser = async (req, res) => {
  // res.send("user data deleted");
  const {email}=req.body
  await user.findOneAndDelete({email:email}).then(()=>{
    res.json({
      message:"user deleted",
      status:'200'
    })
  }).catch((e)=>console.error(err.message))
};
//................getuser
// const getUser = async (req, res) => {
//   const id=req.query.id;
//   console.log(id)
//   await user
//     .find(id&& {_id:req.query.id} )
//     .then((data) => {
//       res.json({
//         status: "OK",
//         message: "user fecthed ",
//         data: data,
//       });
//       console.log(data);
//     })
//     .catch((e) => {
//       console.log("error message");
//     });
// };
const getUser = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  if (!id) {
    return res.status(400).json({
      status: "ERROR",
      message: "User ID is required"
    });
  }

  try {
    const userData = await user.find({_id:id});
    
    if (!userData) {
      return res.status(404).json({
        status: "ERROR",
        message: "User not found"
      });
    }

    res.json({
      status: "OK",
      message: "User fetched",
      data: userData,
    });
    console.log(userData);
  } catch (e) {
    console.error("Error fetching user:", e);
    res.status(500).json({
      status: "ERROR",
      message: "An error occurred while fetching the user"
    });
  }
};


//..............regiser user or insert

const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const image = req.file ? req.file.filename : null;


    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        message: 'All fields are required (name, email, phone, password)',
        status: 400,
      });
    }

    const userExist = await user.findOne({ email: email });
    if (userExist) {
      console.log(`User already exists with email: ${email}`);
      return res.status(400).json({
        message: 'User already exists',
        status: 400,
      });
    }

    const hashPassword = bcrypt.hashSync(password, salt1);

    const newUser = new user({
      name,
      email,
      phone,
      password: hashPassword,
      image,
    });

    const userdata = await newUser.save();
    console.log(`User registered with this email: ${email}`);
  

    return res.status(200).json({
      status: 200,
      message: 'User registered successfully',
      data: userdata,
    });
  } catch (e) {
    console.error(e.message);
    return res.status(500).json({
      message: 'Server error',
      status: 500,
    });
  }
};

//.............................login user
const loginUser = async (req, res) => {
  console.log(req.body); 

  const { email, password } = req.body;

  const hash = bcrypt.hashSync(password, salt1);
  const loginUser = await user.findOne(
    { email: email, password: hash },
    "+name +email"
  );
  if (!loginUser) {
    console.log("Invalid email or password");
    res.json({
     message: "Invalid email or password",
     status: 400,
    });
  } else {
    const token=jwt.sign({
      user_id:loginUser._id,
      email:loginUser.email,
    },salt1,{expiresIn:'1h'})
   console.log(token)
    console.log("user fecthed :\n", loginUser.name, "\n", loginUser.email);
   
    res.json({
      user_id:loginUser._id,
      status: "OK",
      message: "user fecthed ",
      email:email,
      token:token,
    });
    //...............................mailing
    // const mailOptions = {
    //   from: process.env.EMAIL ,
    //   to: email,
    //   subject: 'Sending Email using Node.js',
    //   text: 'testing  NEW LOGIN !!!!!!!!!!!!!!!'
    //   };

    // transporter.sendMail(mailOptions,function(err,info){
    //   if(err){
    //     console.log(err);
    //     }else{
    //       console.log(info);
    //     }
    // })
  }
};

//......................change password

const changePassword = async (req, res) => {
  const email = req.body.email;
  const loginUser = await user.findOne({ email: email }, "+password ");
  const password = loginUser.password;
  console.log(req.body);
  console.log("oldhash:", password);
  // const old_password=req.body.old_password;

  const old_password = bcrypt.hashSync(req.body.old_password, salt1);

  if (!loginUser) {
    res.json({
      status: "fail",
      message: "user not found",
    });
    console.log("user not found with email");
  } else {
    if (password != old_password) {
      console.log("wrong password");
      res.json({
        status: "fail",
        message: "wrong password",
      });
    } else {
      const { new_password, confirm_password } = req.body;
      if (new_password != confirm_password) {
        console.log("confirm password mismatched");
        res.json({
          status: "fail",
          message: " confirm password is not matched",
        });
      } else {
        const newhash = bcrypt.hashSync(req.body.new_password, salt1);
        user
          .updateOne({ email: email }, { password: newhash })
          .then((data) => {
            console.log("user password updated ");
            console.log("newhash:", newhash);
            res.json({
              status: "OK",
              message: "password changed ",
              data: data,
            });
          })
          .catch((e) => console.error(e.message));
      }
    }
  }
};

//.......................forgot password
const forgotPassword = async (req, res) => {
  const email = req.body.email;
  const forgotUser = await user.findOne({ email: email });
  
  if (!forgotUser) {
    console.log("user not found with email");
    res.json({
      status: "fail",
      message: "user not found with email",
    });
  } else {
   const otp = Math.floor(1000 + Math.random() * 9000); //use bcrypt
    console.log(`otp to mail: ${otp}`);
    forgotUser.otp = bcrypt.hashSync(otp.toString(),salt1);
    forgotUser
      .save()
      .then((data) => {
        console.log("otp sent to", data.email);
        res.json({
          status: "OK",
          message: "otp sent ",
          data: data.email,
        });
      })
      .catch((e) => console.error(e.message));
  }
};

//........................validate OTP
const validateOTP = async (req, res) => {
  const email = req.body.email;
  const correctOtp = await user.findOne({ email: email }, "+otp,+email");
  const userOtp = bcrypt.hashSync(req.body.otp,salt1);
  if (correctOtp) {
    correctOtp.otp == userOtp
      ? (correctOtp.otp=bcrypt.hashSync("0",salt1),
      correctOtp.save(),
        console.log("otp matched"),
        res.json({
          status: "OK",
          message: "otp matched ",
        }))
      : (console.log("wrong otp"),
        res.json({
          status: "failed",
          message: "otp not matched ",
        }));
  } else console.log("cant fetch otp");
};

//.................new password after otp verification
const newPassword = async (req, res) => {
  const email = req.body.email;
  const loginUser = await user.findOne({ email: email }, "+password ");

  console.log(req.body);

  if (!loginUser) {
    res.json({
      status: "fail",
      message: "user not found",
    });
    console.log("user not found with email");
  } else {
    const { new_password, confirm_password } = req.body;
    if (new_password != confirm_password) {
      console.log("confirm password mismatched");
      res.json({
        status: "fail",
        message: " confirm password is not matched",
      });
    } else {
      const newhash = bcrypt.hashSync(req.body.new_password, salt1);
      user
        .updateOne({ email: email }, { password: newhash })
        .then(() => {
          console.log("user password updated ");
          res.json({
            status: "OK",
            message: "password changed ",
           
          });
        })
        .catch((e) => console.error(e.message));
    }
  }
};

//export controller
module.exports = {
  deleteUser,
  getUser,
  registerUser,
  loginUser,
  changePassword,
  forgotPassword,
  validateOTP,
  newPassword,
  verifyToken,
  AuthAdmin,
};
