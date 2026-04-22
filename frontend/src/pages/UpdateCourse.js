import {useState} from "react"
import API from "../api"

function UpdateCourse(){

const [course,setCourse] = useState("")

const update = async(e)=>{

e.preventDefault()

await API.put("/update-course",{course})

alert("Course Updated")

}

return(

<div>

<h2>Update Course</h2>

<form onSubmit={update}>

<input placeholder="New Course" onChange={(e)=>setCourse(e.target.value)} />

<button>Update</button>

</form>

</div>

)

}

export default UpdateCourse