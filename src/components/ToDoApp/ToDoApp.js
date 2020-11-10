import React, { useState } from 'react';
import Form from 'C:/Users/lisel/source/repos/MVikis/Date-Timer/date-timer/src/components/Universal/Form.js'
import Item from './Item'
import './ToDo.css'
import ToDo from 'C:/Users/lisel/source/repos/MVikis/Date-Timer/date-timer/src/photos/to-do.svg'

export default function ToDoApp(){

    const [items, setItems] = useState([])
    const [doneItems, setDoneItems] = useState([])

const CompleteItem = (item) =>{
    DeleteItem(item)
    setDoneItems(oldItems =>[...oldItems,item])
}

const AddItem = (item) =>{
    setItems(oldItems =>[...oldItems,item])
}
const DeleteItem=(name)=>{
    setItems(items.filter(item => item!== name));
}

    return(
        <div className="background" >
        <div className="overlay">
            <div>
            <h3 >To Do List</h3>
            <Form AddItem={AddItem}/>
            </div>
            {items.length > 0 ? items.map((item, index )=> (<Item key={index} name={item} item={item} completeItem={()=>CompleteItem(item)} deleteItem={()=>DeleteItem(item)} />))
            : <span>Add things to do!</span>}
            
    <div className="done-items-block"><h4>Completed</h4>{doneItems.length > 0 ? doneItems.map((item, index)=>(<div className="item" key={index}>{item}</div>))
            :<div></div>}</div>
        </div>
        </div>
    )
}