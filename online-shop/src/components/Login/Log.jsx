import React, { useEffect, useRef, useState } from "react";

const Log = () => {
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
     
      <div className="text-2xl p-6 text-center font-semibold w-full flex flex-col items-center  h-screen">
      {loggedIn ? <h2 className="text-2xl bg-gray-50 p-6 w-full font-semibold m-4"> Welcome, Iuliia </h2> : <h2 className="text-2xl w-full bg-gray-50 p-6 font-semibold">Welcome</h2>}
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col w-1/4 mt-8">
          <label htmlFor="email" className="mt-8">Email</label>
          <input type="email" value={email} name="email" ref={inputRef} onChange={(e) => onChangeEmail(e)} className="border-2 rounded-lg mt-4 p-2 outline-none" />
          <label htmlFor="password" className="mt-8">Password</label>
          <input type="password" value={password} name="password" className="border-2 rounded-lg mt-4 p-2 outline-none" onChange={(e) => onChangePassword(e)} />
          {loggedIn ? <button type="submit" className="border-2 rounded-3xl bg-red-300 mt-8 p-2">Log Out</button> : <button type="submit" className="border-2 rounded-3xl bg-lime-300 mt-8 p-2">Log In</button>}
        </form>
      </div>
  )
}

export default Log;