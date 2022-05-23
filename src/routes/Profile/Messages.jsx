

export default function Messages({ user, token }) {
    console.log(user)
  
    return (
        <div>
            <h3>{user.username}</h3>
        </div>

    );
}
