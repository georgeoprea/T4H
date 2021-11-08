import './App.css';
import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Users from './components/Users';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import $ from 'jquery';
import ProtectedRoute from './components/ProtectedRoute';

export const AuthContext = React.createContext();

function isServerHealthy() {
  var context = this;
  $.ajax({
    url: 'http://localhost:5000/healthcheck',
    method: 'GET',
    success: function(response) {
      console.log('server is healthy');
      // App.setHealth(true);
    },
    error: function(error){
      console.log("server is sick");
    }
  })
}

function App() {
  const [health, setHealth] = React.useState(false);
  isServerHealthy();
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <ProtectedRoute exact path="/users" component={Users}/>
          <ProtectedRoute exact path="/about" component={About}/>
          <Route path='*' component={() => "404 NOT FOUND"}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
