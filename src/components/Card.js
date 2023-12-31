import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { cardDelete, cardEdit } from '../store/actions/boardActions'
import { Draggable } from '@hello-pangea/dnd'
import '../sass/Card.scss'
import delIcon from '../assets/delete.svg'

const Card = ({ id, item, index }) => {
    const dispatch = useDispatch()

    const [edit, setEdit] = useState(false)

    const [text, setText] = useState(item.title)

    const isEdit = () => setEdit(true)

    const handleChange = e => {
        setText(e.target.value)
    }

    const closeInput = () => {
        dispatch(cardEdit(id, item.id, index, text))
        setEdit(false)
    }

    const deleteCard = () => {
        dispatch(cardDelete(id, item.id))
    }

    return (
        <Draggable draggableId={item.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="card-list"
                >
                    {edit ? (
                        <form onSubmit={closeInput}>
                            <input
                                autoFocus
                                onBlur={closeInput}
                                type="text"
                                value={text}
                                onChange={handleChange}
                            />
                        </form>
                    ) : (
                        <div className="card-list__text">
                            <p onClick={isEdit}>{item.title}</p>
                            <img src={delIcon} alt="delete" onClick={deleteCard} />
                        </div>
                    )}
                </div>
            )}
        </Draggable>
    )
}

export default Card