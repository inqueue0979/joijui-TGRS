import React from 'react';
import ReactDOM from 'react-dom/client';
import Popup from './components/Popup';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <h1>딱걸렸어</h1>
        <Popup />
    </React.StrictMode>
);