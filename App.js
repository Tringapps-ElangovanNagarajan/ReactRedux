import React from 'react';
import './App.css';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
function App() {
  return (
    <div className="rootContent">
      <Header/>
      <div className='content'>
        <Sidebar/>
        <Main/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;