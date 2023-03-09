import { useState } from "react";
import Saldo from "../Saldo/Saldo"
import styles from "./Personas.module.css"

function Personas() {

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
      <>
      <div className={styles.todoenteiro}>
      <div className={styles.enteiro}>
        <label for="nombre">
        Nombre:
        </label>
        <input type="text" id="nombre" onInput={manexadorNombre} value={Nombre} size="9"></input>
      </div>
      <div>  
        <label for="aportado">
        Aportado:
        </label>
        <input type="text" id="aportado" onInput={manexadorAportado} value={Aportado} size="2"></input>
      </div>

      <div>  
        <Saldo Aportado={Aportado}></Saldo>

      </div>
      </div>
      </>
    );
  }
  
  export default Personas;