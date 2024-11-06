import Playgame from './Components/Playgame';
import Profile from './Components/Profile';
import "./App.css";
import GameContext from './Context/GameContext';
import { useContext } from 'react';

function App() {
  const { toggle } = useContext(GameContext);

  console.log("Toggle state:", toggle); // Add this line to see the value of toggle

  return (
    <> 
      {toggle ? <Playgame /> : <Profile />}    
    </>
  );
}

export default App;
