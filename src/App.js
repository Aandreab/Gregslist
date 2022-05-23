import './App.css';
import { images } from '../src/constants'
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Register from './routes/Register/Register';
import Login from "./routes/Login/Login";
import Home from "./routes/Home/Home";
import Posts from "./routes/Posts/Posts";
import Profile from "./routes/Profile/Profile";
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'
import { getUser } from './api';
import Messages from './routes/Profile/Messages';


function App() {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
    }
  }, [])

  const userHandler = async (token) => {
    const userInfo = await getUser(token);
    setUser(userInfo);
  }

  useEffect(() => {
    if (token) {
      userHandler(token);
    }
  }, [token])
  //console.log(token);

  return (
    <div className="App">
      <div className="logo">
        <img className='main-logo' src={images.logo} alt='hi' />
      </div>

      <nav className="main-nav">
        {!token ? <Link to="/Register">Register</Link> : null} {" "}
        {!token ? <Link to="/Login">Login</Link> : null} {" "}
        <Link to="/Home">Home</Link> {" "}
        <Link to="/Posts">Posts</Link> {" "}
        {token ? <Link to="/Profile">Profile</Link> : null}
        {token ? <Button onClick={() => {
          setToken('')
          localStorage.removeItem('token')

        }}>Logout</Button> : null}
      </nav>

      <Routes>
        <Route path="Register" element={<Register setToken={setToken} />} />
        <Route path="Login" element={<Login setToken={setToken} />} />
        <Route path="Home" element={<Home />} />
        <Route path="Posts" element={<Posts user={user} token={token} setUser={setUser} />} >
        </Route>
        <Route path="Profile" element={<Profile user={user} setUser={setUser} token={token} />}>
          <Route path="messages" element={<Messages user={user} token={token} />} />
        </Route>
        <Route
          path="*"
          element=
            {<Home />}
          
        />
      </Routes>
      <Outlet />
      <footer class="fixed-footer">
      © Copyright 2022 Gregslist. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
