import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItems = (props) => {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <i className="bi bi-star"
            onClick=
        >

        </i>
        <input
          type="text"
          id={item.key}
          value={item.text}
          onChange={(e) => {
            props.setUpdate(e.target.value, item.key);
          }}
        />
        <i
          className="bi bi-trash"
          onClick={() => {
            props.deleteItem(item.key);
          }}
        ></i>
      </div>
    );
  });

  return <div>{listItems}</div>;
};

export default ListItems;
