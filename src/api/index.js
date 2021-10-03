import React from 'react'

import axios from 'axios';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2105-OKU-RM-WEB-PT/'

export async function getUsers() {

    fetch(`${BASE_URL}posts`)
    .then(response => response.json())
    .then(result => {
      return result;
    })
}

export async function getPostsByUser(userId) {
  try {
    const {data} = await axios.get(`${BASE_URL}/users/${userId}/posts`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getTodosByUser(userId) {
  try {
    const {data} = await axios.get(`${BASE_URL}/users/${userId}/todos`);
    return data;
  } catch (error) {
    throw error;
  }
}

