import {useEffect,useState} from "react"
import API from "../api"
import {useNavigate} from "react-router-dom"
import "../App.css"

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

<div className="container">

<h2>Dashboard</h2>

<div className="card">

<p><b>Name:</b> {user.name}</p>
<p><b>Email:</b> {user.email}</p>
<p><b>Course:</b> {user.course}</p>

</div>

<div className="btn-group">

<button onClick={()=>navigate("/update-password")}>
Update Password
</button>

<button onClick={()=>navigate("/update-course")}>
Update Course
</button>

<button className="logout" onClick={logout}>
Logout
</button>

</div>

</div>

)

}

export default Dashboard