import React from 'react';
//import './ConnectFour.css';

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

        this.setState((prevState) => ({
            currentPlayer: prevState.currentPlayer === 1 ? 2 : 1
        }))

    }

    setPiece(startCount, colValue) {
        let initialMatrix = this.state.initialMatrix;

        const rows = document.querySelectorAll(".grid-row");

        try {
            if (initialMatrix[startCount][colValue] !== 0) {
                startCount--;
                this.setPiece(startCount, colValue);
            } else {
                const currentRow = Array.from(rows)[startCount].querySelectorAll(".grid-box");
                currentRow[colValue].classList.add("filled");
                currentRow[colValue].classList.add("player${`this.state.currentPlayer}`");
                initialMatrix[startCount][colValue] = this.state.currentPlayer;

                if (this.winCheck) {
                    alert("Player " + this.state.currentPlayer + " wins!");
                    return true;
                }
            }
        } catch(e) {
            alert("Column full, select again");
        }

        this.gameOverCheck();
    }

    winCheck() {
        console.log("winCheck");

        if (this.checkHorizontal() || this.checkVertical() || this.checkPositiveDiagonal() || this.checkNegativeDiagonal()) {
            return true;
        }

        return false;
    }

    checkHorizontal() {
        let initialMatrix = this.state.initialMatrix;
        let currentPlayer = this.state.currentPlayer;

        for (let i = 0; i < initialMatrix.length; i++) {
            let currentCount = 0;
            let j = 0;
    
            while (j < initialMatrix[i].length) {
                if (initialMatrix[i][j] === currentPlayer) {
                    currentCount++;
                } else if (currentCount < 4) {
                    currentCount = 0;
                }
                j++;
            }
    
            if (currentCount >= 4) {
                return true;
            }
        }
    
        return false;
    }

    checkVertical() {
        let initialMatrix = this.state.initialMatrix;
        let currentPlayer = this.state.currentPlayer;

        for (let i = 0; i < initialMatrix[0].length; i++) {
            let currentCount = 0;
            let j = 0;
    
            while (j < initialMatrix.length) {
                if (initialMatrix[j][i] === currentPlayer) {
                    currentCount++;
                } else if (currentCount < 4) {
                    currentCount = 0;
                }
                j++;
            }
    
            if (currentCount >= 4) {
                return true;
            }
        }
    
        return false;
    }

    checkPositiveDiagonal() {
        let initialMatrix = this.state.initialMatrix;
        let currentPlayer = this.state.currentPlayer;

        for (let i = 0; i < initialMatrix.length - 3; i++) {
            for (let j = 0; j < initialMatrix[0].length - 3; j++) {
                if (initialMatrix[i][j] === currentPlayer && initialMatrix[i+1][j+1] === currentPlayer && initialMatrix[i+2][j+2] === currentPlayer && initialMatrix[i+3][j+3] === currentPlayer) {
                    return true;
                }
            }
        }
    
    
        return false;

    }

    checkNegativeDiagonal() {
        let initialMatrix = this.state.initialMatrix;
        let currentPlayer = this.state.currentPlayer;


        for (let i = 3; i < initialMatrix.length; i++) {
            for (let j = 0; j < initialMatrix[0].length - 3; j++) {
                if (initialMatrix[i][j] === currentPlayer && initialMatrix[i-1][j+1] === currentPlayer && initialMatrix[i-2][j+2] === currentPlayer && initialMatrix[i-3][j+3] === currentPlayer) {
                    return true;
                }
            }
        }
    
    
        return false;
    }

    gameOverCheck() {
        let initialMatrix = this.state.initialMatrix;
        let currentPlayer = this.state.currentPlayer;

        let count = 0;

        for (const innerArray of initialMatrix) {
            let innerCount = 0;
            for (let i = 0; i < innerArray.length; i++) {
                if (innerArray[i] !== 0) {
                    innerCount++;
                }
            }

            if (innerCount === innerArray.length) {
                count++;
            } else {
                return false;
            }
        }

        if (count === 6) {
            alert("Game Over");
            return true;
        }


        return false;
    }

    render() {
        return (
            <div class="wrapper">
                <div class="container"></div>
            </div>
        )
        
    }
}

export default ConnectFour;