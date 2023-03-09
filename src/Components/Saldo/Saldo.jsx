import { useState, useEffect, useContext } from "react";
import {PagoContext} from "../../App";
import si from "../../imaxes/si.jpg";
import non from "../../imaxes/non.jpg";

function Saldo(props) {

const PagoPersoa = useContext(PagoContext)

const [Saldo, setSaldo] = useState(0)

useEffect(() => 
  {
  setSaldo(Math.round((props.Aportado-PagoPersoa)*100)/100)
  
  },[props.Aportado, PagoPersoa]);

    return (
      <>
      {Saldo>=0 && <span>Saldo: {Saldo.toFixed(2)+" € "}<img src={si} alt="PagoSi" width="33" height="50"/> </span>}
      {Saldo<0 && <span>Saldo: {Saldo.toFixed(2)+" € "}<img src={non} alt="PagoNon" width="33" height="50"/> </span>}
      </>
    );
  }
  
  export default Saldo;