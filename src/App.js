import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MainPage from "./components/MainPage/MainPage";
import ActiveNewsPage from "./components/ActiveNewsPage/ActiveNewsPage";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/news/:id" component={ActiveNewsPage} />
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
