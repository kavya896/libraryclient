import axios from "axios"
import { REGISTER_SUCCESS, LOGIN_SUCCESS, NOTE_CREATED_SUCCESS, NOTE_LIST_SUCCESS, ALL_USERSLIST_SUCCESS, REMOVE_NOTE_SUCCESS, SINGLE_NOTE_SUCCESS, UPDATE_NOTE_SUCCESS } from "./constants"


export const register = (email,password,cpassword,image) => async(dispatch)=>{
    try{
        
        const config={
            headers:{
                "Content-type":"application/json",
                
            }
        } 
        
        
        const result = await axios.post("/register",{email,password,cpassword,image},config)
        
    
        if(result){
            if(result.data.message){
                    document.getElementById("message").innerHTML=result.data.message
        
                } else if(result.data.error){
                    document.getElementById("message").innerHTML=result.data.error 
                } else if(result.data.success){
                    console.log(result)
                    dispatch({type:REGISTER_SUCCESS,payload:result})
                    localStorage.setItem("userInfo",JSON.stringify(result))
                
                }else{
                    document.getElementById("message").innerHTML="check again something went wrong"
                }
    }
    
    
    }catch(err){
        console.log(err)
    }
}

export const login = (email,password)=>async(dispatch)=>{
    try{
        const config ={
            headers:{
                "Content-type":"application/json",
            }
        }
        console.log("entered")
        const  result  = await axios.post("/login",{email,password},config)
        if(result){
            if(result.data.message){
                document.getElementById("message").innerHTML = result.data.message
            }else if(result.data.success){
                console.log(result)
                dispatch({type:LOGIN_SUCCESS,payload:result})
                localStorage.setItem("userInfo",JSON.stringify(result))
        
            }else{
                document.getElementById("message").innerHTML = "check the entered"
            }
        }
       
    }catch(err){
        console.log(err)
    }
}

export const getusers=()=>async(dispatch)=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        }
        const {data}= await axios.get("/users",config)
        console.log("users data from actions", data)
        dispatch({type:ALL_USERSLIST_SUCCESS,payload:data})
    }catch(err){
        console.log(err)
    }
}

export const createNotes = (title,content)=>async(dispatch)=>{
    try{
        console.log("entered")
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))
        const token = userInfo.data.success.token
        console.log(`Bearer ${token}`)
    
        const config={
            headers:{
                "Content-type":"application/json",
                Authorization: `Bearer ${token}`,
            }
        }
        console.log("created Note")
        const data = await axios.post("/note/create",{title,content},config)
        console.log(data) 
        dispatch({type:NOTE_CREATED_SUCCESS,payload:data})
        
    }catch(err){
        console.log(err)
    }
}

export const getNotes = ()=>async(dispatch)=>{
    try{
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))
        console.log(userInfo) 
        const token = userInfo.data.success.token

        const config={
            headers:{
                "Content-type":"application/json",
                Authorization: `Bearer ${token}`
            }
        }

        const {data} = await axios.get("/note",config)
        console.log("data from actions",data)
        dispatch({type:NOTE_LIST_SUCCESS,payload:data})

    }catch(err){
        console.log(err)
    }
}
export const particularNote = (id)=>async(dispatch)=>{
    try{
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))
        const token = userInfo.data.success.token
        console.log(".............",token)
        const config = {
            headers:{
                "Content-type":"application/json",
                Authorization:`Bearer ${token}`
            }
        }
        const { data } = await axios.get(`/note/${id}`,config)
        console.log("...................",data)
        dispatch({type:SINGLE_NOTE_SUCCESS,payload:data})
        localStorage.setItem("updateNote",JSON.stringify(data))
  
    }catch(err){
        console.log(err)
    }
}

export const deletenote = (id)=>async(dispatch)=>{
    try{
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))
        const token = userInfo.data.success.token

        const config = {
            headers:{
                "Content-type":"application/json",
                Authorization : `Bearer ${token}` 
            }
        }
        const data = await axios.delete(`/note/delete/${id}`,config)
        console.log("deletedOne",data)
        dispatch({type:REMOVE_NOTE_SUCCESS,payload:data})
    }catch(err){
        console.log(err)
    }
}

export const updatenote = (id,title,content) =>async(dispatch)=>{
    try{
        console.log(".......................update")
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))
        const token = userInfo.data.success.token

        const config={
            headers:{
                "Content-type":"application/json",
                Authorization : `Bearer ${token}` 

            }
        }
        const {data} = await axios.post(`/note/update/${id}`,{title,content},config)
        console.log(data)
        dispatch({type:UPDATE_NOTE_SUCCESS,payload:data})

    }catch(err){
        console.log(err)
    }
}