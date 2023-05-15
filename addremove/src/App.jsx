/* eslint-disable no-unused-vars */
import fakename from "../../userTable/src/api";
import Items from "./components/items.jsx"
import {useSelector, useDispatch} from "react-redux"
import { AddUser,RemoveUser,RemoveAll } from "./store/slices/userslice";




function App() {
  const data=useSelector((state)=>{
    return state.users;
  })
  const dispatch=useDispatch();
  function addnewuser(payload){
    dispatch(AddUser(payload))
    // console.log(data);
    
  }
  function rem(payload){
    dispatch(RemoveUser(payload))
    // console.log("remove user called from main");
  }
  function removeall(){
    dispatch(RemoveAll())
  }
  return <>
  <h1>lukmaan</h1>
  <button onClick={()=>{addnewuser(fakename())}}>addNewUser</button>
  <button onClick={()=>{removeall()}} >Remove all</button>
  {
    data.map((value,index)=>{
      return  <Items on={()=>{rem(index)}} key={index} item={value}  /> 
    })
  }
  </>
  
}

export {App}