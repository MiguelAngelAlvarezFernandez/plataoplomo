import './App.css';
import { useEffect, useState } from 'react'
import Saldo from "./Components/Saldo/Saldo" 


function App() {

  const [Total, setTotal] = useState(0);
  const [Persoas, setPersoas] = useState(1);

  const [PagoPersoa, setPagoPersoa] = useState(0);

  function manexadorTotal (event){
    setTotal(event.target.value)
  }

  function manexadorPersoas (event){
    setPersoas(event.target.value)
  }

 
  useEffect(
  function calcPagoPersoa () {

    setPagoPersoa(Math.round((Total/Persoas)*100)/100)
  },
  [Total, Persoas]
  )



  return (
    <>
      <label for="total">Total a pagar:</label>
      <input type="text" id='total' onInput={manexadorTotal}></input>
      
      <p>{Total}</p>

      <label for="pax"> Nº de Persoas:</label>
      <input type="range" id="pax" name="pax" min="1" max="20" onInput={manexadorPersoas}/>
      <div>
      {Persoas}
      </div>

      <p>Con useEffect {PagoPersoa}</p>

    

      <Saldo/>

      
    </>
  );
}

export default App;
