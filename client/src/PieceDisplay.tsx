import React from 'react';
import { Piece } from './Game';
import Cell from './Cell';
import './PieceDisplay.css';

const displayGrids: Array<Array<Array<number>>> = [
    [
        [1, 1],
        [1, 1],
    ],
    [
        [0, 1, 0],
        [1, 1, 1]
    ],
    [
        [1, 0, 0],
        [1, 1, 1]
    ],
    [
        [0, 0, 1],
        [1, 1, 1]
    ],
    [
        [0, 1, 1],
        [1, 1, 0]
    ],
    [
        [1, 1, 0],
        [0, 1, 1],
    ],
    [
        [1],
        [1],
        [1],
        [1],
    ]
]

interface PieceDisplayProps {
    piece: number;
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
                    displayGrids[this.props.piece].map((row) => {
                        return (
                            <div className = "PieceDisplay-row">
                                {row.map((on) => {
                                    return (
                                        <Cell id = {on === 1 ? this.props.piece + 1 : 9}/>
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