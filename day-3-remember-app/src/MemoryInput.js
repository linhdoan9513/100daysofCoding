import React from "react";
import GifDisplay from "./GifDisplay";
// import ClearButton from "./ClearButton";

class MemoryInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      memoryText: "",
    };
    this.addItems = this.addItems.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearItems = this.clearItems.bind(this);
  }

  handleChange(e) {
    this.setState(
      {
        memoryText: e.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  }

  addItems(e) {
    e.preventDefault();
    const newItem = this.state.memoryText;
    if (newItem.text !== "") {
      //add newItem into the items array into items array with newItem replacing text in currentItem
      const newItems = [...this.state.list, newItem];
      console.log(newItems);
      this.setState({
        list: newItems,
        memoryText: "",
      });
    }
  }

  clearItems(e) {
    e.preventDefault();
    this.setState({
      list: [],
      memoryText: "",
    });
  }

  render() {
    return (
      <div className="memory-input-container">
        <GifDisplay display={this.state.list} />
        <input
          type="text"
          placeholder="Type something here..."
          value={this.state.memoryText}
          onChange={this.handleChange}
        />
        <button onClick={this.addItems}>Store Memory</button>
        <div className="buttons-container">
          <button className="clear-button" onClick={this.clearItems}>
            Clear Memory
          </button>
        </div>
      </div>
    );
  }
}

export default MemoryInput;
