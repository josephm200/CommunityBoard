import './App.css';
import { useState } from 'react';


const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const updateCount = () => setCount(count + multiplier);
  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count - 10);
    }
  }
  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  }
  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 10);
      setCount(count - 1000);
    }
  }


  return (
    <div className="App">
      <div className="header">
        <h1>Food Truck Favorites</h1>
        <h2>Search for your favorites!</h2>
        {/* <img className = "samosa" src={asset/animatedsamosa.jpg}/> */}
        <img className = "foodtruck" 
        src="./src/assets/foodtruck.jpg"
        onClick={updateCount}
        />
      </div>
      <div className = "container">
        <div className = "upgrade">
          <h3>Birria-Landia</h3>
          <p>Mexican</p>
          <button onClick={buyDoubleStuffed}>View Menu</button>
          <img align = "left" className = "mexican"
          src="./src/assets/mexican.jpg"
          />
        </div>
        <div className = "upgrade">
          <h3>Mysttik Masala</h3>
          <p>Indian</p>
          <button onClick={buyPartyPack}>View Menu</button>
          <img align = "left" className = "mexican"
          src="./src/assets/mexican.jpg"
          />
        </div>
        <div className = "upgrade">
          <h3>The Halal Guys</h3>
          <p>Middle Eastern</p>
          <button onClick={buyFullFeast}>View Menu</button>
        </div>
      </div>
    </div>
  )
}

export default App