export const BASE_URL = 'https://strangers-things.herokuapp.com/api/2248-ftb-pt-web-pt';

export const getPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`)
    const { data: { posts } } = await response.json();
    //console.log(posts)
    return posts;
  } catch (err) {
    console.error(err);
  }
}


export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username,
            password
          }
        })
      })

    const { data: { token } } = await response.json();
    //console.log(token)
    return token
  }
  catch (err) {
    console.error(err);
  }

}


export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username,
            password
          }
        })
      })

    const { data: { token } } = await response.json();
    //console.log(token)
    return token
  }
  catch (err) {
    console.error(err);
  }

}

export const addPost = async (token, title, description, price) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price
          }
        })

      })
    const { data: { post } } = await response.json();
    return post
  }

  catch (err) {
    console.error(err);
  }
}

export const getUser = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
    )
    const { data: userStuff } = await response.json();
    return userStuff
  } catch (err) {
    console.error(err);
  }
}

export const deletePost = async (token, _id) => {

  try {
    const response = await fetch(`${BASE_URL}/posts/${_id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }
    )
    const data = await response.json();
    return data

  } catch (err) {
    console.error(err);

  }
}