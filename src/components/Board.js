import React from 'react'
import { Droppable, Draggable } from '@hello-pangea/dnd'
import BoardTitle from './BoardTitle'
import Card from './Card'
import Button from './Button'
import '../sass/Board.scss'
import menu from '../assets/menu.svg'

const Board = ({ data, index }) => {
    return (
        <Draggable draggableId={data.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="board"
                >
                    <div className="board__title">
                        <BoardTitle id={data.id} title={data.title} />
                        <div className="menu">
                            <img src={menu} alt="menu" />
                        </div>
                    </div>
                    <Droppable droppableId={data.id}>
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {data.cards.map((card, index) =>
                                    <Card key={card.id} id={data.id} index={index} item={card} />
                                )}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <Button id={data.id} />
                </div>
            )}
        </Draggable>
    )
}

export default Board