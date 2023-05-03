import React from "react";

export default class MyApp3 extends React.Component {
  constructor() {
    super();
    this.state = {
      goOut: "Yes",
    };
    this.toggleGoOut = () => {
      this.setState((prevState) => {
        return {
          goOut: prevState.goOut === "Yes" ? "No" : "Yes",
        };
      });
    };
  }
  render() {
    return (
      <div>
        <h1>{this.props.type}</h1>
        <h1>Do you want to go out?</h1>
        <div onClick={this.toggleGoOut}>{this.state.goOut}</div>
      </div>
    );
  }
}


// This IS MY APP3 COMPONENT
// IT'S A SIMPLE APP THAT USES A CLASS COMPONENT
// TO DISPLAY A MESSAGE AND A BUTTON
// THAT TOGGLES THE MESSAGE (YES/NO)