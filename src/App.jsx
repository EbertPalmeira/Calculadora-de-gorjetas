import { useState } from "react";
import imgIcon from "./images/icon-dollar.svg";
import personIcon from "./images/icon-person.svg";

import "./App.css";

function App() {
  const [desconto, setDesconto] = useState("");
  const [pessoas, setPessoas] = useState("");
  const [total, setTotal] = useState("");
  const [subtotal, setSubTotal] = useState("");
  const handleChange = (e) => {
    setDesconto(e.target.value);
  };
  const handlePessoas = (e) => {
    setPessoas(e.target.value);
  };

  const totalPagamento = () => {
    if (pessoas == 0 || desconto === "") {
      alert("Por favor,coloque um valor valido");
    }
    const taxa = document.getElementById("porcentagem").value;
    const total = (desconto * taxa) / pessoas;
    const subtotal = total * pessoas;
    setTotal(total);
    setSubTotal(subtotal);
    setDesconto("");
    setPessoas("");
  };

  return (
    <>
      <p className="calculadora">Calculadora de Gorjetas</p>
      <div className="container">
        <div className="conta">
          <form>
            <label>Conta</label>
            <div className="precos">
              <button>
                <img src={imgIcon} alt="" />
              </button>
              <input
                min="0"
                value={desconto}
                onChange={handleChange}
                required
                className="input"
                type="number"
                placeholder="Total conta"
              />
            </div>
          </form>

          <div className="tipo-porcentagem">
            <p>Selecione o tipo de % </p>
            <select id="porcentagem">
              <option value="0.05">5%</option>
              <option value="0.1">10%</option>
              <option value="0.15">15%</option>
              <option value="0.25">25%</option>
              <option value="0.5">50%</option>
              <option value="0.75">75%</option>
            </select>
          </div>
          <p className="pessoa">Numero de pessoas</p>
          <div className="precos ">
            <button>
              <img src={personIcon} alt="" />
            </button>

            <input
              required
              min="0"
              placeholder="Número de pessoas"
              type="number"
              onChange={handlePessoas}
              value={pessoas}
            />
          </div>
        </div>

        <div className="total">
          <div className="conta-total">
            <div>
              <p>Conta</p>
              <span>/ gorjeta por pessoa</span>
            </div>
            <p>${total}</p>
          </div>
          <div className="subtotal">
            <div>
              <p>Subtotal</p>
              <span>/ total gorjeta </span>
            </div>
            <p>$ {subtotal}</p>
          </div>
        </div>
        <div>
          <button className="calcular" onClick={totalPagamento}>
            CALCULAR
          </button>
        </div>
        {/* fim container */}
      </div>
    </>
  );
}

export default App;
