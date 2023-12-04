import React, { useEffect, useState } from "react"
import "./Post.css"
import {useNavigate,Link, useParams} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getNotes,deletenote } from "./actions"


function Post(){
    
    const [search,setSearch]=useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const userList = useSelector((state)=>state.userList)
    const {notes} = userList
    console.log(notes)
    const info =JSON.parse(localStorage.getItem("userInfo"))
    const mailId = info.data.success.email
    const image = info.data.success.image

    
    
    const noteDelete = useSelector((state)=>state.noteDelete)
    const {success} = noteDelete
    
    const logoutHandler = (e) =>{
        localStorage.removeItem("userInfo")
        localStorage.clear()
        navigate("/")
        window.location.reload()
    }


    const deleteHandler = (id) =>{
        dispatch(deletenote(id))
    }
    
    useEffect(()=>{
        dispatch(getNotes())
        if(success){
            alert("are you sure?")
        }
    },[dispatch, success])


    return(
        <div id="main">
        <div id="image">
        <img src={image} id="i-settings" alt="image not found" ></img>
        <h1 id="p-header">Welcome {mailId}...</h1>
        </div>
           <div id="p-buttons" >
            <Link to="/createNote">
            <button id="createBtn" className="p-btn" >Create</button>
            </Link>
            <button onClick={logoutHandler} id="p-logout" className="p-btn">log-out</button>
            
            <input type="text" className="p-btn" placeholder="search using title" onChange={((e)=>setSearch(e.target.value))}  ></input>
            </div >
                <div id="p-n">
                <div id="p-notes" >
                    {notes && notes.filter((note)=>{
                        if(search === ""){
                            return note
                        }else if(note.title.toLowerCase().includes(search.toLowerCase())){
                            return note
                        }
                    }).map((note)=>{
                        return(
                            <div id="s-eachItem" key={note._id}>
                                <p id="p-title" >Title : {note.title}</p>
                                <p>{note.content}</p>
                                <a href={`/note/${note._id}`}>
                                <button id="p-b" className="p-ub">update</button>
                                </a>
                                <button id="p-b" className="p-nb" onClick={()=>deleteHandler(note._id)}>delete</button>
                            
                            </div>
                        )
                    })}



                </div> 
                </div>
           </div>   
    )
}

export default Post