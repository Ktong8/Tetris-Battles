import { render } from '@testing-library/react';
import React from 'react';

interface PieceProps {
    id: number;
}

interface PieceState {
    width: number;
    height: number;
    color: Array<number>;
    grids: Array<Array<boolean>>;
}

class Piece extends React.Component<PieceProps, PieceState> {
    constructor(props: PieceProps) {
        super(props);

    }


}