import React from 'react';
import Cell from './Cell';
import GameBoard from './GameBoard';
import Queue from './Queue';

import './Game.css';
import { isArray } from 'util';
import { randomBytes } from 'crypto';

const width = 10; // number of cells in each row
const height = 20; // number of rows in grid

export interface Piece {
    id: number;
    width: Array<number>; // width of each rotation
    height: Array<number>; // height of each rotation
    grids: Array<Array<number>>; // cells covered in each rotation
}

export const pieces: Array<Piece> = [
    {
        id: 1,
        width: [2],
        height: [2],
        grids: [
            [0, 1, width, width + 1],
        ],
    },
    {
        id: 2,
        width: [3, 2, 3, 2],
        height: [2, 3, 2, 3],
        grids: [
            [1, width, width + 1, width + 2],
            [1, width + 1, width + 2, 2 * width + 1],
            [width, width + 1, width + 2, 2 * width + 1],
            [1, width, width + 1, 2 * width + 1],
        ],
    },
    {
        id: 3,
        width: [3, 2, 3, 2],
        height: [2, 3, 2, 3],
        grids: [
            [width, 2 * width, 2 * width + 1, 2 * width + 2],
            [1, 2, width + 1, 2 * width + 1],
            [width, width + 1, width + 2, 2 * width + 2],
            [2 * width, 1, width + 1, 2 * width + 1],
        ],
    },
    {
        id: 4,
        width: [3, 2, 3, 2],
        height: [2, 3, 2, 3],
        grids: [
            [width + 2, 2 * width, 2 * width + 1, 2 * width + 2],
            [0, width, 2 * width, 2 * width + 1],
            [0, 1, 2, width],
            [1, 2, width + 2, 2 * width + 2],
        ],
    },
    {
        id: 5,
        width: [3, 2],
        height: [2, 3],
        grids: [
            [width + 1, width + 2, 2 * width, 2 * width + 1],
            [0, width, width + 1, 2 * width + 1],
        ],
    },
    {
        id: 6,
        width: [3, 2],
        height: [2, 3],
        grids: [
            [width, width + 1, 2 * width + 1, 2 * width + 2],
            [1, width + 1, width, 2 * width],
        ],
    },
    {
        id: 7,
        width: [4, 1],
        height: [1, 4],
        grids: [
            [width, width + 1, width + 2, width + 3],
            [1, width + 1, 2 * width + 1, 3 * width + 1],
        ],
    },
];

interface GameProps {

}

interface GameState {
    board: Array<number>;
    queue: Array<number>;
    currentPosition: number; // position of the current tetromino
    currentTetromino: number; // id of the current tetromino
    currentRotation: number; // rotation of current tetromino
}

/**
 * A Mutable Game React Component representing an interactable 10x20 Tetris game. 
 */
class Game extends React.Component<GameProps, GameState> {
    constructor(props: GameProps) {
        super(props);
        const board: Array<number> = new Array(width * height).fill(0);
        this.state = {
            board: board,
            queue: [0,1,2],
            currentPosition: 4,
            currentTetromino: 0,
            currentRotation: 0,
        };
    }

    componentDidMount() {
        setInterval(this.moveDown, 1000);
        document.addEventListener('keydown', this.handleKeyPress, false);
    }

    handleKeyPress = (event: KeyboardEvent) => {
        if(event.key === 's') {
            this.moveDown();
        } else if (event.key === 'a') {
            this.moveLeft();
        } else if (event.key === 'd') {
            this.moveRight();
        } else if(event.key === 'r') {
            this.rotate();
        }
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress, false);
    }

    /**
     * Game Logic to be run every set interval
     */
    moveDown = ()=> {
        this.undraw();
        this.setState((prevState: GameState) => {
            return {
                currentPosition: prevState.currentPosition + width
            };
        });
        this.draw();
        this.freezeFall();
    }

    moveLeft = () => {
        const tetromino = pieces[this.state.currentTetromino];
        const grid = tetromino.grids[this.state.currentRotation];
        if (grid.some((index) => {
            return index + this.state.currentPosition - 1 % width === width - 1 ||
                    (this.state.board[index + this.state.currentPosition - 1] !== 0 &&
                    grid.findIndex(val => val===index - 1) === -1);
        })){
            return; // don't move left if already on left edge
        }
        this.undraw();
        this.setState((prevState: GameState) => {
            return {
                currentPosition: prevState.currentPosition - 1
            };
        });
        this.draw();
    }

    moveRight = () => {
        const tetromino = pieces[this.state.currentTetromino];
        const grid = tetromino.grids[this.state.currentRotation];
        if (grid.some((index) => {
            return index + this.state.currentPosition + 1 % width === 0 ||
                    (this.state.board[index + this.state.currentPosition + 1] !== 0 &&
                    grid.findIndex(val => val===index + 1) === -1);
        })){
            return;  // don't move right if already on right edge
        }
        this.undraw();
        this.setState((prevState: GameState) => {
            return {
                currentPosition: prevState.currentPosition + 1
            };
        });
        this.draw();
    }

    undraw = () => {
        const tetromino = pieces[this.state.currentTetromino];
        const grid = tetromino.grids[this.state.currentRotation];
        this.setState((prevState: GameState) => {
            const newBoard: Array<number> = [];
            for (const i of prevState.board) {
                newBoard.push(i);
            }
            for (const i of grid) {
                newBoard[prevState.currentPosition + i] = 0;
            }
            return {board: newBoard};
        });
    }

    draw = () => {
        const tetromino = pieces[this.state.currentTetromino];
        const grid = tetromino.grids[this.state.currentRotation];
        this.setState((prevState: GameState) => {
            const newBoard: Array<number> = [];
            for (const i of prevState.board) {
                newBoard.push(i);
            }
            for (const i of grid) {
                newBoard[prevState.currentPosition + i] = tetromino.id;
            }
            return {board: newBoard};
        });
    }

    freezeFall = () => {
        const tetromino = pieces[this.state.currentTetromino];
        const grid = tetromino.grids[this.state.currentRotation];
        if (grid.some((index) => {
            return index + this.state.currentPosition + width >= width * height ||
                    (this.state.board[index + this.state.currentPosition + width] !== 0 &&
                    grid.findIndex(val => val===index + width) === -1);
        })) {
            const randomTetromino = Math.floor(Math.random() * pieces.length);
            const randomRotation = Math.floor(Math.random() * pieces[randomTetromino].grids.length);
            this.setState({
                currentPosition: 4,
                currentTetromino: randomTetromino,
                currentRotation: randomRotation,
            });
            this.draw();
        }
    }

    rotate = () => {
        this.undraw();
        const tetromino = pieces[this.state.currentTetromino];
        const rotations = tetromino.grids.length;
        this.setState((prevState) => {
            return {
                currentRotation: (prevState.currentRotation + 1) % rotations,
            };
        });
        this.draw();
    }

    render() {
        const board: Array<Array<number>> = [];
        for(let i = 0; i < 20; i++) {
            board.push(this.state.board.slice(i * 10, (i+1) * 10));
        }
        return (
            <div className = "Game-container">
                <GameBoard board = {board}/>
                <Queue queue = {this.state.queue}/>
            </div>
        )
    }
}

export default Game;