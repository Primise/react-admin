import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom'
import Login from "./views/Login/Login"
import Home from './views/Home/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"  render={()=><Redirect to="/home/" push />} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
