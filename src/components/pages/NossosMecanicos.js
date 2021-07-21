import React from "react";

import "./NossosMecanicos.css";
import paulao from "../images/paulao.jfif";
import tuco from "../images/tuco.jpg";

const NossosMecanicos = () => {
  return (
    <div>
      <div className="mecanicos-container">
        <h3 className="nome-mec">Paulão da regulagem</h3>
        <img src={paulao} alt="paulao" className="img-mec" />
      </div>
      <div className="mecanicos-container">
        <img src={tuco} alt="tuco" className="img-mec" />
        <h3 className="nome-mec">Tuco</h3>
      </div>
    </div>
  );
};

export default NossosMecanicos;
