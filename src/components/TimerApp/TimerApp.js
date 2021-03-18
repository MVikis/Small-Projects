import React, {useState, useEffect} from 'react';
import UserInput from './UserInput'
import {Timer} from './Timer'
import './TimerApp-style.css'

export default function TimerApp(){

  
const [countDownDate , setCountDownDate] = useState(0)

  const calculateTimeLeft = () => {
   
      let difference = new Date(countDownDate) - new Date()
    let timeLeft = {};
    if (difference > 0) {

      
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
useEffect(() => {
 
    const timer=setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
     
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  })

  var arrayOfTime = []
  Object.keys(timeLeft).map((key, index) => {
    const myItem = arrayOfTime.push(key)

  })

        
        return(
           
               <div className="overlay flex">
                  <div className="home-title">
                 <h2><span>Timer</span></h2>
                 </div>
                <UserInput Date={setCountDownDate}/>
                <Timer ShowTime={countDownDate} arrayOfTime={arrayOfTime}  timeLeft={timeLeft}/>
                </div>
         
           
        )
    
}