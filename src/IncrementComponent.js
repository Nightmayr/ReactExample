import React, { Component } from 'react';

class IncrementComponent extends Component{
    constructor(){
        super();
        this.state = {
            number: 1,
        }
    }

    update = () =>{
        this.setState({
            number: this.state.number+=1
        })
    }

    render(){
        return(
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <h3>
                    <button onClick={this.update}>Increment Number</button>
                </h3>
            </div>

        )
    }

}

export default IncrementComponent;