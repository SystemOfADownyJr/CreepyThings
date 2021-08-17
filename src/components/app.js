import React from 'react';


import Login from './Login';
import Header from './Header';
import addPosts from './AddPosts';
import Posts from './Posts';
import searchForm from './searchForm';


const App = () => {
    return (
        <>
                <Header />
            <main>
                <Route path="/" />
                <newPostForm />
                <postForm />
                <searchForm />
            </main>
        </>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));