import React, { useState } from 'react'


function Login(){
    const [userName,setUserName]= useState("")
    const[password,setPassword]= useState("")

    const login =() =>{

    }

    return(
         <div className='Login'>
        <label>Login</label>
       
         <input placeholder='User Name' 
         onChange={(event)=>{
            setUserName(event.target.value)
        }} />
         <input placeholder='Password'
         type={password}
         onChange={(event)=>{
            setPassword(event.target.value)
        }} />
        <button onClick={login}>Login</button>
        
        </div>
    )
}
export default Login