const express=require('express')
const app=express()
const userRoute  = require('./Routes/userRoutes')
require('./database')
require('dotenv').config();
//cors 
const cors = require('cors');

app.use(cors());

const port=process.env.PORT || 5500
const host=process.env.HOST

//parse json request body
app.use(express.json())
app.use(express.urlencoded({extended :false}))

//user route
app.use('/users',userRoute)
app.listen(port,()=>{
    console.log(`server is running on port http://${host}: ${port}`)
})