import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Fans from './components/Fans';
import Games from './components/Games';
import Teams from './components/Teams';
import Trashs from './components/Trashs';
import Header from './components/Header';
import CreateFan from './components/Createfan';
import CreateGame from './components/Creategame';
import CreateTeam from './components/Createteam';
import CreateTrash from './components/Createtrash';
import FanDetails from './components/FanDetails';
import GameDetails from './components/GameDetails';
import TeamDetails from './components/TeamDetails';
import TrashDetails from './components/TrashDetails';





function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/fans/:id" component={FanDetails} />
          <Route exact path="/fans" component={Fans} />
          <Route exact path="/games/:id" component={GameDetails} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/teams/:id" component={TeamDetails} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/trashs/:id" component={TrashDetails} />
          <Route exact path="/trashs" component={Trashs} />
          <Route exact path="/fan/new" component={CreateFan} />
          <Route exact path="/game/new" component={CreateGame} />
          <Route exact path="/team/new" component={CreateTeam} />
          <Route exact path="/trash/new" component={CreateTrash} />
    

        </Switch>
      </Router>
    </div>
  );
}

export default App;
