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
    listIds: ['list-1', 'list-2']
}

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [store, setStore] = useState(initialState)
    return (
        // {{store}} because it's going to be exported in object
        <DataContext.Provider value={{ store }}>
            {props.children}
        </DataContext.Provider>
    )
}