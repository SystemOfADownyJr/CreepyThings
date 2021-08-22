import React from 'react';
import {Route} from 'react-router-dom'

import {getUsers} from '../api';

import Login from './Login';
import Header from './Header';
import Register from './Register';
// import addPosts from './AddPosts';
// import Posts from './Posts';


getUsers();

const App = () => {
    return (
        <>
                <Header />
            <main>
                <Route path="/" />
                <Route path="/login"><Login /> </Route>
                <Route path="/register"><Register /> </Route>
           </main>
        </>
    )
};



export default App