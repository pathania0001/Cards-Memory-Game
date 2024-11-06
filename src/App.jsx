
import Playgame from './Components/Playgame'
import Profile from './Components/Profile'
import "./App.css";
import GameContext from './Context/GameContext';
import { useContext } from 'react';
function App() {
  
  const 
  { 
    toggle, 
  } = useContext(GameContext);

  return (
    <> 
    {
      toggle?<Playgame />:<Profile />
    }    
    </>
  )
}

export default App
