import React from 'react';
import { FaCriticalRole } from 'react-icons/fa';
import "../estilos/boton.css";

const BotonConIcono = () => {
  return (
    <div className="botonesContainer">
      <button className="ov-btn-grow-skew2">
        <a className="TextGitHub" href="../componentes/documentacion.jsx/#seccion">
          <FaCriticalRole className="icon" />
          DOCUMENTATION
        </a>
      </button>
    </div>
  );
};

export default BotonConIcono;
