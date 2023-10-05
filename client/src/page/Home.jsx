import { onAuthStateChanged, signOut } from "firebase/auth";
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
 
const Home = () => {
    const navigate = useNavigate();
    
    onAuthStateChanged(auth,async (user)=>{
        if(user){
            console.log(user)
            console.log("Hello USER")
            const token = await user.getIdToken()
            localStorage.setItem("token",token)
            console.log(auth)
            
        }else{
            navigate('/login')
        }
       })
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/signup");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }
   
    return(
        <>
            <nav>
                <p>
                    Welcome Home
                </p>
 
                <div>
        			<button onClick={handleLogout}>
                        Logout
                    </button>
        		</div>
                <NavLink to='/about'>gO TO ABOUT</NavLink>
            </nav>
        </>
    )
}
 
export default Home;