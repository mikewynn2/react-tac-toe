import React , { Component } from 'react';
import { Button } from './Button';


export class Board extends Component {
    render() {
        return (
            <div className="Board">
                <div>
                    <Button 
                        onClick={() => this.props.onClick(0)}
                        name={this.props.board[0]}
                    />
                    <Button 
                        onClick={() => this.props.onClick(1)}
                        name={this.props.board[1]}
                    />
                    <Button 
                        onClick={() => this.props.onClick(2)}
                        name={this.props.board[2]}
                    />
                </div>
                <div>
                    <Button 
                        onClick={() => this.props.onClick(3)}
                        name={this.props.board[3]}
                    />
                    <Button 
                        onClick={() => this.props.onClick(4)}
                        name={this.props.board[4]}
                    />
                    <Button 
                        onClick={() => this.props.onClick(5)}
                        name={this.props.board[5]}
                    />
                </div>
                <div>
                    <Button 
                        onClick={() => this.props.onClick(6)}
                        name={this.props.board[6]}
                    />
                    <Button 
                        onClick={() => this.props.onClick(7)}
                        name={this.props.board[7]}
                    />
                    <Button 
                        onClick={() => this.props.onClick(8)}
                        name={this.props.board[8]}
                    />
                
                </div>
            </div>
        )
    }
}
