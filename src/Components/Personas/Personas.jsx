import { useState, useContext } from "react";
import Saldo from "../Saldo/Saldo"
import { miContexto } from "../../App"

function Personas(props) {

  const GranTotal = useContext(miContexto)
  const [Nombre,setNombre] = useState("")
  const [Aportado,setAportado] = useState(0)
  const [Suma, setSuma] = useState (0)

  function manexadorNombre(evento)
    {
      setNombre(evento.target.value)
    }

    function manexadorAportado(evento)
    {
      setAportado(evento.target.value)
      setSuma(Suma+Aportado)
      GranTotal=Suma
    }    

    return (
      <div>
        <label for="nombre">
        Nombre:
        </label>
        <input type="text" id="nombre" onInput={manexadorNombre} value={Nombre}></input>
        
        <label for="aportado">
        Aportado:
        </label>
        <input type="text" id="aportado" onInput={manexadorAportado} value={Aportado}></input>
        <div>TOTAL:{Suma}</div>
        <div>APORTADO:{Aportado}</div>
        <Saldo Aportado={Aportado} Poner={props.Poner}></Saldo>

      </div>
    );
  }
  
  export default Personas;