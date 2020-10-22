import React from 'react';
import './App.css'; 
import FooterSection from './Footer/Footer';
import HeaderSection from './Header/HeaderSection';
import MainContainer from './MainAreaOpeningPage/MainContainer';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderSection/>

      </header>

     <MainContainer/>
      
      <footer className='App-footer'>
        <FooterSection/>
      </footer>
    </div>
  );
  }

export default App;
