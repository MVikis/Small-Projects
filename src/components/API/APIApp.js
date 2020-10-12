import React, { useState } from 'react'
import Form from 'C:/Users/lisel/source/repos/MVikis/Date-Timer/date-timer/src/components/Universal/Form.js'
import ReactCountryFlag from "react-country-flag"
import {countries} from 'country-data';

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


    return(
        <div className="overlay">
            <h2 >Name Nationalize</h2>
           <Form AddItem={Get}/>
           
           {data.name!== undefined?
           <div className="box">
        <h3 className="logo">{data.name}</h3>
           {data.country.map((country, index )=><div className="box-item" key={index}><ReactCountryFlag countryCode={country.country_id}  style={{
                    width: '8em',
                    height: '8em',
                }} svg/>
                <h4>{countries[country.country_id].name}</h4>
                 <h4>{Math.ceil(country.probability * 100)}%</h4></div>)}
           </div>
           
           
            : null}
        </div>
    )
}