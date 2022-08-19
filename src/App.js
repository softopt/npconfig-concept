import React from "react";

import InputBox from "./InputBox";
import TraceLog from "./TraceLog";

import './App.css'

const { ipcRenderer} = window.require('electron');



function App() {

  function clickHandler() {
    ipcRenderer.send('npconfig', 'doit');
    console.log('sending message');
  }

  ipcRenderer.on('npconfig', (event, arg) => {
    console.log(arg);
  });

  return (
    <div className='App'>
      <InputBox label={'Paul'} />
      <InputBox label={'Dick'} />
      <InputBox label={'Harry'} />
      <TraceLog/>
      <button onClick={clickHandler}>Run</button>
    </div>
  );
}

export default App;