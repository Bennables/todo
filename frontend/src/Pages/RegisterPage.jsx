import { useState } from "react"
import axios from 'axios'




const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, username, password)
        axios.post("http://localhost:5008/register", {email, username, password})
        .then(result=> console.log(result))
        .catch(e=>console.log('Something went wrong' + e))
    }
    return (
        <form>
            <input name='email' placeholder="Email" type='email' onChange={(e) => {setEmail(e.target.value)}}/>
            <input name='username' placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}/>
            <input name='password' placholder="Password" placeholder='Password' type="password" onChange={(e) => {setPassword(e.target.value)}}/>
            <button onClick={(e) => handleSubmit(e)}>Register!</button>
        </form>



    )
}

export default RegisterPage