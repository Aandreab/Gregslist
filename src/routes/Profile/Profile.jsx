
import { Card, Button } from 'react-bootstrap';
import './Profile.css'
import { Link, Outlet } from 'react-router-dom';
import { deletePost,getUser } from '../../api';
import { useEffect } from 'react';

export default function Profile({ user, token,setUser}) {
  const myPosts = user.posts
  console.log(myPosts)
  
  console.log('user.posts', user.posts)
  
  const handleDelete= async(token, _id)=>{
    await deletePost(token, _id);
    userHandler(token)

  }
  const userHandler = async (token) => {
    const userInfo = await getUser(token);
    setUser(userInfo);
  }
 
  return (
    <main className='d-flex flex-column align-items-center'>
      <h1>Profile</h1>
      <div className='d-flex justify-content-center'>
        <div className='my-posts-container'>
        {myPosts && myPosts.map((post, _id) => {
          if (post.active=== true)
            return(
            <Card className='myPosts' key={post._id} value={post}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <p>{post.price}</p>
              <Button variant='outline-secondary' onClick={()=> handleDelete(token, post._id) }>Delete</Button>
            </Card>)
          })}
        </div>
        <div className='messages-container'>
          <Link to="Messages">Messages</Link>
        </div>
      </div>
      <Outlet />
    </main>
  );
}
