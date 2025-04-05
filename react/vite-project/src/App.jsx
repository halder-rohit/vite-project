import { useState } from 'react'
import reactLogo from './Pages/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignIn } from './Pages/Signin'
import { Login } from './Pages/login'
import { Home } from './Pages/Home'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
