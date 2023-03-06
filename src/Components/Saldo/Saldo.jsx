import { useState, useEffect } from "react";
import si from "./si.jpg"
import non from "./non.jpg"

function Saldo(props) {

const [Saldo, setSaldo] = useState(0)

useEffect(() => {
  setSaldo(Math.round((/*props.Aportacion*/50-props.Poner)*100)/100)
}, [/*props.Aportacion,*/props.Poner]);

    return (
      <>
      {Saldo>=0 && <span>Saldo por persona: <img src={si} alt="PagoSi" width="50" height="75"/> {Saldo} €</span>}
      {Saldo<0 && <span>Saldo por persona: <img src={non} alt="PagoNon" width="50" height="75"/> {Saldo} €</span>}
      </>
    );
  }
  
  export default Saldo;