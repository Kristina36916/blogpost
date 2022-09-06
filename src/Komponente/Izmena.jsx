
import React, { useState, useEffect } from 'react';
const Izmena = () => {
  const [message, setMessage] = useState('Zdravo! Kako ste danas? Da li ste dobro inače?');

  useEffect(() => {
    console.log('trigger use effect hook');

    setTimeout(() => {
      setMessage("Ako se nalazite na našem sajtu, imate neki problem. Nadamo se da vam možemo pomoći!");
    }, 3000)
  })

  return <h1>{message}</h1>
};

export default Izmena;