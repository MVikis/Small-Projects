import React, {useState} from 'react';
import './App.css';
import './style.css'
import TimerApp from './components/TimerApp/TimerApp';
import { BrowserRouter as Router,HashRouter,Route, Switch} from "react-router-dom";
import {ToDoApp} from './components/ToDoApp/ToDoApp';
import Nav from './Nav'
import Home from './components/Universal/Home'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClipboardList,faInfo, faClock, faPlusCircle, faCheckCircle, faMinusCircle, faGlobeAfrica, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import APIApp from './components/API/APIApp';
import Info from './components/Universal/Info';
import {  CSSTransition } from 'react-transition-group';
library.add(faClipboardList,faInfo, faClock, faPlusCircle, faCheckCircle, faMinusCircle, faGlobeAfrica, faCalendarDay)

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

  const [showInfo, setShowInfo] = useState(true);
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
          <div className="background">
          <Info info={showInfo} setShowInfo={setShowInfo}/>
                 {showInfo&& <Component />}  
                  </div>
            </CSSTransition>
          )}
        </Route>
            )}
      
  

      </header>
    </div>
    </HashRouter>
  );
}

export default App;
