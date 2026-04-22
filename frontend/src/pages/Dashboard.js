import {useEffect,useState} from "react"
import API from "../api"
import {useNavigate} from "react-router-dom"

function Dashboard(){

const [user,setUser] = useState({})
const navigate = useNavigate()

useEffect(()=>{

API.get("/dashboard")
.then(res=>setUser(res.data))

},[])

const logout=()=>{

localStorage.removeItem("token")

navigate("/login")

}

return(

<div>

<h2>Dashboard</h2>

<p>Name: {user.name}</p>
<p>Email: {user.email}</p>
<p>Course: {user.course}</p>

<button onClick={()=>navigate("/update-password")}>
Update Password
</button>

<button onClick={()=>navigate("/update-course")}>
Update Course
</button>

<button onClick={logout}>Logout</button>

</div>

)

}

export default Dashboard