import './App.css';
import { useState } from 'react'



function App() {

  const [Total, setTotal] = useState(0);
  const [Persoas, setPersoas] = useState(1);
  
  function manexadorTotal (event){
    setTotal(event.target.value)
  }

  function manexadorPersoas (event){
    setPersoas(event.target.value)
  }
   return (
    <>
      <label for="total">Total a pagar:</label>
      <input type="text" id='total' onInput={manexadorTotal}></input>
      <div>
      {Total}
      </div>

      <label for="pax"> Nº de Persoas:</label>
      <input type="range" id="pax" name="pax" min="1" max="20" value={Persoas} onInput={manexadorPersoas}/>
      <div>
      {Persoas}
      </div>

    </>
  );
}

export default App;
