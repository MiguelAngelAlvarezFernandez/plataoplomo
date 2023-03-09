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
    setPersoas(parseInt(event.target.value))
  }

  useEffect(() => {
    setPagoPersoa( Persoas===0 ? 0 : Total/Persoas )
  }, [Total,Persoas]);

  useEffect(
    ()=>{
      const DatosComensales=[]
      let Contador = 0
      while(Contador < Persoas)
      {DatosComensales.push(<Personas Poner={PagoPersoa} Xente={Persoas} key={Contador}></Personas>)
      Contador = Contador+1
      }
      setDatosInvitados(DatosComensales)
    },
    [PagoPersoa]
  )

   return (

      <>
      <label for="total">Total a pagar: </label>
      <input type="number" className="inputTotal" id='total' onInput={manexadorTotal}></input>
      <br></br>
      <label for="pax"> Nº de Persoas: </label>
      <input type="range" id="pax" name="pax" min="0" max="24" value={Persoas} onInput={manexadorPersoas}/><span>{Persoas}</span>
      <div> Pago por persona: {PagoPersoa.toFixed(2)} € </div>
      <div className='clientes'>{DatosInvitados}</div>
      </>
  
    );
}

export default App;