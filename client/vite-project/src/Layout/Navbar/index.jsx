import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><NavLink to={"/login"}>LOGIN</NavLink></li>
            <li><NavLink to={"/register"}>REGISTER</NavLink></li>
        </ul>

    </nav>
  )
}

export default Navbar