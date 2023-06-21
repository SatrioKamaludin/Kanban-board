import React, { useContext } from 'react'
import Header from './components/Header'
import Board from './components/Board'
import Button from './components/Button'
import { DataContext } from './context/store'
import { DragDropContext } from '@hello-pangea/dnd'
import './App.scss'

const App = () => {
  const { store, updateDrag } = useContext(DataContext)

  const onDragEnd = result => {
    const { destination,source, draggableId } = result
    if(!destination) return 
    const sourceList = store.lists[source.droppableId]
    const destinationList = store.lists[destination.droppableId]
    const draggingCard = sourceList.cards.find(item => item.id === draggableId)
    if(sourceList === destinationList){
      sourceList.cards.splice(source.index, 1)
      destinationList.cards.splice(destination.index, 0, draggingCard)
      const newStore = {
        ...store,
        lists: {
          ...store.lists,
          [sourceList.id]: destinationList
        }
      }
      updateDrag(newStore)
    }
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Header />
        <div className="container">
          {store.listIds.map(id => {
            const data = store.lists[id]
            return <Board key={id} data={data} />
          })}
          <Button list />
        </div>
      </div>
    </DragDropContext>
  )
}

export default App;
