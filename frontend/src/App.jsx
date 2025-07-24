import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar'
import TodoItem from '../components/todoItem'

function App() {
  const [loggedIn, setloggedIn] = useState(false);

  return (
    <div className="container">
      <Navbar loggedIn={loggedIn}/>
      <TodoItem></TodoItem>
      <p>lkjsdlfjalsdjf;lak</p>
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
    </div>
  )
}

export default App
