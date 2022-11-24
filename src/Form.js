import { useRef, useState } from "react";


function Form() {
  const [stato, modificaStato] = useState("")
    
  
  const nome = useRef("ciao");
  function stampanome(event) {
    event.preventDefault();
    modificaStato(nome.current.value);
    console.log(nome.current.value);
  }

  return (
    <div>
      <form>
        <label>Nome: </label>
        <input ref={nome} type="text"></input>
        <button onClick={stampanome}>SUBMITTA</button>
      </form>
      <div>il tuo nome è {stato}</div>
    </div>
  );
}

export default Form;
