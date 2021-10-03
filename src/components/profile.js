import {react, useEffect, useState }from "react";

import Posts from '../components/Posts';

import Login from "./Login";

import Messages from "./messagesForm";

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [messageState, setMessageState] = useState([]);
    useEffect(async function() {
        try {
            const data = await makeRequest('users/me', 'GET');
            console.log(data.data.messages);
            setProfile(data.data.messages);
            setMessageState(data.data.messages);
        } catch (error) {
            console.error(error);
        }
    }, []);
    async function makeRequest (path, method, data) {
       const token = localStorage.getItem('vb-token');
       console.log(token);
       const defaultHeaders = {
           'Content-Type': 'application/json',
           'Authorization': `${token}`
       }
       if (token) {
           defaultHeaders['Authorization'] = `Bearer ${token}`;
       }
       const options = {
           method,
           headers: defaultHeaders
       }
       if (data) {
           options.body = JSON.stringify(data);
       }
       const response = await fetch(BASE_URL + path, options);
       const responseData = await response.json();
       console.log(responseData);
       return responseData;
    }

    const msgArray = messageState.map((msg)=>
    <div key={`post-id${msg._id}`}>
        <p>{msg.title}</p>
        <p>Username : {msg.fromUser.username}</p>
        <p>From_Post : {msg.post.title}</p>
        <p>Message : {msg.content}</p>
    </div>)
    return (
        <div>
            <h1>Profile</h1>
                {msgArray}
        </div>
    )
    makeRequest();
}
const BASE_URL = 'https://strangers-things.herokuapp.com/api/2105-OKU-RM-WEB-PT/';



export default Profile;
