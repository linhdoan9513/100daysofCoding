import React from 'react'  ; 
import ToDoList from './ToDoList';
import Clock from '../src/Header/Clock';

const App = () => {
    return (
        <div>
            <Clock />
            <ToDoList />
        </div>
    )
}

export default App;