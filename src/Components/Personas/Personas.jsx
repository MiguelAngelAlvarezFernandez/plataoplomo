import { useState } from "react";
import Saldo from "../Saldo/Saldo"
import styles from "./Personas.module.css"

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
      <>
      <div className={styles.todoenteiro}>
      <div className={styles.enteiro}>
        <label for="nombre">
        Nombre:
        </label>
        <input type="text" id="nombre" onInput={manexadorNombre} value={Nombre} size="8"></input>
      </div>
      <div>  
        <label for="aportado">
        Aportado:
        </label>
        <input type="number" className={styles.InputAportado} id="aportado" onInput={manexadorAportado} value={Aportado} ></input>
      </div>

      <div className={styles.Aportado} >  
        <Saldo Aportado={Aportado} Poner={props.Poner}></Saldo>

      </div>
      </div>
      </>
    );
  }
  
  export default Personas;