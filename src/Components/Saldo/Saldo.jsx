import { useState, useEffect } from "react";
import flechaarriba from "./flechaarriba.png"
import flechaabajo from "./flechaabajo.png"

function Saldo(props) {

const [Saldo, setSaldo] = useState("")

useEffect(() => {
  setSaldo(Math.round((/*props.Aportacion*/50-props.Poner)*100)/100)
}, [/*props.Aportacion,*/props.Poner]);

    return (
      <>
      {Saldo>=0 && <span>Saldo por persona: <img src={flechaarriba} alt="PagoOK" width="15" height="15"/> {Saldo} €</span>}
      {Saldo<0 && <span>Saldo por persona: <img src={flechaabajo} alt="PagoNoOK" width="15" height="15"/> {Saldo} €</span>}
      </>
    );
  }
  
  export default Saldo;