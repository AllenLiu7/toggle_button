import React, { useState } from 'react';
import Switch from './components/Switch'
import UncontroledSwitch from './components/UncontroledSwitch';



function App() {
  const [value, setValue] = useState(false)

  return (
    <div className="App">
    <Switch 
      isOn={value}
      handleToggle={() => {setValue(!value)}}
      color={'#1E90FF'}
      disabled={false}
  />
    <UncontroledSwitch color={'#1E90FF'} disabled={false}/>
     
    </div>
  );
}

export default App;


