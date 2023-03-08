import { useState, useEffect } from "react";
import si from "../../imaxes/si.jpg"
import non from "../../imaxes/non.jpg"

function Saldo(props) {

const [Saldo, setSaldo] = useState(0)

useEffect(() => 
  {
  setSaldo(Math.round((props.Aportado-props.Poner)*100)/100)
  
  },[props.Aportado,props.Poner]);

    return (
      <>
      {Saldo>=0 && <span>Saldo: {Saldo.toFixed(2)+" € "}<img src={si} alt="PagoSi" width="33" height="50"/> </span>}
      {Saldo<0 && <span>Saldo: {Saldo.toFixed(2)+" € "}<img src={non} alt="PagoNon" width="33" height="50"/> </span>}
      </>
    );
  }
  
  export default Saldo;