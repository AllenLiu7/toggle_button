import React, { useState } from 'react';
import './App.css';
import Switch from './components/Switch'
import UncontroledSwitch from './components/UncontroledSwitch';



function App() {
  const [value, setValue] = useState(false)

  return (
    <div className="App">
    <Switch 
      isOn={value}
      handleToggle={() => {setValue(!value)}}
      onColor={'#06D6A0'}
      disabled={false}
  />
    <UncontroledSwitch/>
     
    </div>
  );
}

export default App;


