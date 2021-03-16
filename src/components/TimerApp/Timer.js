import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';


export const Timer = ({timeLeft, arrayOfTime})=>{

    
   
     
 
    return (  
      <TransitionGroup component='div' className="row">
        {arrayOfTime.map((time, index) =>
        <CSSTransition 
        in={timeLeft!=0}
        timeout={500}
        classNames="item">
           <div key={index} className="time-container">
           <p>{timeLeft[time]}</p>
           <span>{time}</span>
           </div>
           </CSSTransition>
        )}
        </TransitionGroup>)

    
}