import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./actions";
import "./LoginPage.css";
import {useNavigate} from "react-router-dom"

function LoginPage(){
    const [email ,setEmail]=useState("")
    const [password,setPassword] =useState("")

    const dispatch = useDispatch()
    const userLogin = useSelector((state)=>state.userLogin)

    const {userInfo} = userLogin
    const navigate = useNavigate()


    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(email,password)
        dispatch(login(email,password))
    }

    useEffect(()=>{
        if(userInfo){
            alert("loged-in successfully")
            setEmail(()=>"")
            setPassword(()=>"")
            navigate("/posting")
            
        }
    },[userInfo])

    return(
        <div className="L-main">   
            
            <form onSubmit={submitHandler}>
                <div id="btn">
                <p id="message"></p>
                <h2 className="log">Login</h2>
                <input type="text" placeholder="enter email adress" name="email" className="labels" value={email} onChange={((e)=>setEmail(e.target.value))}  />
                <input type="password" placeholder="enter the password" name="password" className="labels" value={password} onChange={((e)=>setPassword(e.target.value))}></input>
                <button type="submit"  id="button">Submit</button>
                </div>
            </form>
        </div>
        
    )
}

export default LoginPage