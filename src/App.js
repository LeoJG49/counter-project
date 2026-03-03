import './App.css';
import Buttons from './components/buttons.jsx';
import Counter from './components/counter.jsx';
import { useState } from 'react';

//We have to use useState to create a hook which will assign a state to our buttons being clicked.

function App() {
  //The first element is the value we want to use as a state
  //The second element is the function which allow us to update
  const [count, setCount] = useState(0); //The first parameter on useState() is the initial value it will have

  const handleClick = () => {
    setCount(count + 1); //We call the function and specify what will it have to do
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div className='main-container'>
        <Counter
          count={count}
        />
        <Buttons
          text="Click me!"
          isAClickable={true}
          handleClick={handleClick}
        />
        <Buttons
          text="Reset"
          isAClickable={false}
          handleClick={handleReset}
        />
      </div>
    </div>
  );
}

export default App;
