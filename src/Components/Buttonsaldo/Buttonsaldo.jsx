import { useState } from "react";

function Buttonsaldo() {

const [Saldo, setSaldo] = useState("")

function manexadorSaldo (event){
  setSaldo(event.target.value)
}

    return (
      <>
        <label>
            Saldo +/-
            <input type="text" value={Saldo} placeholder="Pagar o no" onInput={manexadorSaldo}></input>
        </label>
      </>
    );
  }
  
  export default Buttonsaldo;