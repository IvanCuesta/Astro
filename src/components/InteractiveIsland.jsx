import React, { useState } from 'react';

const InteractiveIsland = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Presiona los botones para interactuar.");

  const increment = () => {
    setCount(count + 1);
    setMessage("¡Has incrementado el contador!");
  };

  const decrement = () => {
    setCount(count - 1);
    setMessage("¡Has decrementado el contador!");
  };

  return (
    <div>
      <h2>Contador Interactivo</h2>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <p>{message}</p>
    </div>
  );
};

export default InteractiveIsland;
