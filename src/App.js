import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateDrag } from './store/actions/boardActions'
import Header from './components/Header'
import Board from './components/Board'
import Button from './components/Button'
import { DragDropContext, Droppable } from '@hello-pangea/dnd'
import './App.scss'


const App = () => {
  const store = useSelector((state) => state.board)

  const dispatch = useDispatch()

  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result

    if (!destination) return

    if (type == 'list') {
      const lists = store.listIds
      lists.splice(source.index, 1)
      lists.splice(destination.index, 0, draggableId)
      const newStore = {
        ...store,
        listIds: lists
      }
      dispatch(updateDrag(newStore))
      return
    }

    const sourceList = store.lists[source.droppableId]

    const destinationList = store.lists[destination.droppableId]

    const draggingCard = sourceList.cards.find(item => item.id === draggableId)

    if (sourceList === destinationList) {
      sourceList.cards.splice(source.index, 1)
      destinationList.cards.splice(destination.index, 0, draggingCard)
      const newStore = {
        ...store,
        lists: {
          ...store.lists,
          [sourceList.id]: destinationList
        }
      }
      dispatch(updateDrag(newStore))
    } else {
      sourceList.cards.splice(source.index, 1)
      destinationList.cards.splice(destination.index, 0, draggingCard)
      const newStore = {
        ...store,
        lists: {
          ...store.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList
        }
      }
      dispatch(updateDrag(newStore))
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='app' type='list' direction='horizontal'>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <Header />
            <div className="container">
              {store.listIds.map((id, index) => {
                const data = store.lists[id]
                return <Board key={id} data={data} index={index} />
              })}
              <Button list />
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default App;
