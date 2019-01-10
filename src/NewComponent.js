import React, { Component } from 'react';

class NewComponent extends Component{
    render(){
        return(
            <div>
                    {/* Hello from NewComponent! */}
                    {this.props.exampleProp}
            </div>
        );
    }

}

export default NewComponent;