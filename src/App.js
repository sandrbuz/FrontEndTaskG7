import React, { useState } from 'react';
import './App.css';
import Controller from './Controller/Controller';

function App() {


  return (
    <div className="App">
      <div className='main'>
        <div className='controllers'>
          <Controller/>
          <Controller/>
          <Controller/>
          <Controller/>
        </div>
        <form className='form'>
          <input value="enter control name" />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
}

export default App;
