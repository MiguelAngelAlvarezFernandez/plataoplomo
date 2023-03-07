import './App.css';
import { useEffect, useState, createContext } from 'react'
import Personas from './Components/Personas/Personas.jsx'

export const Context = createContext()

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
    setPagoPersoa( Persoas===0 ? 0 : Math.round((Total/Persoas)*100)/100 )
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

    <Context.Provider value={PagoPersoa}>
      <>
      <label for="total">Total a pagar: </label>
      <input type="text" id='total' onInput={manexadorTotal}></input>
      <br></br>
      <label for="pax"> Nº de Persoas: </label>
      <input type="range" id="pax" name="pax" min="0" max="20" value={Persoas} onInput={manexadorPersoas}/><span>{Persoas}</span>
      <div> Pago por persona: {PagoPersoa} € </div>
      <div>{DatosInvitados}</div>
      </>
    </Context.Provider>
    );
}

export default App;