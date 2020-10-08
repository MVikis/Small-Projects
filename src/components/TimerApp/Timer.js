import React from 'react'
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
    const noInput=()=>{
        return(
            <span>Put in a new date!</span>
        )
    }
        const Input=()=>{
            return(
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
            )
        }
    
    return  timerComponents.length? Input() : noInput()

    
}