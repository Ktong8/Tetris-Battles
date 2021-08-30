import React, { KeyboardEvent } from 'react';
import Cell from './Cell';
import './GameBoard.css';

interface GameBoardProps {
    board: Array<number>;
}

interface GameBoardState {
    board: Array<Array<number>>
}

class GameBoard extends React.Component<GameBoardProps, GameBoardState> {
    constructor(props: GameBoardProps) {
        super(props);
        const board: Array<Array<number>> = [];
        for(let i = 0; i < 20; i++) {
            board.push(this.props.board.slice(i * 10, (i+1) * 10));
        }
        this.state = {
            board: board,
        }
    }

    handleKeyPress = (event: KeyboardEvent) => {
        if(event.key === 's') {

        }
    }

    render() {
        return (
            <div className = "GameBoard-container">
                {
                    this.state.board.map((row) => {
                        return (
                            <div className = "GameBoard-row">
                                {row.map(id => <Cell id = {id}/>)}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default GameBoard;