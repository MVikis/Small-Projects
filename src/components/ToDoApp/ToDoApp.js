import React, { useState } from 'react';
import Form from './Form'
import Item from './Item'

export default function ToDoApp(){

    const [items, setItems] = useState([])
const AddItem = (item) =>{
    setItems(oldItems =>[...oldItems,item])
}
console.log(items)
    return(
        <div>
            <Form AddItem={AddItem}/>
            {items.length > 0 ? items.map((item, index )=> (<Item key={index} item={item} />))
            : <span>Add things to do!</span>
        }
       
        </div>
    )
}