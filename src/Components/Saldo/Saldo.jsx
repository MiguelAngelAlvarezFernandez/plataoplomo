import { useState, useEffect, useContext } from "react";
import si from "../../imaxes/si.jpg"
import non from "../../imaxes/non.jpg"
import { Context } from "../../App"

function Saldo(props) {

const varContexto = useContext(Context)

const [Saldo, setSaldo] = useState(0)

useEffect(() => 
  {
  setSaldo(Math.round((props.Aportado-props.Poner)*100)/100)
  
  },[props.Aportado,props.Poner]);

    return (
      <>
      {Saldo>=0 && <span>Saldo por persona: <img src={si} alt="PagoSi" width="50" height="75"/> {Saldo} €</span>}
      {Saldo<0 && <span>Saldo por persona: <img src={non} alt="PagoNon" width="50" height="75"/> {Saldo} €</span>}
      {varContexto}
      </>
    );
  }
  
  export default Saldo;