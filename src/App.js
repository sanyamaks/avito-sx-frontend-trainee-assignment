import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import Background from "./components/Background/Background";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Background />
      <News />
    </div>
  );
};

export default App;
