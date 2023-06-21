import React from 'react'
import { Droppable } from '@hello-pangea/dnd'
import BoardTitle from './BoardTitle'
import Card from './Card'
import Button from './Button'
import '../sass/Board.scss'
import menu from '../assets/menu.svg'

const Board = ({ data }) => {
    return (
        <Droppable droppableId={data.id}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className='board'
                >
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
                        {provided.placeholder}
                        <Button id={data.id} />
                    </div>
                </div>
            )}
        </Droppable>
    )
}

export default Board