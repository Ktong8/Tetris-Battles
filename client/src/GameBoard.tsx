import React from 'react';
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
        this.state = {

        }
    }

    render() {
        return (
            <div className = "GameBoard-container">
                {
                    this.props.board.map((row) => {
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