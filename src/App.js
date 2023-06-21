import React, { useContext } from 'react'
import Header from './components/Header'
import Board from './components/Board'
import Button from './components/Button'
import { DataContext } from './context/store'
import { DragDropContext } from '@hello-pangea/dnd'
import './App.scss'

const App = () => {
  const { store } = useContext(DataContext)
  return (
    <DragDropContext>
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
