/* eslint-disable no-unused-vars */
import {createSlice} from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
        AddUser(state,actions){
            state.push(actions.payload)
        }
        ,
        RemoveUser(state,actions){
            console.log(`removed ${state[actions.payload]}`);
            state.splice(actions.payload,1)

        },
        RemoveAll(state,actions){
            return state=[]
        }
    }
})


export default userSlice.reducer;
export const {AddUser,RemoveUser,RemoveAll} = userSlice.actions; 