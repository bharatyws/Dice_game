import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Game from './components/Game';


function App() {

  const [startGame, setStartGame] = useState(false);

  const toogleGamePlay = () => {
    setStartGame((prev) => !prev)
  }

  return (
    <>
      {
        startGame ? <Game/> : <Home toggle={toogleGamePlay} />
      }
      
    </>
  )
}

export default App
