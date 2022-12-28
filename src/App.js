import { Fragment } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import './App.css';
// import {Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Fragment className='app'>
      <Header 
        leftNode={<div>left</div>}
        centerNode={<div>center</div>}
        rightNode={<div>right</div>}
      />
      <Footer />
    </Fragment>
  );
}

export default App;
