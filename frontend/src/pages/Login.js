import {useState} from "react"
import API from "../api"
import {useNavigate} from "react-router-dom"
import "../App.css"

function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const navigate = useNavigate()

const submit = async(e)=>{

 e.preventDefault()

 const res = await API.post("/login",{email,password})

 localStorage.setItem("token",res.data.token)

 alert("Login Successful")

 navigate("/dashboard")

}

return(

<div className="container">

<h2>Login</h2>

<form onSubmit={submit}>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button type="submit">Login</button>

</form>

</div>

)

}

export default Login