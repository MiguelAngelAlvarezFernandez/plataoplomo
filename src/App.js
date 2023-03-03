import './App.css';
import { useEffect, useState } from 'react'
import Saldo from './Components/Saldo/Saldo.jsx';
import Personas from './Components/Personas/Personas.jsx'

function App() {

  const [Total, setTotal] = useState(0);
  const [Persoas, setPersoas] = useState(1);
  const [PagoPersoa, setPagoPersoa] = useState(0)

  function manexadorTotal (event){
    setTotal(event.target.value)
  }

  function manexadorPersoas (event){
    setPersoas(event.target.value)
  }

  useEffect(() => {
    setPagoPersoa(Math.round((Total/Persoas)*100)/100)
  }, [Total,Persoas]);

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
      <div>
        {PagoPersoa} €
      </div>
      <Saldo Poner={PagoPersoa}></Saldo>
      <Personas> Xente={Persoas}</Personas>

    </>
  );
}

export default App;
