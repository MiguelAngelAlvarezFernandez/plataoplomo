import './App.css';
import { useEffect, useState } from 'react'
import Personas from './Components/Personas/Personas.jsx'

function App() {

  const [Total, setTotal] = useState(0)
  const [Persoas, setPersoas] = useState(0)
  const [PagoPersoa, setPagoPersoa] = useState(0)
  const [DatosInvitados, setDatosInvitados] = useState ([])

  function manexadorTotal (event){
    setTotal(event.target.value)
  }

  function manexadorPersoas (event){
    setPersoas(event.target.value)
  }

  useEffect(() => {
    if (Total===0 || Persoas===0){setPagoPersoa(0)} else
    {setPagoPersoa(Math.round((Total/Persoas)*100)/100)}
  }, [Total,Persoas]);

  useEffect(
    ()=>{
      const DatosComensales=[]
      let Contador = 0
      while(Contador < Persoas)
      {DatosComensales.push(<Personas Poner={PagoPersoa} Xente={Persoas}></Personas>)
      Contador = Contador+1
      }
      setDatosInvitados(DatosComensales)
    },
    [PagoPersoa]
  )


   return (
    <>
      <label for="total">Total a pagar:</label>
      <input type="text" id='total' onInput={manexadorTotal}></input>
      <br></br>
      <label for="pax"> Nº de Persoas:</label>
      <input type="range" id="pax" name="pax" min="0" max="20" value={Persoas} onInput={manexadorPersoas}/><span>{Persoas}</span>
      <div> Pago por persona: {PagoPersoa} € </div>
      {/* <Saldo Poner={PagoPersoa}></Saldo> */}
      {/*<Personas Poner={PagoPersoa} Xente={Persoas}></Personas>*/}

      <div>{DatosInvitados}</div>

    </>
  );
}

export default App;
