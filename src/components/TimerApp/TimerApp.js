import React, {useState, useEffect} from 'react';
import UserInput from './UserInput'
import Timer from './Timer'
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

  

        
        return(
           <div className="background">
               <div className="overlay" style={{height:'100vh'}} >
               
               <UserInput Date={setCountDownDate}/>
                <Timer timeLeft={timeLeft}/>
                </div>
           </div>
        )
    
}