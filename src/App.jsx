import { Routes, Route, NavLink } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  const [isLogin, setisLogin] = useState(false)

  function changeState(){
    setisLogin(prev=>!prev)
  }
  

  return (
    <>
      <Navbar isLogin={isLogin} func={changeState} />
      <Routes>

      </Routes>
    </>
  )
}

export default App
