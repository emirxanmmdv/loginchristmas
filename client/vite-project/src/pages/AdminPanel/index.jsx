import React, { useState } from 'react'
import "./index.scss"
import { useEffect } from 'react'

const AdminPanel = () => {
    const [data, setData] = useState([])
    const fetchData = async ()=>{
        const response = await fetch("http://localhost:3000/users");
        const jsonData = await response.json()
        setData(jsonData)                                                                                                                                                                                                                                                                                                          
    }
    useEffect(() => {
        fetchData()
    }, [])
  return (
    <>
    {data && data.map((item)=>(
        <ul key={item._id}>
            <br/>
            <li>user name:{item.userName}</li>       
            <li>role : {item.role}</li>
        </ul>
    ))}
    
    
    </>
  )
}

export default AdminPanel