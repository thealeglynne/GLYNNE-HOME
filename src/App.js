import React from 'react';
import Dimg from '../src/imagenes/futurefigure.gif';
import Carrucel from '../src/componentes/carrucel.jsx';
import Lateral from '../src/imagenes/latyo.png';
import FondoYo from '../src/imagenes/fondoyo.png';
import Yo3 from './imagenes/yo1.png';
import Yo2 from './imagenes/yo3.png';
import Yo from '../src/imagenes/yo.png';
import Tl2 from '../src/imagenes/tl2.png';
import Gif from '../src/imagenes/gif.gif';
import Pin from './imagenes/pin.png';
import Adorno from './imagenes/adorno.png';
import Ball from './imagenes/china.png';
import Meta from './imagenes/meta.png';
import Codigo from './imagenes/1687582775264.png';
import Robot from '../src/imagenes/1687578790873.png';
import Video from '../src/imagenes/nebula_-_25047 (Original).mp4';
import './App.css';
import { FaCriticalRole, FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';



function App() {
  return  (
  
    <div className="Container">
       
      <div id="section" className="video-container">
        <div className="menu">
          <a href="https://thealeglynne.github.io/GLYNNE-INI/">herramientas</a>
          <a href="#footer">Contacto</a>
          <a href="https://thealeglynne.github.io/GLYNNE.DOCM/">Documentacion</a>
        </div>
        <hr />
        <div id="" className="info-container">
          <h1 translate="no" className="titulo">GLYNNE DEVELOPER</h1>
          <h2 translate="no" className="titulo-info">WEB DESIGN</h2>
          <hr />
          <div className='textcontainer'>
           <p className="text-infoo">
¡Bienvenido a GLYNNE, nuestra empresa de programación profesional y dinámica! Nos enorgullecemos de cumplir con todas las expectativas de nuestros clientes al proporcionar soluciones innovadoras y personalizadas. Nuestro equipo de expertos en programación se dedica a crear aplicaciones y sitios web de alta calidad que impulsan el éxito empresarial. Estamos comprometidos con la excelencia técnica, la creatividad y la satisfacción del cliente. ¡Permítenos ayudarte a convertir tus ideas en realidad!</p>
          </div>
        </div>
        <img className="robot" src={Robot} alt="robot" loading="lazy"/>
        <img className="codigo" src={Codigo} alt="Codigo" loading="lazy"/>
        <img className="Ball" src={Ball} alt="Ball" loading="lazy"/>
        <img className="adorno" src={Adorno} alt="adorno" loading="lazy"/>
        <img className="Meta" src={Meta} alt="Meta" loading="lazy"/>
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div id="section" className="section2">
        <div className="gif-container">
          <img className="Tl2" src={Tl2} alt="Tl2" loading="lazy"/>
          <img className="Gif" src={Gif} alt="Gif" loading="lazy"/>
          <p className="presentacion"> En GLYNNE, nuestra misión es proporcionar soluciones digitales de vanguardia para mejorar tu presencia en línea. Con una mezcla única de creatividad, experiencia técnica y pasión por el diseño web, estamos listos para llevar tu negocio al siguiente nivel. <br/>

Nuestro talentoso equipo de desarrolladores y diseñadores se dedica a crear experiencias web cautivadoras y altamente funcionales. Ya sea que necesites un sitio web elegante y moderno, una aplicación web interactiva o una tienda en línea de alto rendimiento, estamos comprometidos a ofrecer soluciones personalizadas que superen tus expectativas.</p>
          <img className="Ball" src={Ball} alt="Ball" loading="lazy"/>
        </div>
      </div>
      <div id="section" className="seccion3">
        <img className="yo" src={Yo} alt="yo"  loading="lazy"/>
        <img className="yo4" src={FondoYo} alt="yo" loading="lazy"/>
        <img className="yo2" src={Yo2} alt="yo" loading="lazy"/>
        <img className="yo3" src={Yo3} alt="yo" loading="lazy"/>
        <img className="pin2" src={Pin} alt="pin" loading="lazy"/>
        <div className='yoTexto'>
          <p className="infoYo">Como desarrollador e ingeniero de software experimentado, cuento con más de 3 años de experiencia profesional en el desarrollo web. Más allá de simplemente programar, me apasiona traspasar límites y ofrecer soluciones innovadoras que impulsen el éxito de mis clientes. Como líder de mi propia startup de desarrollo de software, siempre obtengo resultados excepcionales y supero expectativas. Trabajo de cerca con mis clientes, transformando sus necesidades en soluciones prácticas y de alto rendimiento. Mi compromiso con la calidad y atención al detalle fomenta relaciones sólidas y duraderas. Juntos, llevaremos la visión de tu negocio al siguiente nivel en el mundo digital.</p>
          </div>
        <img className="lateral" src={Lateral} alt="Lateral" loading="lazy"/>
      </div>
      <div id='Documentation' className="seccion4">
        <Carrucel />
      </div>
      <div className="seccion5">
        <img className="tdimg" src={Dimg} alt="Gif" loading="lazy"/>
        <div className="card3d"></div>
        <div className="Sobrecard3d">
          <p className="d3Text">
            
          En esta sección de mi web, voy a explicar detalladamente las herramientas de programación con las que trabajo en comercio electrónico, centrándome en React.
          </p>
          <div className="conBot3d">
            <div id='tressDBOTON' className="botonesContainer001">
              <button className="ov-btn-grow-skew001">
                <a className="TextGitHub001" href="https://thealeglynne.github.io/GLYNNEhome/">
                  <FaCriticalRole className="icon" />
                  
                  TOOLS
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id='footer' className='footer'>
        <div className="cardFOOTER">
          <div className="SobrecardFOOTER">
            <div className="footerLinks">
              <a href="https://www.linkedin.com/in/alexander-quiroga-90a781245/a" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="footerIcon" />
                lINKEDIN
              </a>
              <a href="https://github.com/thealeglynne" target="_blank" rel="noopener noreferrer">
                <FaGithub className="footerIcon" />
                GITHUB
              </a>
              <a href="https://www.instagram.com/glynne1224/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="footerIcon" />
                INSTAGRAM
              </a>
              <a href="https://www.facebook.com/profile.php?id=100094430292906" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="footerIcon" />
                FACEBOOK
              </a>
              <a href="https://wa.me/+573142142188" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="footerIcon" />
                (+57) 3142142188
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

