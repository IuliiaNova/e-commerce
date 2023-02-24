import React, { useRef, useState} from "react";
import { Header, Footer } from "../components";

function Login() {
    const inputRef = useRef('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(inputRef)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);

        if(email === "iuliia@gmail.com" && password === '12345'){
            return <p>Welcome, Iuliia</p>
        }
    }

    const onChangeEmail = (e) => {
        console.log(e.target.value)
    }

    return (
        <div>
            <Header />
            <h2>Welcome</h2>
            <div className="m-10">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label for="email">Email</label>
                <input type="email" value={email} name="email" ref={inputRef} onChange={(e) =>onChangeEmail(e)} 
                className="border-2"/>
                <label for="password">Password</label>
                <input type="password" value={password}  name="password" className="border-2"/>
                <button type="submit" className="border-2 bg-rose-500 m-4 p-2">Login</button>
            </form>
            </div>
            <Footer />
        </div>
    )
}

export default Login;