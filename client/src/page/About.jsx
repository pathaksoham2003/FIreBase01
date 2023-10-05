import { onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
const About = () => {
    const [gmail,setGmail] = useState('')
    const navigate = useNavigate();
    const [about,setAbout] = useState('')
    let id;
    const post = async()=>{
        const response = await fetch("http://localhost:3000/about",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({id,about})
        })
    }
    onAuthStateChanged(auth,async (user)=>{
        if(user){
            console.log("Hello USER")
            console.log(user.uid)
            setGmail(user.email)
            console.log(auth)
            id = await user.uid
        }else{
            navigate('/login')
        }
       })
       const handleChange = (e)=>{
                setAbout(e.target.value)
       }
  return (
    <div>
      <h1>About {gmail}</h1>
      <input type='text' name='about' placeholder='Enter about'  onChange={handleChange} />
      <button onClick={post} >Click Me</button>
      <p>{about}</p>
      <NavLink to='/setPassword'>Go To set Password</NavLink>
    </div>
  )
}

export default About
