import React, { useEffect, useRef, useState } from "react";
import { Header, Footer } from "../components";

const Login = () => {
  const inputRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
  }, [email]);

 useEffect(() => {
    if (loggedIn) {
      localStorage.setItem('userLogin', JSON.stringify({ email, password, name: "Iuliia", loggedIn: true }));
    } else {
      localStorage.removeItem('userLogin');
    }
  }, [loggedIn, email, password]);



  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "iuliia@gmail.com" && password === '12345') {
      if (loggedIn) {
        setLoggedIn(false);
        setEmail('');
        setPassword('');
      } else {
        setLoggedIn(true);
      }
    } else return alert('Email or password are wrong');
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  
  return (
    <div>
      <Header />
      {loggedIn ? <h2> Welcome, Iuliia </h2> : <h2>Welcome</h2>}
      <div className="m-10">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="email">Email</label>
          <input type="email" value={email} name="email" ref={inputRef} onChange={(e) => onChangeEmail(e)} className="border-2" />
          <label htmlFor="password">Password</label>
          <input type="password" value={password} name="password" className="border-2" onChange={(e) => onChangePassword(e)} />
          {loggedIn ? <button type="submit" className="border-2 bg-rose-500 m-4 p-2">Log Out</button> : <button type="submit" className="border-2 bg-rose-500 m-4 p-2">Log In</button>}
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login;