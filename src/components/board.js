import React from 'react';
import Square from './square';

const Board = ({ squares, onClick }) => {
    return <div className='board'>
        {squares && squares.map((square, i) => (
            <Square
                key={i}
                value={square}
                onClick={() => onClick(i)}
            />
        ))}
    </div>;
};

export default Board;