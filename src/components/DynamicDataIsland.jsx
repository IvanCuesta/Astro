import React, { useState, useEffect } from 'react';

const DynamicDataIsland = () => {
  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Establecer que estamos en el cliente
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Solo ejecutar en el cliente
    if (isClient) {
      const interval = setInterval(() => {
        setData(prevData => [...prevData, `Dato nuevo ${prevData.length + 1}`]);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isClient]);

  // Mostrar un texto inicial hasta que el componente se hidrate en el cliente
  if (!isClient) {
    return <div>Cargando datos dinámicos...</div>;
  }

  return (
    <div>
      <h2>Datos Dinámicos</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicDataIsland;
