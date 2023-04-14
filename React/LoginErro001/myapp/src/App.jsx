import { useState } from 'react'



import './App.css'
import { login } from './untils';

export default function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [error, setError] = useState(null);
  const [request, setRequesting] = useState(false);

  const handleEmail = (e) => {
    const value = e.target.value

    setEmail(value);
  }

  const handlePassword = (e) => {
    const value = e.target.value;

    setPassowrd(value);
  }

    const handleSubmit = () => {
      console.log("submited");

      setError(null);
      setRequesting(true);

      let values = {email: email, password: password};
      login(values)
      .then(() => {
        alert("Login with sucess")
      })

      .catch((error) => {
        console.log(error)
        setError(error);
      }).finally(() => {
        setRequesting(false);
      });
  }
  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        { error && <div className='errorMessage'>{error.message}</div>}
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input id={'email'} type={'email'} autoComplete='off' value={email}
         onChange={handleEmail}/>
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input id={'password'} type={'password'} value={password}
          onChange={handlePassword} />
        </div>

        <div className='button'>
          <button disabled={email === '' || password.length < 4 || request} onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}