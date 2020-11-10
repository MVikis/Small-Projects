import React, { useState } from 'react'
import Form from 'C:/Users/lisel/source/repos/MVikis/Date-Timer/date-timer/src/components/Universal/Form.js'
import ReactCountryFlag from "react-country-flag"
import {countries} from 'country-data';
import Card from './Card'


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
const ReturnFlag=(country)=>{
 return(
  <ReactCountryFlag countryCode={country.country_id} svg/>
 )
}

    return(
        <div className="overlay">
            <h3 >Name Nationalize</h3>
           <Form AddItem={Get}/>
           
        

           {data.name!== undefined?
           <div>
           <h3 className="name-style">{data.name}</h3>
           <div className="flex">
        
           {data.country.map((country, index )=>
           <Card number={Math.ceil(country.probability * 100)} name={countries[country.country_id].name} img={`http://catamphetamine.gitlab.io/country-flag-icons/3x2/${country.country_id}.svg`} key={index}/>
            )} </div>
            </div>
            : null}
        
        </div>
    )
}