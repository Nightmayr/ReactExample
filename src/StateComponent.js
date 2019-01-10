import React, { Component } from 'react';

class StateComponent extends Component{
    constructor(){
        super();
        this.state = {
            stateText: "Example text",
        }
        // this.update = () => this.setState({
        //     stateText: "New Text"
        // })
    }

    update =  () => {
        this.setState({
            stateText: this.state.stateText = "New Text"
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.stateText}</h1>
                <h3>
                    <input type="text" ref="updateText/"></input>
                    <button onClick={this.update}>Update Text</button>
                </h3>
            </div>
        );
    }
}

export default StateComponent;