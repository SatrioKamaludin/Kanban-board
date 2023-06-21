import React, { useState, useContext } from 'react'
import { DataContext } from '../context/store'
import '../sass/Card.scss'
import delIcon from '../assets/delete.svg'

const Card = ({ id, item, index }) => {
    const { cardDelete, cardEdit } = useContext(DataContext)

    const [edit, setEdit] = useState(false)

    const [text, setText] = useState(item.title)

    const isEdit = () => setEdit(true)

    const handleChange = e => {
        setText(e.target.value)
    }

    const closeInput = () => {
        cardEdit(id, item.id, index, text)
        setEdit(false)
    }

    const deleteCard = () => {
        cardDelete(id, item.id)
    }

    return (
        <div className="card-list">
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
                    <img src={delIcon} alt="delete" onClick={deleteCard}/>
                </div>
            )}
        </div>
    )
}

export default Card