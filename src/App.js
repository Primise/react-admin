import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from "./components/Login/Login"
import Home from './components/Home/Home'
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Route  exact path="/home" component={Home}/>
          <Route  exact path="/login" component={Login}/>
        </Router>
    </div>
  );
}

export default App;
