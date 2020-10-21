import React, { Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Form extends Component{
constructor(props){
    super(props)
    this.state={
            date: ''
    }
}
    FormChange=(event)=>{
        this.setState({[event.target.name]: event.target.value})
     }
     handleSumbit = (event) => {
       event.preventDefault()
       this.props.Date(this.state.date)
       
     }
    
     render(){

        return(
    <form className="form-inline" onSubmit={this.handleSumbit}>
        
        
        <input className="item" name="date" onChange={this.FormChange} type="date"></input>
        <button className="form-button flex fa-secondary" type="submit">
        <FontAwesomeIcon  icon="calendar-day"></FontAwesomeIcon>
        </button>
    </form>
        )
     }
}