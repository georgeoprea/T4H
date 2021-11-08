import './App.css';
import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Users from './components/Users';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import $ from 'jquery';

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
          <Route path="/login" component={Login}/>
          <Route path="/about" component={About}/>
          <Route path="/users" component={Users}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
