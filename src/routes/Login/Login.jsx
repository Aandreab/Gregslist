import { useState } from "react";
import { loginUser } from "../../api";
import './Login.css'
import { useNavigate } from "react-router-dom";

export default function Login({ setToken }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  console.log(username)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newToken = await loginUser(username, password);
    setToken(newToken);
    localStorage.setItem('token', newToken);
    setUsername('')
    setPassword('')
    navigate('/Home')
  }
  const handleChange = (event) => {
    setUsername(event.target.value)
  }
  return (

    <form className='loginForm' onSubmit={handleSubmit}>
      <h2>LOGIN</h2>
      <label type='text'>Username:</label>
      <input type='text' name='username' value={username} onChange={handleChange} />
      <label type='text'>Password:</label>
      <input type='password' name='password' value={password} onChange={(event) => setPassword(event.target.value)} />
      <button className='submitButton' type='submit'>Login</button>
    </form>

  );
}
