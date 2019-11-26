import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom'
import loadable from './utils/loading'
import './App.css';



// 公共模块
const DefaultLayout = loadable(() => import( './containers'))

// 基础页面
const NotFound = loadable(() => import('./components/404'))
const AuthError = loadable(() => import('./components/500'))
const Login = loadable(() => import( './views/Login/Login'))
const Home = loadable(() => import( './views/Home/Home'))
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"  render={()=><Redirect to="/home/" push />} />
            <Route path='/404' component={NotFound} />
            <Route path='/500' component={AuthError} />
            <Route path='/login' component={Login} />
            <Route path='/home' component={Home} />
            <Route component={DefaultLayout} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
