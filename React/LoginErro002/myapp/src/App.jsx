import { useState } from 'react'
import { login } from './utils'
import './App.css'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [requesting, setRequesting] = useState(false)

  const handleEmail = (e) => {
    const value = e.target.value;
    
    setEmail(value)
  }

  const handlePassword = (e) => {
    const value = e.target.value;
    
    setPassword(value)
  }

  const handleSubmit = () => {
    console.log('submited')

    setError(null);
    setRequesting(true);

    let values = {email: email, password: password}
    login(values).then(() => {
      alert('login efetuado com sucesso')
      console.log('sucesso')
    }).catch((error) => {
  
      console.log(error)
      setError(error)
    }).finally(() => {
      setRequesting(false)
    })
  }

  return (
    <>
       <div className="wrapper">
        <div className="login-form">
          <h1>Login Form</h1>
          {error && <div className="errorMessage">{error.message}</div> }
          <div className="row">
            <label htmlFor="email" className="email">Email</label>
            <input type="email" name="email" id="email" autoComplete='off'
            value={email} onChange={handleEmail} />
          </div>
          <div className="row">
            <label htmlFor="password" className="password">Password</label>
            <input type="password" name="password" id="password"
            value={password} onChange={handlePassword} />
          </div>

          <div className="button">
            <button disabled={email === "" || password.length < 6 || requesting}
             onClick={handleSubmit}>Login</button>
          </div>
        </div>
       </div>
    </>
  )
}

