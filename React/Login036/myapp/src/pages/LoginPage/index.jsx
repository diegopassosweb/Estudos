
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/auth';

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
    <h1 className="title">Sistema de Login</h1>
    <p>{String(authenticated)}</p>
    <form action="" className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={email}
        onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="field">
        <label htmlFor="password">Senha</label>
        <input type="password" name="password" id="password" value={password}
        onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div className="actions">
        <button type="submit">Entrar</button>
      </div>
    </form>
   </div>
  )
}

export default LoginPage