import { Fragment } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import './App.css';

function App() {
  return (
    <Fragment className='app'>
      <Header 
        leftNode={<div>left</div>}
        centerNode={<div>center</div>}
        rightNode={<div>right</div>}
      />
      <div>内容区</div>
      <Footer />
    </Fragment>
  );
}

export default App;
