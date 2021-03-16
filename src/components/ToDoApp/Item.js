import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Item = ({item, completeItem, deleteItem}) => {

    
    return(
        <div className="form-inline">
            
            <div className="todo-list-item">
              <div>{item}</div>  
            <span onClick={completeItem} >
                <FontAwesomeIcon className="fa-secondary icon" icon="check-circle" />
            </span>
            <span onClick={deleteItem} >
                <FontAwesomeIcon className="fa-third icon" icon="minus-circle" />
            </span>
            </div>
          
        </div>
        
    )
}