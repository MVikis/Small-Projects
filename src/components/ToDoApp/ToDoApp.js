import React, { useState } from 'react';
import Form from 'C:/Users/lisel/source/repos/MVikis/Date-Timer/date-timer/src/components/Universal/Form.js'
import Item from './Item'
import './ToDo.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ToDoApp(){

    const [items, setItems] = useState([])
    const [Class, setClass] = useState('done-items done-items-close')
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
const ToggleClass=()=>{
    console.log('hej')
if(Class==='done-items done-items-close')
    setClass('done-items done-items-open')

else setClass('done-items done-items-close')
}

    return(
        <div className="background" >
             <div className={Class}>
        <FontAwesomeIcon onClick={ToggleClass} className="fa-secondary icon span-svg" icon="check-circle" />
                <span>{doneItems.length}
            </span>
   
        <TransitionGroup className="flex">
        { doneItems.map((item, index)=>
        (<CSSTransition 
            key={index}
            timeout={1000}
            classNames="item">
        <div className="done-item" key={index}>{item}</div>
        </CSSTransition>))}
        </TransitionGroup>
           </div>
      
        <div className="overlay">
            <div>
            <h3 >To Do List</h3>
            <Form AddItem={AddItem}/>
            </div>
           
            
            <TransitionGroup component={null}>
                { items.map((item, index )=> (
            <CSSTransition 
            key={index}
            timeout={1000}
            classNames="item">
            <Item name={item} item={item} completeItem={()=>CompleteItem(item)} deleteItem={()=>DeleteItem(item)} />
            </CSSTransition>))}
            </TransitionGroup>
           
           
            </div>
          
            </div>
       
        
    )
}