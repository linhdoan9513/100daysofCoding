import React from "react";
import ToDoList from "./List/ToDoList";
import Clock from "../src/Header/Clock";
import PinnedList from "./Header/PinnedList";

const App = () => {
  return (
    <div div="container">
      <div className="row">
        <div className="col-sm col-1">
          <PinnedList />
        </div>
        <div className="col-sm">
          <Clock />
          <ToDoList />
        </div>
        <div className="col-sm">One of three columns</div>
      </div>
    </div>
  );
};

export default App;
