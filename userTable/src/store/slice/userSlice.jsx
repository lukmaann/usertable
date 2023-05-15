/* eslint-disable no-unused-vars */
import {createSlice} from "@reduxjs/toolkit";

const userSlice= createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,actions){
            state.push(actions.payload)
            // console.log(actions.payload)
        },
        removeUser(state,actions){
            return state.filter((value,index)=>{
                return index!=actions.payload;
            })
        
        },
        deleteAllUsers(state,actions){}
        
    }
   
})
console.log(userSlice.actions)

export  default userSlice.reducer
export const {addUser,removeUser}=userSlice.actions;