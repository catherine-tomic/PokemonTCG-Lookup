import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddCards from './components/AddCards';
import ViewCards from './components/ViewCards';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="screen-layout">
      <AddCards />
      <ViewCards />
    </div>
  )
}

export default App
