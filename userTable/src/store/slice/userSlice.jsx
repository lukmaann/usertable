/* eslint-disable no-unused-vars */
import {createSlice} from "@reduxjs/toolkit";

const userSlice= createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,actions){
            state.push(actions.payload)
        },
        removeUser(state,actions){},
        deleteAllUsers(state,actions){}
        
    }
   
})
console.log(userSlice.actions)

export  default userSlice.reducer