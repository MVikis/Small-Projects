import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Form(props){
const [formInfo, setFormInfo] = useState({name:''})

   const FormChange=(event)=>{
    const { value} = event.target
    setFormInfo({...formInfo, name: value})
     }
   const handleSumbit = (event) => {
       event.preventDefault()
      props.AddItem(formInfo)
       
     }

     return(
        <form className="form-inline" onSubmit={handleSumbit}>
        
        <input className="item" onChange={FormChange} name="text" type="text"></input>
        
      <button className="form-button flex fa-secondary" type="submit">
        <FontAwesomeIcon  icon="plus-circle"></FontAwesomeIcon>
        </button>
        
       
    </form>
     )
}