import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Title = ({title, icon}) => {

    return(
        <div className="title-container">
            <FontAwesomeIcon icon={icon}/>
            <div className="title-text">
                {title}
            </div>
        </div>
    )
}