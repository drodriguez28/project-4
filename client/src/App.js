import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Fans from './components/Fans';
import Games from './components/Games';
import Teams from './components/Teams';
import Header from './components/Header';
import CreateFan from './components/Createfan';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/fans" component={Fans} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/fan/new" component={CreateFan} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
