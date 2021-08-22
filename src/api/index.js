// import axios from 'axios';

const BASE = 'https://strangers-things.herokuapp.com/api/2105-OKU-RM-WEB-PT/'

export async function getUsers() {

    fetch(`${BASE}posts`)
    .then(response => response.json())
    .then(result => {
      console.log(result);
    })
}