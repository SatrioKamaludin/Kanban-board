import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { cardAdd, listAdd } from '../store/actions/boardActions'
import Textarea from 'react-textarea-autosize'
import '../sass/Button.scss'
import close from '../assets/close.svg'

const Button = ({ id, list }) => {
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)

    const [text, setText] = useState('')

    const openForm = () => setOpen(true)

    const closeForm = () => setOpen(false)

    const handleChange = e => setText(e.target.value)

    const addCard = () => {
        if (text) {
            dispatch(cardAdd(id, text))
        }
        setText('')
    }

    const addList = () => {
        if (text) {
            dispatch(listAdd(text))
        }
        setText('')
    }

    const showForm = () => {
        const textButton = list ? 'add list' : 'add card'
        const placeholder = list ? 'enter list title' : 'enter card title'
        return (
            <div className='form-box'>
                <Textarea
                    autoFocus
                    className='text-area'
                    placeholder={placeholder}
                    onBlur={closeForm}
                    value={text}
                    onChange={handleChange}
                />
                <button className='add' onMouseDown={list ? addList : addCard}>{textButton}</button>
                <button className='close'>
                    <img src={close} alt="close" onClick={closeForm} />
                </button>
            </div>
        )
    }

    const showButton = () => {
        const textButton = list ? 'add another list' : 'add new card'
        const opacityButton = list ? 1 : 0.5
        const colorButton = list ? 'white' : 'inherit'
        const backgroundButton = list ? 'rgba(0, 0, 0, 0.25)' : 'inherit'
        return (
            <div
                className='add-button'
                onClick={openForm}
                style={{
                    opacity: opacityButton,
                    color: colorButton,
                    background: backgroundButton
                }}
            >
                + {textButton}
            </div>
        )
    }

    return open ? showForm() : showButton()
}

export default Button