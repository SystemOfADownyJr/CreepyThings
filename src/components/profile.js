import react from "react";

import {Posts} from '../components/Posts';

import Login from "./Login";

const Profile = () => {
    return (
        <div>
            <h1>Profile</h1>
        </div>
     )
}
const BASE_URL = 'http://localhost:3001';

 
     async function makeRequest (path, method, data) {
        const token = localStorage.getItem('vb-token');
        const defaultHeaders = {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
        if (token) {
            defaultHeaders['authorization'] = `Bearer ${token}`;
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
        return responseData;
    }
    
    useEffect(async function() {
        try {
            const data = await API.makeRequest('/profile', 'GET');
            setProfile(data);
        } catch (error) {
            console.error(error);
        }
    }, []);

export default Profile;
