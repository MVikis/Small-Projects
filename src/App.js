import React from 'react';
import './App.css';
import './styles.css'
import TimerApp from './components/TimerApp/TimerApp';
import { BrowserRouter as Router,Route,} from "react-router-dom";
import ToDoApp from './components/ToDoApp/ToDoApp';
import Nav from './Nav'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThList, faClock, faPlusCircle, faCheckCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

library.add( faThList, faClock, faPlusCircle, faCheckCircle, faMinusCircle)

function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
      <header className="App-header">
       
      <Route path="/Timer" component={TimerApp}/>
      <Route path="/ToDo" component={ToDoApp}/>
      

      </header>
    </div>
    </Router>
  );
}

export default App;
