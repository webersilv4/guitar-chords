import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes';

import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import './assets/css/global.css';
import './assets/css/style.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        
        <Router />
    </React.StrictMode>,
);