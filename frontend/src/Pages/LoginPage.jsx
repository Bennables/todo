import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const LoginPage = () =>{

    /*
        Well, this is the login page
        It has to have a text box for username, password, submit
        link to the registration page

        potentially, Trouble logging in?

    */  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) =>{

        //We use prevent default because submit will reload the page
        e.preventDefault();
        
        axios.post("http://localhost:5008/login", {username, password})
            .then(result =>{
                if (result === "Success"){
                    const navigate = useNavigate();
                    navigate("http://localhost:5008/home")
                }
                else if (result === "Incorrect password"){
                    setPassword("")
                }
                else {
                    setUsername("");
                    setPassword("");
                }
        })
        .catch("Something went wrong" + e)
    }

    return(
        <div>
            <form>
                <input name="username" value = {username} placeholder="Username" onChange={(e) => {setUsername(e.target.value)}}/>
                <input name="password" value = {password} placeholder="Password" onChange={(e)=> {setPassword(e.target.value)}}/>
                <button type='submit' onClick={(e) => {handleSubmit(e)}}>Log In</button>
            </form> 
        </div>
    )
}







export default LoginPage