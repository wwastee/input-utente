import { useRef } from "react";

function Form() {
  const nome = useRef("ciao");

  function stampanome(event) {
    event.preventDefault();
    console.log(nome.current.value);
  }

  return (
    <div>
      <form>
        <label>Nome: </label>
        <input ref={nome} type="text"></input>
        <button onClick={stampanome}>SUBMITTA</button>
      </form>
      <div>il tuo nome è {nome.current.value}</div>
    </div>
  );
}

export default Form;
