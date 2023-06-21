import React from 'react'
import '../sass/Board.scss'

const Board = ({ data }) => {
    return(
        <div className='board'>
            <h3>{data.title}</h3>
            <div>
                card
            </div>
            <button>add</button>
        </div> 
    )
}

export default Board