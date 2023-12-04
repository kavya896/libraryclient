import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getusers } from "./actions";
import "./userPage.css"

function UserPage(){

    const dispatch = useDispatch()

    const allUsers = useSelector((state)=>state.allUsers)
    const {users} = allUsers

    console.log(users)
    

    useEffect(()=>{
        dispatch(getusers())
    },[dispatch])

    return(
        <div id = "u-container">
            <div id="i-container">All Users
            {users?.map((user)=>{
                return(
                    <div id="u-user">
                    <div id="user-email">
                        <p key={user._id}>{user.email}</p>
                    
                    </div>
                    </div>
                )
            })}
        </div>
        
        </div>
        
    )
}

export default UserPage