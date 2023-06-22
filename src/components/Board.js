import React from 'react'
import { useDispatch } from 'react-redux'
import { listDelete } from '../store/actions/boardActions'
import { Droppable, Draggable } from '@hello-pangea/dnd'
import BoardTitle from './BoardTitle'
import Card from './Card'
import Button from './Button'
import '../sass/Board.scss'
import delIcon from '../assets/close.svg'

const Board = ({ data, index }) => {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(listDelete(data.id))
    }

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
                        <div className="delIcon">
                            <img src={delIcon} alt="delIcon" title="remove list" onClick={handleDelete} />
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