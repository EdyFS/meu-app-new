import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './Atv02.css';

function Atv02() {

    const [homens, setHomens] = useState(0);
    const [mulheres, setMulheres] = useState(0);
    const [total, setTotal] = useState(0);
    const imghomem = {
      imageUrl :'https://cdn-icons-png.flaticon.com/512/3439/3439472.png',
    }
    const imgmulher = {
      imageUrl :'https://cdn-icons-png.flaticon.com/512/103/103277.png',
    }

    function addHomem(){
      setHomens(homens + 1);
      setTotal(total + 1);
    }

    function addMulher(){
      setMulheres(mulheres + 1);
      setTotal(total + 1);
    }
    function rmHomem(){
      setHomens(homens - 1);
      setTotal(total - 1);
    }
    function rmMulher(){
      setMulheres(mulheres - 1);
      setTotal(total - 1);
    }
    function addTotal(){
      total = homens + mulheres;
    }
    function rmTotal(){

    }
    function limpar(){
      setHomens(0);
      setMulheres(0);
      setTotal(0);
    }
    return (
      <>
        <div className="contador">
          <h2>Atividade 02</h2>
          <div className="topo">
            <div className="total">
              <h3>Total</h3>
              <div className="valor">{total}</div>
            </div>
            <div>
              <button onClick={limpar}>Limpar</button>
            </div>
          </div>
          <div className="pessoas">
            <div className="baixo">
              <img src="imghomem.imageUrl" alt="Homem"></img>
              <button onClick={addHomem} className="mais">+</button>
              <button onClick={rmHomem} className="menos">-</button>
              <h3>Homens</h3>
              <div className="valor">{homens}</div>
            </div>
            <div className="baixo">
              <img src="imgmulher.imageUrl" alt="Mulher"></img>
              <button onClick={addMulher} className="mais">+</button>
              <button onClick={rmMulher} className="menos">-</button>
              <h3>Mulheres</h3>
              <div className="valor">{mulheres}</div>
            </div>
          </div>
        </div>
        <Link to="/">Voltar</Link>
      </>
     
    );
  }
  
  export default Atv02;