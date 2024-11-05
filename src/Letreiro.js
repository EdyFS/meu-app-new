import React, { useState, useEffect } from 'react';

function Letreiro() {
    return (
      <>
        <h3>Meu Letreiro</h3>

        function Letreiro({ mensagem }) {
            
            const [texto, setTexto] = useState('');
            const [indice, setIndice] = useState(0);
            const mensagem = "Conheça a Fatec";

            useEffect(() => {
                const intervalo = setInterval(() => {
                  setTexto((prevTexto) => {
                    if (prevTexto.length === texto.length) {
                      return ''; 
                    }
                    return texto.slice(0, prevTexto.length + 1); 
                  });
            
                  setIndice((prevIndice) => {
                    
                    if (prevIndice === texto.length) {
                      return 0; 
                    }
                    return prevIndice + 1;
                  });
                }, 150); 
            
                return () => clearInterval(intervalo); 
              }, [texto]);

              return (
                <div style={styles.container}>
                  <h1 style={styles.letreiro}>{texto}</h1>
                </div>
              );
            }

      </>
     
    );
  }
  
  export default Letreiro;