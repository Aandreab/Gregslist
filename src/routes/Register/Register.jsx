import { registerUser } from "../../api";
import { useState } from "react";
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Register({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  console.log(username)
  console.log(password)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const registerInfo = await registerUser(username, password);
    setToken(registerInfo);
    setUsername('')
    setPassword('')
    navigate('/Home')
  }
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Control placeholder='Create Username' value={username} onChange={(event) => setUsername(event.target.value)} />

        <Form.Control type="password" placeholder='Create Password' value={password} onChange={(event) => setPassword(event.target.value)} />
        <Button type="submit">Register Me</Button>
      </Form>
    </main>
  );
}
