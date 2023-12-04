import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk";
import {composeWithDevTools } from "redux-devtools-extension"
import { createNoteReducer, loginReducer, registerReducer, getNotesReducer, getusersReducer, noteDeleteReducer, singleNoteReducer, noteUpdateReducer } from "./reducers";


const reducer = combineReducers({
    userRegister:registerReducer,
    userLogin:loginReducer,
    allUsers:getusersReducer,
    userNote:createNoteReducer,
    userList:getNotesReducer,
  
    noteDelete:noteDeleteReducer,
    single:singleNoteReducer,
    updated:noteUpdateReducer,
})

const initialState={}

const middleware = [thunk]

const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;