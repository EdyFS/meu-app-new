import React, { useState, useEffect } from 'react';

function Relogio() {
    
        
        
  const [horaAtual, setHoraAtual] = useState('');

  const relogioAtualizado = () => {
    let data = new Date();
    let hora = data.getHours().toString().padStart(2, '0');
    let minuto = data.getMinutes().toString().padStart(2, '0');
    let segundo = data.getSeconds().toString().padStart(2, '0');
    let relogio = `${hora} : ${minuto} : ${segundo}`;
    setHoraAtual(relogio); 
  };

  useEffect(() => {
    const timer = setTimeout(relogioAtualizado, 1000); 
    return () => clearTimeout(timer); 
  }, [horaAtual]); 


      
return (
  <>
    <h3>Meu Relógio</h3>
    <p>{horaAtual}</p>
      </>
     
    );
  }
  
  export default Relogio;