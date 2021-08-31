import React, { KeyboardEvent } from 'react';
import Cell from './Cell';
import './GameBoard.css';

interface GameBoardProps {
    board: Array<Array<number>>;
}

interface GameBoardState {
}

class GameBoard extends React.Component<GameBoardProps, GameBoardState> {
    constructor(props: GameBoardProps) {
        super(props);
    }

    handleKeyPress = (event: KeyboardEvent) => {
        if(event.key === 's') {

        }
    }

    render() {
        return (
            <div className = "GameBoard-container">
                {
                    this.props.board.map((row, index) => {
                        return (
                            <div className = "GameBoard-row" key = {index}>
                                {row.map((id, index) => <Cell id = {id} key = {index}/>)}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default GameBoard;