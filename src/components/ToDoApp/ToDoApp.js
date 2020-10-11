import React, { useState } from 'react';
import Form from './Form'
import Item from './Item'
import './ToDo.css'

export default function ToDoApp(){

    const [items, setItems] = useState([])
    const [doneItems, setDoneItems] = useState([])

const CompleteItem = (item) =>{
    DeleteItem(item.name)
    setDoneItems(oldItems =>[...oldItems,item])
}

const AddItem = (item) =>{
    setItems(oldItems =>[...oldItems,item])
}
const DeleteItem=(name)=>{
    setItems(items.filter(item => item.name !== name));
}

    return(
        <div className="overlay">
            <div>
            <h3 className="logo">To Do List</h3>
            <Form AddItem={AddItem}/>
            </div>
            {items.length > 0 ? items.map((item, index )=> (<Item key={index} name={item.name} item={item} completeItem={()=>CompleteItem(item)} deleteItem={()=>DeleteItem(item.name)} />))
            : <span>Add things to do!</span>}
            
    <div className="done-items-block"><h4>Completed</h4>{doneItems.length > 0 ? doneItems.map((item, index)=>(<div className="item" key={index}>{item.name}</div>))
            :<div></div>}</div>
        </div>
    )
}