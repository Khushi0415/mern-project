import {BrowserRouter,Routes,Route} from "react-router-dom"

import Register from "./pages/Register"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import UpdatePassword from "./pages/UpdatePassword"
import UpdateCourse from "./pages/UpdateCourse"

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Register/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/update-password" element={<UpdatePassword/>}/>
<Route path="/update-course" element={<UpdateCourse/>}/>

</Routes>

</BrowserRouter>

)

}

export default App