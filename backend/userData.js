import mongoose from 'mongoose'


const loginSchema = mongoose.Schema({
    "email": String,
    "username": String,
    "password": String

})



const Login = mongoose.model('Login', loginSchema)


export default Login;