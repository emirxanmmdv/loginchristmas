import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Main from './Layout/Main'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Main/>}>
      <Route path='/register' element={<Register/>}>
      </Route>
      <Route path='/login' element={<Login/>}>
        
      </Route>
      
      
      </Route>
    </Routes>
      
    </>
  )
}

export default App
