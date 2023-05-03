import React from "react";

export default class App extends React.Component { // 1
  constructor(props) {
    super(props);
    this.state = {
      name: "James",
      age: 45
      ,
    };
  }

  render() {
    return (
      <div>
        <h1>My name is {this.state.name}</h1>
        <h1>My age is {this.state.age}</h1>
      </div>
    );
  }
}