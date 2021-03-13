import React from 'react';
import './App.css';
import './style.css'
import TimerApp from './components/TimerApp/TimerApp';
import { BrowserRouter as Router,HashRouter,Route, Switch} from "react-router-dom";
import ToDoApp from './components/ToDoApp/ToDoApp';
import Nav from './Nav'
import Home from './components/Universal/Home'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThList, faClock, faPlusCircle, faCheckCircle, faMinusCircle, faGlobeAfrica, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import APIApp from './components/API/APIApp';
import Info from './components/Universal/Info';
library.add( faThList, faClock, faPlusCircle, faCheckCircle, faMinusCircle, faGlobeAfrica, faCalendarDay)

function App() {
  return (
    <HashRouter
    basename='/'>
    <div className="App">
    <Nav/>
      <header className="App-header">
      <Switch>
       <Route path="/" exact component={Home}/>
      <Route path="/timer" component={TimerApp}/>
      <Route path="/todo" component={ToDoApp}/>
      <Route path="/api" component={APIApp}/>
      </Switch>
     <Info/> 

      </header>
    </div>
    </HashRouter>
  );
}

export default App;
