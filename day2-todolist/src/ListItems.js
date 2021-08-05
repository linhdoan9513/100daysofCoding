import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListItems = props => {
    const items = props.items
    const listItems = items.map(item => {
        return (
            <div className="list" key={item.key}>
                <h4>
                    <input 
                        type="text" id={item.key} value={item.text} 
                        onChange={(e)=> {props.setUpdate(e.target.value,item.key)}
                    }/>
                    <span>    
                        <FontAwesomeIcon className="faicons" onClick={() => {
                            props.deleteItem(item.key)
                        }} icon="trash" />
                    </span>
                </h4>
            </div>
        )}
    )

    return (
        <div>{listItems}</div>
    )
}

export default ListItems;