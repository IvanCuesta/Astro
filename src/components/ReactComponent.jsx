import React, { useState, useEffect } from 'react';

const HeavyImageComponent = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Simula una tarea pesada de carga de imagen
    const img = new Image();
    img.src = "https://via.placeholder.com/2000"; // URL de una imagen pesada
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div>
      <h2>Imagen cargada</h2>
      {imageLoaded ? (
        <img src="https://via.placeholder.com/2000" alt="Heavy Image" />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

export default HeavyImageComponent;
