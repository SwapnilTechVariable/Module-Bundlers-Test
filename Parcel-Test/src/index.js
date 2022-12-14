import {createRoot} from 'react-dom/client';
import React, {StrictMode} from 'react';
import App from './App.jsx';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)