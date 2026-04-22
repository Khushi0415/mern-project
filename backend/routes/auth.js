const auth = require("../middleware/authMiddleware")
const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const Student = require("../models/Student")

const router = express.Router()

// REGISTER
router.post("/register", async (req,res)=>{
 console.log("Register API hit");
 const {name,email,password,course} = req.body

 try{

  const existingUser = await Student.findOne({email})

  if(existingUser){
   return res.status(400).json("Email already exists")
  }

  const hashedPassword = await bcrypt.hash(password,10)

  const student = new Student({
   name,
   email,
   password:hashedPassword,
   course
  })

  await student.save()

  res.json("Registration successful")

 }catch(err){
  res.status(500).json("Server error")
 }

})

// LOGIN
router.post("/login", async(req,res)=>{

 const {email,password} = req.body

 try{

  const user = await Student.findOne({email})

  if(!user){
   return res.status(400).json("Invalid Email")
  }

  const isMatch = await bcrypt.compare(password,user.password)

  if(!isMatch){
   return res.status(400).json("Wrong Password")
  }

  const token = jwt.sign(
   {id:user._id},
   process.env.JWT_SECRET,
   {expiresIn:"1h"}
  )

  res.json({token})

 }catch(err){
  res.status(500).json("Server error")
 }

})
router.get("/dashboard", auth, async(req,res)=>{

 const user = await Student.findById(req.user.id)

 res.json(user)

})
router.put("/update-password", auth, async(req,res)=>{

 const {oldPassword,newPassword} = req.body

 const user = await Student.findById(req.user.id)

 const match = await bcrypt.compare(oldPassword,user.password)

 if(!match){
  return res.status(400).json("Old password incorrect")
 }

 const hashed = await bcrypt.hash(newPassword,10)

 user.password = hashed

 await user.save()

 res.json("Password updated")

})
router.put("/update-course", auth, async(req,res)=>{

 const {course} = req.body

 const user = await Student.findById(req.user.id)

 user.course = course

 await user.save()

 res.json("Course updated")

})
module.exports = router