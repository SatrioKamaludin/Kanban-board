import React, { useState, useContext } from 'react'
import { DataContext } from '../context/store'
import '../sass/Card.scss'
import delIcon from '../assets/delete.svg'

const Card = ({ id, item }) => {
    const { cardDelete } = useContext(DataContext)

    const [edit, setEdit] = useState(false)

    const [text, setText] = useState(item.title)

    const isEdit = () => setEdit(true)

    const closeInput = () => setEdit(false)

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