import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'

import App from './App';
import { NavigationcontextProvider } from './context/NavigationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NavigationcontextProvider>
        <App />
    </NavigationcontextProvider>
);
