import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeTitle } from '../store/actions/boardActions'
import '../sass/BoardTitle.scss'

const BoardTitle = ({ id, title }) => {
    const dispatch = useDispatch();

    const [text, setText] = useState(title)

    const [open, setOpen] = useState(false)

    const openInput = () => {
        setOpen(true)
    }

    const closeInput = () => {
        setOpen(false)
        dispatch(changeTitle(id, text))
    }

    const handleChange = e => {
        setText(e.target.value)
    }

    return (
        <div className="board-title">
            {open ? (
                <form onSubmit={closeInput}>
                    <input
                        autoFocus
                        type="text"
                        value={text}
                        onBlur={closeInput}
                        onChange={handleChange}
                    />
                </form>
            ) : (
                <h3 onClick={openInput}>{title}</h3>
            )}
        </div>
    )
}

export default BoardTitle