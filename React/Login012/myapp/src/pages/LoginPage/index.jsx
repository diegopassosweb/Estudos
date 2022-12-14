
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/auth";
import "./styles.css";

const LoginPage = () => {
    const {authenticated, login} = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", {email, password});

        login(email, password);
    }

  return (
    <div id="login">
        <h1 className="title">System Login</h1>
        <p>{String(authenticated)}</p>
        <form action="form" className="form" onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email}
                onChange={e => setEmail(e.target.value)} />
            </div>

            <div className="field">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password}
                onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="actions">
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
  )
};

export default LoginPage;
