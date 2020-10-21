import React from 'react';
import './App.css';
import './styles.css'
import TimerApp from './components/TimerApp/TimerApp';
import { BrowserRouter as Router,Route,} from "react-router-dom";
import ToDoApp from './components/ToDoApp/ToDoApp';
import Nav from './Nav'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThList, faClock, faPlusCircle, faCheckCircle, faMinusCircle, faGlobeAfrica, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import APIApp from './components/API/APIApp';


library.add( faThList, faClock, faPlusCircle, faCheckCircle, faMinusCircle, faGlobeAfrica, faCalendarDay)

function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
      <header className="App-header">
       
      <Route path="/timer" component={TimerApp}/>
      <Route path="/todo" component={ToDoApp}/>
      <Route path="/api" component={APIApp}/>
     
      

      </header>
    </div>
    </Router>
  );
}

export default App;
