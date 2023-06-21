import React from 'react'
import '../sass/Board.scss'
import BoardTitle from './BoardTitle'

const Board = ({ data }) => {
    return (
        <div className='board'>
            <BoardTitle id={data.id} title={data.title} />
            <div>
                card
            </div>
            <button>add</button>
        </div>
    )
}

export default Board