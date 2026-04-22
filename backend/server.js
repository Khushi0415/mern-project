const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const authRoutes = require("./routes/auth")

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Test route (debugging)
app.get("/test",(req,res)=>{
  res.send("Server working")
})

// Auth routes
app.use("/api", authRoutes)

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.log("MongoDB connected")
})
.catch((err)=>{
  console.log("MongoDB error:", err)
})

// Server start
app.listen(5000,()=>{
 console.log("Server running on port 5000")
})