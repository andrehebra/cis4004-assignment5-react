import React from 'react';
import './ConnectFour.css';

class ConnectFour extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            initialMatrix: [
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0],
            ],
            currentPlayer: 1,
        }
    }

    fillbox(e) {
        const colValue = parseInt(e.target.getAttribute('data-value'));

        this.setPiect(5, colValue);

        this.setState((prevState) => {
            currentPlayer = prevState.currentPlayer == 1 ? 2 : 1;
        })

    }

    setPiece(startCount, colValue) {
        
    }
}