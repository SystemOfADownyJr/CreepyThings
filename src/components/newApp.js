import React, { useEffect, useState } from 'react';
import {
    Route,
    Switch
} from 'react-router-dom'

import {getUsers} from '../api';

import Login from './Login';
import Header from './Header';
import addPosts from './addPosts';
import Posts from './Posts';

import '../style/style.css';


getUsers();

const App = () => {
    return (
        <>
                <Header />
            <main>
                {/* <Route path="/" />
                <Route path="/login"><Login /> </Route> */}
                {/* <newPostForm />
                <postForm />
                <searchForm /> */}
                <Posts />
            </main>
        </>
    )
};



export default App