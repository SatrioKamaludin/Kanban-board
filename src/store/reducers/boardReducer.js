import {
    CHANGE_TITLE,
    CARD_DELETE,
    CARD_EDIT,
    CARD_ADD,
    LIST_ADD,
    LIST_DELETE,
    UPDATE_DRAG,
} from '../actions/boardActions'
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
            title: 'Backlog',
            cards: cards,
        },
        'list-2': {
            id: 'list-2',
            title: 'On progress',
            cards: [],
        },
    },
    listIds: ['list-1', 'list-2'],
};

const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TITLE: {
            const { id, text } = action.payload;
            const item = state.lists[id];
            item.title = text;

            return {
                ...state,
                lists: {
                    ...state.lists,
                    [id]: item,
                },
            };
        }

        case CARD_DELETE: {
            const { listId, cardId } = action.payload;
            const item = state.lists[listId];
            const removeCard = item.cards.filter((card) => card.id !== cardId);
            item.cards = removeCard;

            return {
                ...state,
                lists: {
                    ...state.lists,
                    [listId]: item,
                },
            };
        }

        case CARD_EDIT: {
            const { listId, cardId, idx, text } = action.payload;
            const item = state.lists[listId];
            const card = item.cards.find((item) => item.id === cardId);
            card.title = text;
            item.cards.splice(idx, 1, card);

            return {
                ...state,
                lists: {
                    ...state.lists,
                    [listId]: item,
                },
            };
        }

        case CARD_ADD: {
            const { listId, text } = action.payload;
            const item = state.lists[listId];
            const id = uuid();
            const newCard = {
                id: `card-${id}`,
                title: text,
            };
            item.cards = [...item.cards, newCard];

            return {
                ...state,
                lists: {
                    ...state.lists,
                    [listId]: item,
                },
            };
        }

        case LIST_ADD: {
            const { text } = action.payload;
            const id = `list-${uuid()}`;
            const newList = {
                id,
                title: text,
                cards: [],
            };

            return {
                listIds: [...state.listIds, id],
                lists: {
                    ...state.lists,
                    [id]: newList,
                },
            };
        }

        case LIST_DELETE: {
            const { listId } = action.payload;
            const updatedListIds = state.listIds.filter((id) => id !== listId);
            const updatedLists = { ...state.lists };
            delete updatedLists[listId];

            return {
                listIds: updatedListIds,
                lists: updatedLists,
            };
        }

        case UPDATE_DRAG: {
            const { data } = action.payload;
            return data;
        }

        default:
            return state;
    }
};

export default boardReducer;
