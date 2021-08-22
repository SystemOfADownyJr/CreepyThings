// import axios from 'axios';

const BASE = 'https://strangers-things.herokuapp.com/api/2105-OKU-RM-WEB-PT/'

export async function getUsers() {

    fetch(`${BASE}posts`)
    .then(response => response.json())
    .then(result => {
      console.log(result);
    })
}

export const handleDelete = async (postIdToDelete) => {
  const response = await fetch(`https://strangers-things.herokuapp.com/posts/${postIdToDelete}`, {
      method: 'DELETE'
  })
  const data = await response.json()
  console.log('data: ', data)
  if (data) {
      const newPosts = posts.filter(post => post.id !== postIdToDelete)
      setPosts(newPosts)
  }
}

// export async function getPostsByUser(userId) {
//   try {
//     const { data } = await axios.get(`${ BASE }/users/${ userId }/posts`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

// export async function getTodosByUser(userId) {
//   try {
//     const { data } = await axios.get(`${ BASE }/users/${ userId }/todos`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }