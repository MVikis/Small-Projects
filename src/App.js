import React from 'react';
import './App.css';
import './style.css'
import TimerApp from './components/TimerApp/TimerApp';
import { BrowserRouter as Router,HashRouter,Route, Switch} from "react-router-dom";
import {ToDoApp} from './components/ToDoApp/ToDoApp';
import Nav from './Nav'
import Home from './components/Universal/Home'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClipboardList, faClock, faPlusCircle, faCheckCircle, faMinusCircle, faGlobeAfrica, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import APIApp from './components/API/APIApp';
import Info from './components/Universal/Info';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
library.add(faClipboardList, faClock, faPlusCircle, faCheckCircle, faMinusCircle, faGlobeAfrica, faCalendarDay)

const paths = [
  {
    id:1, path:'/', Component: Home
  },
  {
    id:2, path:'/timer', Component: TimerApp
  },
  {
    id:3, path:'/todo', Component: ToDoApp
  },
  {
    id:4, path:'/api', Component: APIApp
  },
]

function App() {
  return (
    <HashRouter
    basename='/'>
    <div className="App">
    <Nav/>
      <header className="App-header">
     
     
            {paths.map( ({id, path, Component}) =>
          <Route key={id} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
          <div className="page">
                    <Component />
                  </div>
            </CSSTransition>
          )}
        </Route>
            )}
      
     
     <Info/> 

      </header>
    </div>
    </HashRouter>
  );
}

export default App;
