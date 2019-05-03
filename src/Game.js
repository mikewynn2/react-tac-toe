import React, { Component } from 'react';
import { Board } from './Board';
import { Button } from './Button';


const combos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];


export class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerXTurn: true,
            ticBoard: Array(9).fill(''),
            status: ''
        };
    }
    render() {
        return (
            <div>
                <h1 style={headerStyle}>TIC TAC TOE</h1>
                <Board 
                    board={this.state.ticBoard}
                    onClick={this.handleClick.bind(this)}
                />
                        {this.state.status ? (<h1 style={statusStyle}>Winner: {this.state.status}</h1>) :
                        (<h1 style={statusStyle}>{ 'Player ' + (this.state.playerXTurn  ? 'X' : 'O') + ' Turn' }</h1>)
                        }
                <button
                    style={restartBtn}
                    onClick={this.restartClick.bind(this)}
                >RESTART
                    </button>
            </div>
        );
    }

    handleClick(index) {
        if (this.state.status || this.state.ticBoard[index]) {
            return;
        }
        const newBoard = this.state.ticBoard.slice();
        newBoard[index] = this.state.playerXTurn ? 'X' : 'O';

        this.setState({
            playerXTurn: !this.state.playerXTurn,
            ticBoard: newBoard,
            status: this.findWinner(newBoard)
        });
    }

    restartClick() {
        this.setState({
            playerXTurn: this.setState.playerXTurn = true,
            ticBoard: Array(9).fill(''),
            status: ''
        })
        
    }

    findWinner(ticBoard) {
        for (let i = 0; i < combos.length; i++) {
            const [a, b, c] = combos[i];
            if (ticBoard[a] && ticBoard[a] === ticBoard[b] && ticBoard[a] === ticBoard[c]) {
                return ticBoard[a];
            }
        }

        return null;
    }

}
const restartBtn = {
    padding: 30,
    textAlign: 'center',
}
const headerStyle = {
    background: '#6C6969',
    color: 'white',
    textAlign: 'center',
    padding: 10
}  

const statusStyle = {
    background: '#6C6969',
    color: 'white',
    textAlign: 'center',
    padding: 10
}  
