import "./navbar.css"

const Navbar = (props) =>{
    return (
        // whole component
        <div className="left-sidebar">
            <div className="bar-item">
                <p>Home</p>
            </div>
            <div className="bar-item">
                <p>Completedfdfkjds;alfjsd;lfja;slkdfja;lsdkjf;alskdjf;laskdjf;alsdkfd</p>
            </div>
            <div className="bar-item">
                <p>Add Task</p>
            </div>
            <div className="bar-item">
                {props.loggedIn ? <img src="./assets/emptyProf.jpeg"/>:<p>Login</p>}
            </div>
            

        </div>


        

    )


}

export default Navbar