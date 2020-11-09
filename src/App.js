import React,{useState}  from 'react';
import './App.css';
import {Button} from './components/Button';
import {CardApp} from './components/GitCard'
function App() {
  const [couter, setCounter] = useState(0);
  const clickHandler=(increment)=>setCounter(couter+increment);
  return (
    <div className="App">
      {/* <h1>this is app component</h1>
        <Button clickHandler={clickHandler} message={couter} increment={1}/> 
        <Button clickHandler={clickHandler} message={couter} increment={5}/>  */}
        <CardApp></CardApp>

    </div>
  );
}

export default App;
