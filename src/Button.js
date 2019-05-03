import React, { Component } from 'react';


export class Button extends Component {
    render() {
        return (
            <button 
                onClick={this.props.onClick} 
                className={`button ${this.props.color}`}
            >{this.props.name}</button>
        );
    }
}

