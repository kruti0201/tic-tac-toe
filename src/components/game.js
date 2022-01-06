import React from "react";
import Board from "./board";
import Square from "./square";
import {calculateWinner} from '../helper'
import { Fragment } from "react/cjs/react.production.min";

const Game = () => {
    const [history, setHistory] = React.useState(Array(9).fill(null))
    const [stepNumber, setStepNumber] = React.useState(0)
    const [xIsNext, setXIsNext] = React.useState(true)
    const winner = calculateWinner(history)
    const xo = xIsNext ? "X" : "O"

    const reset=()=>{
        setHistory(Array(9).fill(null))
        setStepNumber(0)
        setXIsNext(true)
    }
    const handleClick=(i)=>{
        const historyPoint = history.slice(0,stepNumber + 1)        
        if(winner || historyPoint[i])
            return;        
        const square = history
        square[i] = xo
        setHistory([...square]);
        setStepNumber(historyPoint.length)
        setXIsNext(!xIsNext)
    }

    return(
        <Fragment>
            <h1>Tic-Tac-Toe</h1>
            <Board squares={history} onClick={handleClick}/>
            <div className="info-wrapper">
                <h3>{winner ? "Winner is "+ winner : "Next move is "+xo}</h3>
                <button onClick={reset}>Reset</button>
            </div>            
        </Fragment>
    )
}

export default Game;