import React, { createContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

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

    const changeTitle = (id, text) => {
        const item = store.lists[id]
        item.title = text

        const newStore = {
            ...store,
            lists: {
                ...store.lists,
                [id]: item
            }
        }
        setStore(newStore)
    }

    const cardDelete = (listId, cardId) => {
        const item = store.lists[listId]
        const removeCard = item.cards.filter(card => card.id !== cardId)
        item.cards = removeCard
        const newStore = {
            ...store,
            lists: {
                ...store.lists,
                [listId]: item
            }
        }
        setStore(newStore)
    }

    const cardEdit = (listId, cardId, idx, text) => {
        const item = store.lists[listId]
        const card = item.cards.find(item => item.id === cardId)
        card.title = text
        item.cards.splice(idx, 1, card)
        const newStore = {
            ...store,
            lists: {
                ...store.lists,
                [listId]: item
            }
        }
        setStore(newStore)
    }

    const cardAdd = (listId, text) => {
        const item = store.lists[listId]
        const id = uuid()
        const newCard = {
            id: `card-${id}`,
            title: text
        }
        item.cards = [...item.cards, newCard]
        const newStore = {
            ...store,
            lists: {
                ...store.lists,
                [listId]: item
            }
        }
        setStore(newStore)
    }

    const listAdd = (text) => {
        const id = `list-${uuid()}`
        const newList = {
            id,
            title: text,
            cards: []
        }
        const newStore = {
            listIds: [...store.listIds, id],
            lists: {
                ...store.lists,
                [id]: newList
            }
        }
        setStore(newStore)
    }

    const listDelete = (listId) => {
        const updatedListIds = store.listIds.filter((id) => id !== listId);
        const updatedLists = { ...store.lists };
        delete updatedLists[listId];
        const newStore = {
            listIds: updatedListIds,
            lists: updatedLists
        };
        setStore(newStore);
    };

    const updateDrag = data => {
        setStore(data)
    }

    return (
        // {{store}} because it's going to be exported in object
        <DataContext.Provider value={{ store, changeTitle, cardDelete, cardEdit, cardAdd, listAdd, listDelete, updateDrag }}>
            {props.children}
        </DataContext.Provider>
    )
}