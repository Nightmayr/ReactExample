import React, { Component } from 'react';

class ParagraphComponent extends Component{
    render(){
        return(
            <div>
                <p>
                    {this.props.paraProp}
                </p>
                <p>
                    {this.props.paraProp}
                </p>

            </div>
        );
    }
}

export default ParagraphComponent;