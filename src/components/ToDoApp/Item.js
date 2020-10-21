import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Item(props){

    
    return(
        <div className="form-inline">
            
            <div className="item">{props.item}</div>
            <button onClick={props.completeItem} className="form-button flex ">
                <FontAwesomeIcon className="fa-secondary icon" icon="check-circle" />
            </button>
            <button onClick={props.deleteItem} className="form-button sec flex ">
                <FontAwesomeIcon className="fa-third icon" icon="minus-circle" />
            </button>
        </div>
        
    )
}