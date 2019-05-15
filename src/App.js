import React from 'react';
import './styles/App.scss'
import { Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import People from './components/People';
import Planets from './components/Planets';
import Species from './components/Species';

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={People} />
        <Route path="/planets" component={Planets} />
        <Route path="/species" component={Species} />
      </Switch>
    </div>
  )
}

export default App
