import React, { Component} from 'react';
import UserInput from './UserInput'
import Timer from './Timer'
import './TimerApp-style.css'

export default class TimerApp extends Component{
constructor(){
    super()
    this.state={
        days:0,
        hours:0,
        minutes:0,
        seconds:0,

    }
}
calcTime=(date)=>{
  var d = new Date(date)
  const totalSeconds = (d - new Date()) / 1000
  const days = Math.floor(totalSeconds / 3600 / 24)
  const hours = Math.floor(totalSeconds / 3600) % 24
  const minutes = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds) % 60
this.setState({days,hours,minutes,seconds})

     }

    render(){

        return(
           <div>
               <UserInput Date={this.calcTime}/>
                <Timer time={this.state}/>
           </div>
        )
    }
}