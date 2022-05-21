import React from 'react'
import './App.css';

// import components
import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
      </main>
    </div>
  
  );
}

export default App;
