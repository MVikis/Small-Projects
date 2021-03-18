import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Form(props){
const [formInfo, setFormInfo] = useState()

   const FormChange=(event)=>{
    const { value} = event.target
    setFormInfo(value)
     }
   const handleSumbit = (event) => {
       event.preventDefault()
       if(formInfo!=undefined)
       props.AddItem(formInfo)
      else
       alert('Please enter a value')
     }

     return(
        <form autoComplete="off" className="form-inline" onSubmit={handleSumbit}>
        
        <input className="item" onChange={FormChange} name="text" type="text"></input>
        
      <button className="form-button flex fa-secondary" type="submit">
        <FontAwesomeIcon  icon="plus-circle"></FontAwesomeIcon>
        </button>
        
       
    </form>
     )
}