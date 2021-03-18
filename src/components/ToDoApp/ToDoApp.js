import React, { useState } from 'react';
import Form from '../Universal/Form'
import {Item} from './Item'
import './ToDo.css'
import todo from '../../photos/todo.jpg'
import doneListJpg from '../../photos/done-list.jpg'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { DownloadComp } from '../Universal/Download';



export const ToDoApp=()=>{

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
        <div className="overlay flex">
           
            <div className="home-title">
                 <h2> <span>To Do List</span></h2>
                 </div>
            <Form AddItem={AddItem}/>
            
            <div className="row">
            <Todo items={items} DeleteItem={DeleteItem} CompleteItem={CompleteItem}/>
            <DoneList doneItems={doneItems}/>
            </div>
            </div>
    )
}

const Todo = ({items, CompleteItem, DeleteItem}) =>{
    return(
        <div className="glass">
        <div className="glass-img-container">
            <span>To Do</span>
            <img src={todo}/>
        </div>
        <div className="column todo-list">
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
const DoneList = ({doneItems}) =>{
    return(
        <div className="glass">
        <div className="glass-img-container">
            <span>Done List</span>
            <img src={doneListJpg}/>
        </div>
       
        <div className="column todo-list">
        
    <TransitionGroup component={null}>
        {doneItems&&( doneItems.map((item, index )=> (
    <CSSTransition 
    key={index}
    timeout={index}
    classNames="item">
        <div className="form-inline">
    <div className="todo-list-item">{item}</div>
    </div>
    </CSSTransition>)))}
    </TransitionGroup>
    </div>
    </div>
    
    )
}
