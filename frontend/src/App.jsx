import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import TodoItem from './components/todoItem'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashbord'

function App() {
  const [loggedIn, setloggedIn] = useState(false);

  {/* 
      navbar:
        login
        home
        completed
        add task

      body:
        component of todo items
          mapped out
        drag to rearrange
        triple dots to edit
      

      ON COMPLETION:
        EXPLOSIONS THAT YAYAYYAYAAY

      

      OTHER PAGES:
        edit page
        login page

      
      
      later on
        calendar feature
      
      */}

  return (
    <div className="container">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/dash" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
      {/* <Navbar loggedIn={loggedIn}/>
      <LoginPage/>
      <RegisterPage/> */}
      <p>lkjsdlfjalsdjf;lak</p>
      
    </div>
  )
}

export default App
