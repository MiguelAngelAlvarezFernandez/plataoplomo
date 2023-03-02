import './App.css';
import { useState, useEffect } from 'react'



function App() {

  const [Total, setTotal] = useState(0);
  const [Persoas, setPersoas] = useState(1);
  const [Pago,setPago] = useState(1);

  function manexadorTotal (event){
    setTotal(event.target.value)
    /*setPago(Total/Persoas)*/ 
  }

  function manexadorPersoas (event){
    setPersoas(event.target.value)
    /*setPago(Total/Persoas)*/
  }

  useEffect(() => {Total/Persoas}, [Total, Persoas]);

   return (
    <>
      <label for="total">Total a pagar:</label>
      <input type="text" id='total' onInput={manexadorTotal}></input>
      <div>
      {Total}
      </div>

      <label for="pax"> Nº de Persoas:</label>
      <input type="range" id="pax" name="pax" min="1" max="20" onInput={manexadorPersoas}/>
      <div>
      {Persoas}
      </div>
      {(Pago)}

    </>
  );
}

export default App;
