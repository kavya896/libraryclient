import React,{useEffect, useState}from "react"
import "./RegisterPage.css"
import { useDispatch, useSelector} from "react-redux"
import { register } from "./actions"
import { Link, useNavigate } from "react-router-dom"
import base64 from 'base-64'

function Register(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [cpassword,setCpassword] = useState("")
    const [image, setImage] =  useState("")  
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userRegister = useSelector((state)=>state.userRegister)

    const {userInfo} = userRegister

    const submitHandler=(e)=>{
        e.preventDefault()
        
        console.log(email,password,cpassword,image)
        
        dispatch(register(email,password,cpassword,image))
     }
    const handleFile =(e)=>{
        const file = e.target.files[0]
        setFiletoBase(file)
        
    }
    const setFiletoBase = (file) =>{
        var Img
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () =>{
            setImage(reader.result)
        }
    
    }

    useEffect(()=>{
        if(userInfo){
            alert("registered successfully")
            setEmail(()=>"")
            setPassword(()=>"")
            setCpassword(()=>"")
            navigate("/login")
        }
    },[userInfo])

    
    return(
        
        
        <div className="Register-container">
         <form onSubmit={submitHandler} >
                <div id="btn">
                <p id="message"></p>
            
                <h2 className="reg">Register</h2>
                <input type="text" placeholder="enter email adress" name="email" className="labels" value={email} onChange={((e)=>setEmail(e.target.value))}/>
                <input type="password" placeholder="enter the password" name="password" className="labels" value={password} onChange={((e)=>setPassword(e.target.value))}></input>
                <input type="password" placeholder="confirm password" name="cpassword" className="labels" value={cpassword} onChange={((e)=>setCpassword(e.target.value))}></input> 
                <input type="file" className="file-labels" name="file"  onChange={handleFile}></input>
                <button type="submit" id="button">Submit</button>
                <Link to="/users">   
                <button id="user">All Users</button> 
                </Link> 
                </div>

            </form>
        </div>
        

    )
}

export default Register