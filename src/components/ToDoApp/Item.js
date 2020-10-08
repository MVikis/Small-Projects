import React from 'react'


export default function Item(props){

    return(
        <div>
            <div>{props.item.name}</div><i className="fas fa-plus"></i>

        </div>
    )
}