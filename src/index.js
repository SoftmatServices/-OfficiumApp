import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/css/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../src/Components/vendor/font-awesome-4.7/css/font-awesome.min.css';
import '../src/Components/vendor/font-awesome-5/css/fontawesome-all.min.css';


//import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
