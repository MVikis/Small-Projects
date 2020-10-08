import React, { useState } from 'react'



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
        
        <input onChange={FormChange} name="text" type="text"></input>
        
        <input className="form "  value="Check" type="submit"></input>
    </form>
     )
}