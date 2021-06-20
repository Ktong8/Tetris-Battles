import React from 'react';
import Cell from './Cell';
import GameBoard from './GameBoard';

import './Game.css';

const width = 10;
const height = 20;

export interface Piece {
    width: number;
    height: number;
    grid: Array<Array<number>>;
}

const pieces: Array<Piece> = [
    {
        width: 2,
        height: 2,
        grid: [[1,1],[1,1]],
    },
    {
        width: 3,
        height: 2,
        grid: [[0,1,0], [1,1,1]],
    },
    {
        width: 3,
        height: 2,
        grid: [[1,0,0],[1,1,1]],
    },
    {
        width: 3,
        height: 2,
        grid: [[0,0,1],[1,1,1]],
    },
    {
        width: 3,
        height: 2,
        grid: [[0,1,1],[1,1,0]],
    },
    {
        width: 3,
        height: 2,
        grid: [[1,1,0], [0,1,1]],
    },
    {
        width: 4,
        height: 1,
        grid: [[1,1,1,1]],
    },
]

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
        board[19][0] = 6;
        board[19][1] = 7;
        board[19][2] = 7;
        board[19][3] = 7;
        board[19][4] = 7;
        board[19][5] = 5;
        board[19][6] = 2;
        board[19][7] = 2;
        board[19][8] = 2;
        board[18] = [8,6, 4,4,5,2,6,6,1,1];
        board[17] = [8,7,4,4,2,2,2,6,1,1];
        board[16] = [8,7,4,4,3,6,5,5,1,1];
        board[15] = [8,7,3,3,3,6,6,5,5,3];
        board[14] = [0,7,1,1,5,5,6,3,3,3];
        board[13] = [0,2,1,1,4,5,5,3,3,3];
        board[12] = [0,2,2,0,4,4,4,3,6,6];
        board[11] = [7,2,0,0,4,4,4,6,6,3];
        board[10] = [7,0,0,0,1,1,4,3,3,3];
        board[9] = [7,0,0,0,1,1,0,0,0,0];
        board[8] = [7,0,0,0,0,0,0,0,0,0];
        this.state = {
            board: board,
            queue: [],
        };
    }

    render() {
        return (
            <GameBoard board = {this.state.board}/>
        )
    }
}

export default Game;