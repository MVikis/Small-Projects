import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home(){
    return(
        <div style={{height:'100vh', justifyContent:'flex-start'}} className="overlay">
             <div className="home-circle">
                <FontAwesomeIcon   className="fa-primary home-icon" icon="clock"/>
                <FontAwesomeIcon   className="fa-primary home-icon"  icon="th-list"/>
                <FontAwesomeIcon  className="fa-primary home-icon" icon="globe-africa"/>
            </div>
               <h3 style={{fontSize:'10vh',margin:'0'}}>Small Projects</h3>
              
        </div>
    )
}