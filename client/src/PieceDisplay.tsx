import React from 'react';
import { Piece } from './Game';
import Cell from './Cell';
import './PieceDisplay.css';

interface PieceDisplayProps {
    piece: Piece;
}

interface PieceDisplayState {
}

class PieceDisplay extends React.Component<PieceDisplayProps, PieceDisplayState> {
    constructor(props: PieceDisplayProps) {
        super(props);
    }

    render() {
        return (
            <div className = "PieceDisplay-container">
                {
                    this.props.piece.grid.map((row) => {
                        return (
                            <div className = "PieceDisplay-row">
                                {row.map((on) => {
                                    return (
                                        <Cell id = {on === 1 ? this.props.piece.id : 9}/>
                                    )
                                })}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default PieceDisplay;