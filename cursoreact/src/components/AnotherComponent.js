const AnotherComponent = () => {

    const handleClick = () => {
        console.log('Clicou no botão!')
    }

  return (
    <div>
      <p>Segundo Componente</p>
      <button onClick={handleClick}>Evento De Click</button>
      <hr />
      <button onClick={() => console.log('Teste')}>Evento No Elemento</button>
    </div>
  );
};

export default AnotherComponent;
