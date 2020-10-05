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
    <form onSubmit={this.handleSumbit}>
        <input name="date" onChange={this.FormChange} type="date"></input>
        <input className="form-button"  value="Create" type="submit"></input>
    </form>
        )
     }
}