import React from 'react'
import Svg from './Small-Projects.svg'

export default function Home(){
    return(
        <div style={{height:'100vh', justifyContent:'center', flexDirection:'row'}} className="overlay flex">
             <h3 className="home-title fa-primary" >Small Projects</h3>
                 <img className="home-icon" src={Svg} />
             <div className="home-circle">
            
               
            </div>
               
              
        </div>
    )
}