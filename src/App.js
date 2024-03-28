import React, { useEffect, useState } from 'react';
import './App.css';
import Controller from './Controller/Controller';

function App() {

  const [state, setState] = useState([
    { value: 91, name: 'VOLUME', id: crypto.randomUUID() },
    { value: 32, name: 'TREBLE', id: crypto.randomUUID() },
    { value: 50, name: 'MID', id: crypto.randomUUID() },
    { value: 41, name: 'BASS', id: crypto.randomUUID() },
  ]
  )

  const [inputValue, setInputValue] = useState('')


  const switchDown = (currentIndex) => {
    let stateCopy = [...state];

    [stateCopy[currentIndex], stateCopy[currentIndex + 1]] = [stateCopy[currentIndex + 1], stateCopy[currentIndex]];

    setState(stateCopy)
  }
  const switchUp = (currentIndex) => {
    let stateCopy = [...state];

    [stateCopy[currentIndex], stateCopy[currentIndex - 1]] = [stateCopy[currentIndex - 1], stateCopy[currentIndex]];

    setState(stateCopy)
  }


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

  const onFormSubmit = (e) => {
    setState([
      ...state,
      { value: 50, name: inputValue, id: crypto.randomUUID() }
    ])
    e.preventDefault();
    setInputValue('')
  }

  const Controllers = state.map((controller, index) => <Controller handlePlus={handlePlus} handleMinus={handleMinus} value={controller.value} name={controller.name} key={crypto.randomUUID()} id={controller.id} index={index} state={state} switchDown={switchDown} switchUp={switchUp}/>);

  return (
    <div className="App">
      <div className='main'>
        <div className='controllers'>
          {Controllers}
        </div>
        <form onSubmit={onFormSubmit} className='form'>
          <input className={`inputText ${inputValue.length === 7 ? 'inputErr' : ''}`} type='text' onChange={(e) => setInputValue(e.target.value.toUpperCase())} value={inputValue} placeholder='Enter Control Name' maxLength="7" />
          <input className="inputSubmit" type='submit' value="Add" />
        </form>
      </div>
    </div>
  );
}

export default App;
