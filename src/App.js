import React,{useState} from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import HomePage from "./components/HomePage"
import LoginPage from "./components/LoginPage";
import Post from "./components/Post";
import Register from "./components/RegisterPage";
import CreateNote from "./components/CreateNote";
import UserPage from "./components/UsersPage";
import Update from "./components/Update"
// import SingleNote from "./components/SingleNote";

function App() {
  
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path="/"  element={<HomePage/>} ></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/users" element={<UserPage/>} ></Route>
        <Route path="/posting" element={<Post />}></Route>
        <Route path="/createNote" element={<CreateNote/>} ></Route>
        <Route path="/note/:id" element={<Update/>}></Route>
        {/*<Route path="/note/:id" element={<SingleNote/>} ></Route> */}
      </Routes>

   </BrowserRouter>
   
    </>
  );
}

export default App;
