import React, { useState, useEffect } from 'react'
import {usePalette} from 'react-palette'
import './Card-style.css'




export default function Card(props){

    const [src, setSrc] = useState(props.img)
    const { data, loading, error } = usePalette(props.img)
 
    useEffect(()=>{
        setSrc(props.img)
    })
    return(
        <div className="card">
           
                <img src={src}/>
                <div className="card-overlay">
                    <div className="circle" style={{background:data.vibrant}}></div>
                    <div className="card-container">
                        <h2>
                           {props.name}
                        </h2>
                        <div className="color-flex">
                        <h2>
                           {props.number} %
                            </h2>
                       
                        </div>
                    </div>
                </div>
        </div>
    )
}