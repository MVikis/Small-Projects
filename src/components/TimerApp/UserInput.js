import React, { Component} from 'react';

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
        
        
        <input className="form" name="date" onChange={this.FormChange} type="date"></input>
        <input className="form "  value="Check" type="submit"></input>
    </form>
        )
     }
}