import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import AdminPanel from './pages/AdminPanel'
import HomePage from './pages/HomePage'
import Navbar from './Layout/Navbar'
import User from './pages/User'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/adminpanel' element={<AdminPanel/>} />
      <Route path='/user' element={<User/>} />
    </Routes>
      
    </>
  )
}

export default App
