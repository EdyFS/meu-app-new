import React, { useState, useEffect } from 'react';

function Relogio() {
    return (
      <>
        <h3>Meu Relógio</h3>
        
        function RelogioAtualizado() {
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
    <div style={styles.relogioContainer}>
      <h1>Relógio Atualizado</h1>
      <p style={styles.hora}>{horaAtual}</p>
    </div>
  );
}
      
    
      </>
     
    );
  }
  
  export default Relogio;