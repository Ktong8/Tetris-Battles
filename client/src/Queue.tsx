import React from 'react';
import PieceDisplay from './PieceDisplay';
import { Piece } from './Game'

import './Queue.css';

interface QueueProps {
    queue: Array<Piece>;
}

interface QueueState {

}

class Queue extends React.Component<QueueProps, QueueState> {
    constructor(props: QueueProps) {
        super(props);
    }

    render() {
        return (
            <div className = "Queue-container">
                {this.props.queue.map((piece) => <PieceDisplay piece = {piece}/>)}
            </div>
        )
    }

}

export default Queue;