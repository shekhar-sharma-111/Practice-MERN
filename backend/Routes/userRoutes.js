const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");

const {
  deleteUser,
  getUser,
  registerUser,
  loginUser,
  changePassword,
  forgotPassword,
  validateOTP,
  newPassword,
  AuthAdmin
} = userController;
//middleware that is specific to this router
router.use(express.Router());
const multer=require('multer');

// set u disk storage  for multer



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./useruploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${req.body.name}` + `-` + Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });

multer({ dest: "./useruploads" });

// router.get("/",userController.AuthAdmin ,getUser);
// router.get("/",getUser);
router.get("/:id",userController.verifyToken ,getUser);
router.delete("/", deleteUser);
router.post("/", upload.single('image'),registerUser);
router.post("/login", loginUser);
router.post("/changepassword", changePassword);
router.post("/forgotpassword", forgotPassword);
router.get("/validateotp",validateOTP);
router.post("/newpassword",newPassword );

module.exports = router;
