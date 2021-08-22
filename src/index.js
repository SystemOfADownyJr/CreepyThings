import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

import handleDelete from '../index.js'

import App from './components/app';


<button type="button" className="btn btn-outline-danger"
onClick={() => handleDelete(post.id)}>Delete</button>

ReactDom.render(<Router><App /></Router>, document.getElementById('root'));

