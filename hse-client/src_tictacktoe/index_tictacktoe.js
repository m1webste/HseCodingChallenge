import React from 'react';
import { useState } from "react";
import Axios from 'axios';
import ReactDOM from 'react-dom/client';
import './index.css';

function Square(props){
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

class Board extends React.Component {

constructor(props){
    super(props);
    this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
    };
}

handleClick(i){
    const squares = this.state.squares.slice(); // copies array

    if (calculateWinner(squares) || squares[i]) {
        return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
    });
}

renderSquare(i) {
    return (
    <Square 
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
    />
    );
}

render() {
    //const winner = calculateWinner(this.state.squares);
    const winner = CallDummyApi();;
    let status;
    if (winner){
        status = 'Winner: ' + winner;
    }
    else{
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O') + ' ' + winner + '!';
    }

    return (
        <div>
        <div className="status">{status}</div>
        <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
        </div>
        <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
        </div>
        <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
        </div>
        </div>
    );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
        }
    }
    return null;
}

function callFixerApi(){
    Axios.get("https://api.apilayer.com/fixer/convert?to=usd&from=eur&amount=100", 
    { headers: { 'apikey': "sOnNvAVEne8y0XybMmlpmVB7yJFfZUam" } }).then(
        (response) => {
            return response;
        }
    );
};

async function CallDummyApi(){
    const [name, setName] = useState("");
    Axios.get("https://api.agify.io/?name=bella").then(
        (response) => {
            console.log(response)
            console.log("NAME! " + response.data.name)
            setName(response.data.name);
        }
    );
    return name;
};



// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
  