import React, { useState } from 'react'
import Form from 'C:/Users/lisel/source/repos/MVikis/Date-Timer/date-timer/src/components/Universal/Form.js'

export default function APIApp(){

    const [data,setData] = useState([]);
  async function Get(name){
     
      try{
      let response = await fetch(`https://api.nationalize.io?name=${name}`)
      .then(response => response.json())
      .then(data => setData(data));
      
      }
      catch{

      }
  }
  console.log(data)
  console.log(data.name)

    return(
        <div>
           <Form AddItem={Get}/>
           
           {data.name!== undefined?
           <div>
        <span>{data.name}</span>
            {data.country.map(country =><span>{country.country_id} </span>)}
           </div>
           
           
            : null}
        </div>
    )
}