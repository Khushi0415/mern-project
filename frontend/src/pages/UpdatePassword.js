import {useState} from "react"
import API from "../api"

function UpdatePassword(){

const [oldPassword,setOld] = useState("")
const [newPassword,setNew] = useState("")

const update = async(e)=>{

e.preventDefault()

await API.put("/update-password",{oldPassword,newPassword})

alert("Password Updated")

}

return(

<div>

<h2>Update Password</h2>

<form onSubmit={update}>

<input placeholder="Old Password" onChange={(e)=>setOld(e.target.value)} />

<input placeholder="New Password" onChange={(e)=>setNew(e.target.value)} />

<button>Update</button>

</form>

</div>

)

}

export default UpdatePassword