import React from 'react'
import Svg from './Small-Projects.svg'

export default function Home(){
    return(
        <div className="overlay row flex">
             <div className="home-title">
                 <h2>A <span>Small Projects</span></h2>
                 
                 </div>
                 <img className="home-icon" src={Svg} />
             <div className="home-circle">
            
               
            </div>
               
              
        </div>
    )
}