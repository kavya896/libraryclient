import React, { useEffect, useState } from "react";
import "./CreateNote.css"
import { useDispatch, useSelector } from "react-redux";
import {createNotes} from "./actions"
import { useNavigate } from "react-router-dom";


function CreateNote(){

    const [title,setTitle]= useState("")
    const [content,setContent] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userNote = useSelector((state)=>state.userNote)
    const {createNote} = userNote

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(title,content)
        dispatch(createNotes(title,content))
        
    }

    

    useEffect(()=>{
        if(createNote){
            alert("created note successfully")
            setTitle(()=>"")
            setContent(()=>"")
            navigate("/posting")
            // window.location.reload()

        }
    },[createNote])

    return(
        <div className="c-container">

            <div >
                <form onSubmit={submitHandler}>
                    <div id="l-container">
                    <h1 id="note">Create Note</h1>
                    <input type="text" id="forInput" placeholder="title"  value={title} onChange={((e)=>setTitle(e.target.value))} />
                    <textarea id="forArea" placeholder="Content"  value={content} onChange={((e)=>setContent(e.target.value))} />
                    <button type="submit" id="c-btn">submit</button>
                    </div>
                </form>
            
            </div>
        
        </div>
    )
}

export default CreateNote