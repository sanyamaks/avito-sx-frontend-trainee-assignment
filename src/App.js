import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import Background from './components/Background/Background';
import ActiveNews from './components/ActiveNews/ActiveNews';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/news/:id" component={ActiveNews} />
        <Route path="/">
          <Background />
          <News />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
