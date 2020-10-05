import React from 'react'
export default function Timer(props){


    return(
        <div className="row">
            <div>
            <p>{props.time.days}</p>
            <span>days</span>
            </div>
            <div>
            <p>{props.time.hours}</p>
            <span>hours</span>
            </div>
             <div>
            <p>{props.time.minutes}</p>
            <span>minutes</span>
            </div>
             <div>
            <p>{props.time.seconds}</p>
            <span>seconds</span>
            </div>
         

        </div>
    )
}