import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Users from './components/Users';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
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
