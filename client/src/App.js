import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Fans from './components/Fans';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/fans" component={Fans} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
