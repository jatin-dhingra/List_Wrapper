import React,{useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import Error from "../UI/Error";
function AddUser(props)
{
    const [enterusername,setusername]=useState('');
    const [enterage,setage]=useState('');
    const [error,seterror]=useState()
    const  adduserhandler=(event)=>
    {
        event.preventDefault();
       
        if(enterusername.trim().length===0 || enterage.trim().length===0)
        {
            seterror({
                title:"Invalid Input",
                msg:"Input is empty"
            })
            return;
        }
        if(+enterage<1)
        {
            seterror({
                title:"Invalid Age",
                msg:"Enter Valid age"
            })
            return;
        }
        props.onAddUser(enterusername,enterage);
        //console.log(enterusername,enterage)
        setusername('');
        setage('');
    }
    const usernamehandler=(event)=>{
        setusername(event.target.value);
    }
    const agehandler=(event)=>{
        setage(event.target.value);
    }
    const errorhandler=()=>{
        seterror(null);
    }

    return (
        <div>
            {error && <Error title={error.title} msg={error.msg} onconfirm={errorhandler} ></Error>};
            <Card className={classes.input}>
                <form onSubmit={adduserhandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" value={enterusername} type="text" onChange={usernamehandler}></input>

                    <label htmlFor="age">Age</label>
                    <input id="age" value={enterage} type="number" onChange={agehandler}></input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card> 
        </div>
    );
    
}
export default AddUser;