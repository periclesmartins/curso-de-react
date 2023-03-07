import AnotherComponent from "./AnotherComponent";

function FirstComponent() {

  //comentário.
  const name = "Péricles"
  return (
    <div className='firstcomponent'>
        {/*comentário no jsx*/}
      <p>Primeiro Componente</p>
      {2+2}
      <p>Nome: {name}</p>
      <AnotherComponent/>
    </div>
  );
}

export default FirstComponent;
