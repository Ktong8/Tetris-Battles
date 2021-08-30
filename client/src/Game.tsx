import React from 'react';
import Cell from './Cell';
import GameBoard from './GameBoard';
import Queue from './Queue';

import './Game.css';

const width = 10;
const height = 20;

export interface Piece {
    id: number;
    width: number;
    height: number;
    grid: Array<Array<number>>;
}

export const pieces: Array<Piece> = [
    {
        id: 1,
        width: 2,
        height: 2,
        grid: [[1,1],[1,1]],
    },
    {
        id: 2,
        width: 3,
        height: 2,
        grid: [[0,1,0], [1,1,1]],
    },
    {
        id: 3,
        width: 3,
        height: 2,
        grid: [[1,0,0],[1,1,1]],
    },
    {
        id: 4,
        width: 3,
        height: 2,
        grid: [[0,0,1],[1,1,1]],
    },
    {
        id: 5,
        width: 3,
        height: 2,
        grid: [[0,1,1],[1,1,0]],
    },
    {
        id: 6,
        width: 3,
        height: 2,
        grid: [[1,1,0], [0,1,1]],
    },
    {
        id: 7,
        width: 4,
        height: 1,
        grid: [[1,1,1,1]],
    },
];

interface GameProps {

}

interface GameState {
    board: Array<Array<number>>;
    queue: Array<Piece>;
}

/**
 * A Mutable Game React Component representing an interactable 10x20 Tetris game. 
 */
class Game extends React.Component<GameProps, GameState> {
    constructor(props: GameProps) {
        super(props);
        const board: Array<Array<number>> = new Array(height);
        for(let i = 0; i < height; i++){
            board[i] = new Array(width).fill(0);
        }
        this.state = {
            board: board,
            queue: [pieces[0], pieces[1], pieces[2]],
        };
    }

    /**
     * Game Logic to be run every set interval
     */
    makeMove = ()=> {

    }

    render() {
        return (
            <div className = "Game-container">
                <GameBoard board = {this.state.board}/>
                <Queue queue = {this.state.queue}/>
            </div>
        )
    }
}

export default Game;