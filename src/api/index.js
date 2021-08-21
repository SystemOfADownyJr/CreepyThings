// import axios from 'axios';

const BASE = 'https://strangers-things.herokuapp.com/api/2105-OKU-RM-WEB-PT/'

export async function getUsers() {

    fetch(`${BASE}posts`)
    .then(response => response.json())
    .then(result => {
      console.log(result);
    })
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