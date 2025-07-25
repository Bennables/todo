import mongoose from 'mongoose'


const loginSchema = mongoose.Schema({
    "Name": String,
    "Email": String,
    "Password": String

})



const Login = mongoose.model('Login', loginSchema)


export default Login;