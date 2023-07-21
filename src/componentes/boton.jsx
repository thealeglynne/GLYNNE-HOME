import React from 'react';
import { FaCriticalRole } from 'react-icons/fa';
import "../estilos/boton.css";

const BotonConIcono = () => {
  return (
    <div className="botonesContainer">
      <button className="ov-btn-grow-skew2">
        <a className="TextGitHub" href="https://thealeglynne.github.io/GLYNNE.DOCM/">
          <FaCriticalRole className="icon" />
          DOCUMENTACION
        </a>
      </button>
    </div>
  );
};

export default BotonConIcono;
