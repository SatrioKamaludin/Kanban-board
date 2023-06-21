import React from 'react'
import BoardTitle from './BoardTitle'
import Card from './Card'
import Button from './Button'
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
                {data.cards.map((card, index) =>
                    <Card key={card.id} id={data.id} index={index} item={card} />
                )}
                <Button id={data.id}/>
            </div>
        </div>
    )
}

export default Board