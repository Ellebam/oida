import React from 'react';
import './App.css'; 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import LogoInHeader from './HeaderSection/LogoInHeader';
library.add(fab);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoInHeader/>
        
       
      
      </header>
    </div>
  );
}

export default App;
