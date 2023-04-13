import React,{useState} from 'react';
import AddUser from './Components/Users/AddUser';
import Userlist from './Components/Users/Userlist';
function App() {
  const [userlist,setuserlist]=useState([]);

  const adduserhandler=(uname,uage)=>{
    setuserlist((prevuserlist)=>{

      return [...prevuserlist,{name:uname,age:uage,id:Math.random.toString()}];
    })
  }
  return (
    <div>
      <h1 style={{textAlign:"center",color:"white"}}>List Wrapper</h1>
      <AddUser onAddUser={adduserhandler}></AddUser>
      <Userlist users={userlist}></Userlist>
    </div>
  );
}

export default App;
