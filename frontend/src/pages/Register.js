import "./App.css"
import {useState} from "react"
import API from "../api"

function Register(){

const [form,setForm] = useState({
 name:"",
 email:"",
 password:"",
 course:""
})

const handleChange=(e)=>{
 setForm({...form,[e.target.name]:e.target.value})
}

const submit=async(e)=>{

 e.preventDefault()

 await API.post("/register",form)

 alert("Registered")

}

return(

<div>

<h2>Register</h2>

<form onSubmit={submit}>

<input name="name" placeholder="Name" onChange={handleChange}/>
<input name="email" placeholder="Email" onChange={handleChange}/>
<input name="password" placeholder="Password" onChange={handleChange}/>
<input name="course" placeholder="Course" onChange={handleChange}/>

<button>Register</button>

</form>

</div>

)

}

export default Register