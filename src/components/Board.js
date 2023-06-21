import React from 'react'
import BoardTitle from './BoardTitle'
import Card from './Card'
import '../sass/Board.scss'
import menu from '../assets/menu.svg'


const Board = ({ data }) => {
    return (
        <div className='board'>
            <div className="board__title">
                <BoardTitle id={data.id} title={data.title} />
                <div className="menu">
                    <img src={menu} alt="menu" />
                </div>
            </div>
            <div>
                {data.cards.map((card) => 
                    <Card key={card.id} item={card} />
                )}
            </div>
            <button>add</button>
        </div>
    )
}

export default Board