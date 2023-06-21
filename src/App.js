import React, { useContext } from 'react'
import Header from './components/Header';
import { DataContext } from './context/store';

const App = () => {
  const val = useContext(DataContext)
  return (
    <div>
      {val}
      <Header />
      Hello World
    </div>
  )
}

export default App;
