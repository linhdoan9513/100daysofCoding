import React from 'react';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './ToDoList.css';

library.add(faTrash)

class ToDoList extends React.Component {
   constructor(props) {
       super(props);
       this.state={
           items:[],
           currentItem: {
               text: '',
               key: ''
           }
       }
       this.handleInput = this.handleInput.bind(this);
       this.addItems = this.addItems.bind(this);
       this.deleteItem = this.deleteItem.bind(this);
       this.setUpdate = this.setUpdate.bind(this);
   }
    
   handleInput(e) {
       this.setState({
           currentItem:{
                text: e.target.value,
                key: Date.now()
           }
       })
   }

   addItems(e) {
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);
        if (newItem.text !== "") {
            const items= [...this.state.items, newItem];
            this.setState({
                items: items,
                currentItem: {
                    text: '',
                    key: ''
                }
            })
        }
   }

   deleteItem(key) {
       const filteredItems = this.state.items.filter(item => item.key!== key);
       console.log(filteredItems);
       this.setState({
           items: filteredItems
       })
   }

   setUpdate(text, key) {
        const items= this.state.items;
        items.map(item => {
            if(item.key === key) {
                item.text = text;
            }
        })
        this.setState({
            items: items
        })
   }

    render() {
        return (
            <div className="form-container">
                <form id="to-do-form" onSubmit={this.addItems}>
                    <input 
                        type="text" 
                        placeholder="Add Task"
                        value={this.state.currentItem.text}
                        onChange={this.handleInput}
                    />
                     <button type='submit'>+</button>
                </form>
                <p>{this.state.items.text}</p>
                <ListItems 
                    items={this.state.items} 
                    deleteItem={this.deleteItem}
                    setUpdate={this.setUpdate}
                />
            </div>
        )
    }
}

export default ToDoList;

