import React, { useContext } from 'react'
import "./index.scss"
import UserContext from '../../context/GlobalContext'
import UserNavbar from '../../Layout/UserNavbar'

const User = () => {
  const { user } = useContext(UserContext) 
  return (
    <>
    <UserNavbar/>
    <h1>{`Xoş gəldin ${user?.userName}!`}</h1>
    </>
  )
}

export default User