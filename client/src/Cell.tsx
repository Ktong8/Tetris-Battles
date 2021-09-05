import React from 'react';
import './Cell.css';

const cellMap: Map<number, [string, string]> = new Map([
    [0, ['Cell-box-black', 'Cell-inner-black']],
    [1, ['Cell-box-yellow', 'Cell-inner-yellow']],
    [2, ['Cell-box-purple', 'Cell-inner-purple']],
    [3, ['Cell-box-blue', 'Cell-inner-blue']],
    [4, ['Cell-box-orange', 'Cell-inner-orange']],
    [5, ['Cell-box-green', 'Cell-inner-green']],
    [6, ['Cell-box-red', 'Cell-inner-red']],
    [7, ['Cell-box-cyan', 'Cell-inner-cyan']],
    [8, ['Cell-box-gray', 'Cell-inner-gray']],
    [9, ['Cell-box-empty', 'Cell-inner-empty']],
]);

interface CellProps {
    id: number;
}

interface CellState {

}

class Cell extends React.Component<CellProps, CellState> {
    constructor(props: CellProps) {
        super(props);
    }

    render() {
        const color = this.props.id;
        const outerbox = (cellMap.get(color)??['',''])[0];
        const innerbox = (cellMap.get(color)??['',''])[1];
        const highlight = 'Cell-box-regular';
        return (
            <div className = {`Cell-box ${outerbox} Cell-box-regular`}>
                <div className = {`Cell-inner-box ${innerbox}`}>

                </div>
            </div>
        )
    }
}

export default Cell;