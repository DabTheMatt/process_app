// Saving application state to
// LocalStorage example
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      items: []
    };
  }
  componentDidMount() {
    localStorage.getItem("items")
      ? this.setState({
          items: JSON.parse(localStorage.getItem("items"))
        })
      : this.setState({
          items: []
        });
  }
  handleInput = e => {
    this.setState({
      inputVal: e.target.value
    });
  };
  handleClick(e) {
    let itemsArr = this.state.items;
    itemsArr.push({
      id: 1,
      name: this.state.inputVal
    });
    this.setState({
      items: [...itemsArr]
    });
    console.log(itemsArr);
    localStorage.setItem("items", JSON.stringify(itemsArr));
  }
  render() {
    return (
      <>
        <ul>{this.state.items.map(m => m.name)}</ul>
        <input value={this.state.inputVal} onInput={this.handleInput} />
        <button onClick={() => this.handleClick()}>Dodaj</button>
      </>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
