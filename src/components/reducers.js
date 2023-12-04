import { REGISTER_SUCCESS,REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, NOTE_CREATED_SUCCESS, NOTE_CREATED_FAIL, NOTE_LIST_SUCCESS, NOTE_LIST_FAIL, ALL_USERSLIST_FAIL, ALL_USERSLIST_SUCCESS, REMOVE_NOTE_SUCCESS, REMOVE_NOTE_FAIL, SINGLE_NOTE_SUCCESS, SINGLE_NOTE_FAIL, UPDATE_NOTE_SUCCESS, UPDATE_NOTE_FAIL } from "./constants";

export const registerReducer = (state={},action)=>{
    switch(action.type){
        case REGISTER_SUCCESS:
            return{userInfo:action.payload}
        case REGISTER_FAIL:
            return{userInfo:action.payload}
        default:
            return state;
    }
}

export const loginReducer = (state={},action)=>{
    switch(action.type){
        case LOGIN_SUCCESS:
            return {userInfo:action.payload}
        case LOGIN_FAIL:
            return {userInfo:action.payload}
            default:
                return state;
    }

}

export const getusersReducer=(state={},action)=>{
    switch(action.type){
        case ALL_USERSLIST_SUCCESS:
            return {users:action.payload}
        case ALL_USERSLIST_FAIL:
            return { users:action.payload }
        default:
            return state
    }
}

export const createNoteReducer = (state={},action)=>{
    switch(action.type){
        case NOTE_CREATED_SUCCESS:
            return {createNote:action.payload}
        case NOTE_CREATED_FAIL:
            return {createNote:action.payload}
        default:
            return state;
    }
}

export const getNotesReducer = (state={},action)=>{
    switch(action.type){
        case NOTE_LIST_SUCCESS:
            return {notes:action.payload}
        case NOTE_LIST_FAIL:
            return {notes:action.payload}
        default:
            return state
        
    }
}

export const singleNoteReducer = (state={},action)=>{
    switch(action.type){
        case SINGLE_NOTE_SUCCESS:
            return {note:action.payload}
        case SINGLE_NOTE_FAIL:
            return {note:action.payload}
        default:
            return state
    }
}

export const noteDeleteReducer = (state={},action)=>{
    switch(action.type){
        case REMOVE_NOTE_SUCCESS:
            return {success:action.payload}
        case REMOVE_NOTE_FAIL:
            return {error:action.payload}
        default:
            return state
    }
}

export const noteUpdateReducer = (state={},action)=>{
    switch(action.type){
        case UPDATE_NOTE_SUCCESS:
            return {update:action.payload}
        case UPDATE_NOTE_FAIL:
            return {update:action.payload}
        default:
            return state
    }
}