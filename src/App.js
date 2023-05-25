import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Secret } from './pages/Secret'
import { Pago } from './pages/Pago'
import "react-toastify/dist/ReactToastify.css"
import { Perfil } from './pages/Perfil'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Secret />} />
        <Route exact path="/pago" element={<Pago />} />
        <Route exact path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  )
}
