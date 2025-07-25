import { useNavigate } from "react-router"

const Home = () => {
    const nav = useNavigate()
    return (
        <div>
            <h1>THIS IS THE HOME PAGE</h1>
            <button onClick={()=>{nav("/login")}}>GO LOGIN</button>
        </div>
    )
}

export default Home