import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Auto from './pages/auto';
import Home from './pages/home';
import Moments from './pages/moments'
import reportWebVitals from './reportWebVitals';
import {Route, Routes, BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='auto' element={<Auto/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='moments' element={<Moments/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
