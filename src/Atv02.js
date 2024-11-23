import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Atv02() {

    const [homens, setHomens] = useState(0);
    const [mulheres, setMulheres] = useState(0);
    const [total, setTotal] = useState(0);

    function addHomem(){
      setHomens(homens + 1);
    }

    function addMulher(){
      setMulheres(mulheres + 1);
    }
    function rmHomem(){
      setHomens(homens - 1);
    }
    function rmMulher(){
      setMulheres(mulheres + 1);
    }
    function addTotal(){
      total = homens + mulheres;
    }
    function rmTotal(){

    }
    function limpar(){

    }
    return (
      <>
        <h2>Atividade 02</h2>

        <Link to="/">Voltar</Link>
      </>
     
    );
  }
  
  export default Atv02;