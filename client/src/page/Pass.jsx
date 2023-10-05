import { sendPasswordResetEmail } from "firebase/auth";
import React from 'react';
import { auth } from '../firebase';
const Pass = () => {
  const setPassword = ()=>{  
    sendPasswordResetEmail(auth, auth.currentUser.email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}
  return (
    <div>
      <button onClick={setPassword}>Click Me </button>
    </div>
  )
}

export default Pass
