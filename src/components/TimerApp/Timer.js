import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';


export default function Timer(props){

    const timerComponents = [];
    Object.keys(props.timeLeft).forEach((interval) => {
      if (!props.timeLeft[interval]) {
        return;
      }
    
      timerComponents.push(
        <span>
          {props.timeLeft[interval]} {interval}{" "}
        </span>
      );
    });
   
     
    
    return (  
    <CSSTransition
      in={props.timeLeft!=0}
      timeout={1000}
      classNames="item">
        <div className="row">
        
    <div>
    <p>{props.timeLeft.days}</p>
    <span>days</span>
    </div>
   
    <div>
    <p>{props.timeLeft.hours}</p>
    <span>hours</span>
    </div>
     <div>
    <p>{props.timeLeft.minutes}</p>
    <span>minutes</span>
    </div>
     <div>
    <p>{props.timeLeft.seconds}</p>
    <span>seconds</span>
    </div>
 

</div>
</CSSTransition>
    )

    
}