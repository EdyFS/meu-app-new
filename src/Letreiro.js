import React, { useState, useEffect } from 'react';

function Letreiro() {
    

        
            const mensagem = "Conheça a Fatec";
            const [texto, setTexto] = useState('');
            const [indice, setIndice] = useState(0);
            

            useEffect(() => {
                const intervalo = setInterval(() => {
                  setTexto((prevTexto) => {
                    if (prevTexto.length === mensagem.length) {
                      return ''; 
                    }
                    return mensagem.slice(0, prevTexto.length + 1); 
                  });
            
                  setIndice((prevIndice) => {
                    
                    if (prevIndice === mensagem.length) {
                      return 0; 
                    }
                    return prevIndice + 1;
                  });
                }, 150); 
            
                return () => clearInterval(intervalo); 
              }, [mensagem]);

              
            
            return (
              <>
                <h3>Meu Letreiro</h3>
                <p>{texto}</p>
      </>
     
    );
  }
  
  export default Letreiro;