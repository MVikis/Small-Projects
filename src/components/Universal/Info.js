import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Info(){

    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
   
   
    return(
        <div className="info">
            <CSSTransition
            timeout={{ enter:1000, exit: 300 }}
            in={showButton}
            
            classNames="right-fade">
            <div className="done-item" onClick={()=>setShowMessage(true)} >Info</div>
            </CSSTransition>
            <CSSTransition
            unmountOnExit
            onEnter={() => setShowButton(false)}
            onExited={() => setShowButton(true)}
            timeout={{  enter:1000, exit: 300 }}
            in={showMessage}
            classNames="right-fade">
            <span onClick={()=>setShowMessage(false)} >
                <h3><FontAwesomeIcon icon="clock"/> Timer</h3>
            The timer application does what you think it would, it takes a date from the
            user and gives the countdown to that date in real time.
            <h3><FontAwesomeIcon icon="th-list"/> To-do list</h3>
            A to-do list where you can add items the list, delete them, or add them do your
            done-items list.
            <h3><FontAwesomeIcon icon="globe-africa"/> nationalize.io</h3>
            Nationalize.io predicts the nationality of a person given their name. 
            
            </span>
            </CSSTransition>
            
            
        </div>
    )
}