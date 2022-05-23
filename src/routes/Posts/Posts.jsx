import { useEffect, useState } from "react";
import { getPosts, addPost, getUser } from "../../api";
import './Posts.css'
import Messagemodal from "../Messages/Messagemodal";
import Form from 'react-bootstrap/Form'
import { Button, Card, FloatingLabel, Modal } from "react-bootstrap";

export default function Posts({ token, user, setUser }) {

    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [show, setShow] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');
    const filteredPosts = posts.filter(({ description, title }) => {
        return description.toLowerCase().includes(searchTerm.toLowerCase()) || title.toLowerCase().includes(searchTerm.toLowerCase())
    })
    const postsHandler = async () => {
        try {
            const newPosts = await getPosts();
            setPosts(newPosts)
        } catch (err) {
            console.error(err);
        }
    }
    const userHandler = async (token) => {
        const userInfo = await getUser(token);
        setUser(userInfo);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = await addPost(token, title, description, price);
        console.log(newPost)
        setPosts([...posts, newPost])
        setTitle('');
        setDescription('');
        setPrice('');
        userHandler(token)
        setSearchTerm('');


    }
    useEffect(() => {
        postsHandler();
    }, [])
    return (
        <main>
            <h1 className="post-title">Posts</h1>

            <div className="createPostContainer">
                {token ? <Form className=" gap-2 createNewPost">
                    <FloatingLabel>Create New Post</FloatingLabel>
                    <Form.Control placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <Form.Control placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <Form.Control placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <Button onClick={handleSubmit} type="submit">Add Post</Button>
                </Form> : null}
            </div >
            <div className="search-container">
            <Form className=" gap-2 searchTerm">
                <Form.Control placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <Button variant='outline-secondary'>Search</Button>
            </Form>
            </div>
            {filteredPosts && filteredPosts.map((post, idx) => {
                return (
                    <div className="cardContainer" key={idx} value={post}>
                        <Card className='single-post'>
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                            <p>{post.price}</p>
                            {token ?<Button variant='outline-secondary' onClick={(setSearchTerm) => { setShow(true) }}>Message Seller</Button>: null}
                        </Card>
                    </div>
                )
            })}
            {token ?<Messagemodal
                show={show}
                onHide={() => setShow(false)}
            />: null}
        </main>
    );
}