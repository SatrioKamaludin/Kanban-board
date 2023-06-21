import React, { useState } from 'react'
import '../sass/Card.scss'
import delIcon from '../assets/delete.svg'

const Card = ({ item }) => {
    const [edit, setEdit] = useState(false)

    const [text, setText] = useState(item.title)

    const isEdit = () => setEdit(true)

    const closeInput = () => setEdit(false)

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
                    <img src={delIcon} alt="delete" />
                </div>
            )}
        </div>
    )
}

export default Card