import React, { useState } from 'react'


function SignUp(){
    const [user,setUser]= useState(null)

    const signUp =() =>{

    }
    return(
        <div className='SignUp'>
            <label>Sign Up</label>
            <input placeholder='First Name' 
            onChange={(event)=>{
                setUser({...user,firstName:event.target.value})
            }} />
             <input placeholder='Last Name'
              onChange={(event)=>{
                setUser({...user,lastName:event.target.value})
            }} />
             <input placeholder='User Name' 
             onChange={(event)=>{
                setUser({...user,userName:event.target.value})
            }} />
             <input placeholder='Password'
             onChange={(event)=>{
                setUser({...user,password:event.target.value})
            }} />
            <button onClick={signUp}>SignUp</button>
        </div>
    )
}
export default SignUp