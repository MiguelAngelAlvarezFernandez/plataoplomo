import { useState } from "react";
import Saldo from "../Saldo/Saldo"

function Personas(props) {

  const [Nombre,setNombre] = useState("")
  const [Aportado,setAportado] = useState(0)

  function manexadorNombre(evento)
    {
      setNombre(evento.target.value)
    }

    function manexadorAportado(evento)
    {
      setAportado(evento.target.value)
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
        
        <Saldo Aportado={Aportado} Poner={props.Poner}></Saldo>

      </div>
    );
  }
  
  export default Personas;