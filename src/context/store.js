import React, { createContext, useState } from 'react'

const cards = [
    {
        id: 'card-1',
        title: 'Learning how to code'
    },
    {
        id: 'card-2',
        title: 'Reading a manga'
    },
    {
        id: 'card-3',
        title: 'Jogging'
    }
]

const initialState = {
    lists: {
        'list-1': {
            id: 'list-1',
            title: "Backlog",
            cards: cards
        },
        'list-2': {
            id: 'list-2',
            title: "On progress",
            cards: []
        }
    },
    listIds: []
}

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [store, setStore] = useState(initialState)
    return(
        <DataContext.Provider value='ok'>
            {props.children}
        </DataContext.Provider>
    )
}