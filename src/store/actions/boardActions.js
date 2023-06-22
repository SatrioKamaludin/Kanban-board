export const CHANGE_TITLE = 'CHANGE_TITLE';
export const CARD_DELETE = 'CARD_DELETE';
export const CARD_EDIT = 'CARD_EDIT';
export const CARD_ADD = 'CARD_ADD';
export const LIST_ADD = 'LIST_ADD';
export const LIST_DELETE = 'LIST_DELETE';
export const UPDATE_DRAG = 'UPDATE_DRAG';

export const changeTitle = (id, text) => ({
  type: CHANGE_TITLE,
  payload: { id, text },
});

export const cardDelete = (listId, cardId) => ({
  type: CARD_DELETE,
  payload: { listId, cardId },
});

export const cardEdit = (listId, cardId, idx, text) => ({
  type: CARD_EDIT,
  payload: { listId, cardId, idx, text },
});

export const cardAdd = (listId, text) => ({
  type: CARD_ADD,
  payload: { listId, text },
});

export const listAdd = (text) => ({
  type: LIST_ADD,
  payload: { text },
});

export const listDelete = (listId) => ({
  type: LIST_DELETE,
  payload: { listId },
});

export const updateDrag = (data) => ({
  type: UPDATE_DRAG,
  payload: { data },
});
