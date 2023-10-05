import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import React, { useEffect, useState } from "react";
// login -> token -> localStorage -> GetRequest -> setState()
function App() {
  const initialtoken = localStorage.getItem("access-token");
  const [token, setToken] = useState(initialtoken);
  const [profile, setProfile] = useState({
    id: "",
    email: "",
    name: "",
  });
  console.log(profile);
  const login = useGoogleLogin({
    onSuccess: (response) => handleSuccess(response.access_token),
    onError: (error) => console.log("Login Failed:", error),
  });
  const getData = () => {
    if (token) {
      localStorage.setItem("access-token", token);
      fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then(async (res) => {
          const data = await res.json();
          console.log(data);
          const { id, email, name } = data;
          setProfile({ id, email, name });
        })
        .catch((err) => console.log(err));
    }
  }
  const handleSuccess = async (token) => {
    if (token) {
      localStorage.setItem("access-token", token);
      fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then(async (res) => {
          const data = await res.json();
          const { id, email, name } = data;
          setProfile({ id, email, name });
          postData({ id: id, name: name, email: email });
        })
        .catch((err) => console.log(err));
    }
  };
  const postData = async (obj) => {
    const response = await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    console.log(response.ok);
  };

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setToken("");
    setProfile({id:"",name:"",email:""})
    localStorage.clear();
  };

  useEffect(() => {
    if(token===null){
      setToken(token); 
    }else{
      getData(token); 
    }
  }, []);

  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      {profile.id === "" ? (
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
      ) : (
        <div>
          <img src={profile.picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      )}
    </div>
  );
}
export default App;
