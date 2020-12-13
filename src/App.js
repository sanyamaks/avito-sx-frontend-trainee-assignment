import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import ActiveNewsPage from './components/ActiveNewsPage/ActiveNewsPage';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact={true} path="/news/:id" component={ActiveNewsPage} />
        <Route exact={true} path="/">
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
