import React, { useState } from 'react';
import './App.css';
import Controller from './Controller/Controller';

function App() {

  const [state, setState] = useState([
    { value: 89, name: 'VOLUME', id: 0 },
    { value: 32, name: 'TREBLE', id: 1 },
    { value: 50, name: 'MID', id: 2 },
    { value: 41, name: 'BASS', id: 3 },
  ]
  )
  const handlePlus = (currentId) => {
    setState(
      state.map(c => {
        return {
          ...c,
          value: c.id == currentId ? c.value + 1 : c.value
        }
      })
    );
  }
  const handleMinus = (currentId) => {
    setState(
      state.map(c => {
        return {
          ...c,
          value: c.id == currentId ? c.value - 1 : c.value
        }
      })
    );
  }

  const Controllers = state.map(controller => <Controller handlePlus={handlePlus} handleMinus={handleMinus} value={controller.value} name={controller.name} key={controller.id} id={controller.id} />);
  // crypto.randomUUID()

  return (
    <div className="App">
      <div className='main'>
        <div className='controllers'>
          {Controllers}
        </div>
        <form className='form'>
          <input onChange={() => { }} value="enter control name" />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
}

export default App;
