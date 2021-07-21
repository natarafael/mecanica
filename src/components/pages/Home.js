import React from "react";
import Container from "../Container";

import fixingcar from "../images/fixingcar.jpg";
import oil from "../images/oil.jpg";
import pneus from "../images/pneus.jpg";
import balance from "../images/balance.jpg";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <img className="image-home" src={fixingcar} alt="consertando carro" />
        <div className="horarios">
          <h4>HORÁRIOS DE ATENDIMENTO</h4>
        </div>
      </div>
      <div>
        <h1>Serviços</h1>
        <hr className="line" />
        <Container title={"Troca de óleo"} img={oil} />
        <Container title={"Troca de pneus"} img={pneus} />

        <Container title={"Balanceamentos"} img={balance} />
      </div>
    </>
  );
};

export default Home;
