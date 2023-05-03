import React from "react";

export default class MyApp2 extends React.Component {
    constructor() {
        super()
        this.state = {
            goOut: "Yes"
        }
        this.toggleGoOut = () => {
            this. setState(prevState => {
                return {
                    goOut: prevState.goOut === "Yes" ? "No" : "Yes"
                }
            })
        }
    }
render() {
        return (
           
            <div>
                <h1>{this.props}</h1>
                <h1>Do you want to go out?</h1>
                 <div onClick={this.toggleGoOut}>
                    {this.state.goOut}
                 </div>
            </div>
         )
    }
}
