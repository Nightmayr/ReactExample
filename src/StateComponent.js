import React, { Component } from 'react';

class StateComponent extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            stateText: "Example text"
        }
        // this.update = () => this.setState({
        //     stateText: "New Text"
        // })
    }

    // update = () => {
    //     this.setState({
    //         stateText: this.state.stateText = "New Text"
    //     })
    // }

    handleChange = (event) => {
        this.setState({stateText: document.getElementById("text").value});
      }

      handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.stateText);
        event.preventDefault();
      }

    //   handleSubmit = (event) => {
    //     console.log('A name was submitted: ' + this.state.stateText);
    //     event.preventDefault();
    //   }

    render(){
        return(
            <div>
                <h1>{this.state.stateText}</h1>
                <h3>
                    <form onSubmit={this.handleSubmit}>
                        <label>Text:</label>
                        <input id="text" type="text"></input>
                        <input type="submit" value="Submit" onClick={this.handleChange}></input>
                    </form>
                </h3>
            </div>
        );
    }
}

export default StateComponent;