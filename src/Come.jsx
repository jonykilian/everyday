import React, { Component } from 'react';

class Come extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h1>{this.props.come.name}</h1>
                <h2>{this.props.come.year}</h2>
                <h3>{this.props.come.color}</h3>
            </div>
        );
    }
}
 
export default Come;