import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../estilos/carrucel.css";
import Boton from "../componentes/boton";

import HtmlRobot from "../imagenes/htmlimg.png";
import CssR from "../imagenes/Cssrimg.png";
import JsR from "../imagenes/JavaScriptimg.png";
import NodeRo from "../imagenes/nodejsimg.png";
import ReactRo from "../imagenes/reactimg.png";

import Html from "../imagenes/backhtml.jpg";
import CSS from "../imagenes/bac:css.jpg";
import Js from "../imagenes/backJS2.jpg";
import ReactJS from "../imagenes/backReactJS.jpg";
import NodeJS from "../imagenes/backNodeJS.jpg";

function Carrucel() {
  return (
    <div className="carousel-wrapper">
      <Carousel className="carousel" indicators={false}>
        <Carousel.Item>
          <img
            id="htmlB"
            className="d-block2 w-100"
            src={Html}
            alt="html"
          />
          <div className="htmlR">
            <img
              id="htmlR"
              className="d-block2 htmlRo"
              src={HtmlRobot}
              alt="html"
            />
          </div>
          <div className='card'></div>
          <div className='Sobrecard'>
            <p className="jsxText">JSX, the language used in Glynne, allows you to create robust and dynamic structures for your web pages and programs. With JSX, you will develop swiftly and efficiently, generating clean and highly readable code. Harness the power of JSX in Glynne to create interactive and functional experiences in your web projects and applications.</p>
            <Boton />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="css"
            className="d-block2 w-100"
            src={CSS}
            alt="CSS"
          />
          <div id='CssR' className="CssR">
            <img
              id="CssRo"
              className="d-block2 CssRo"
              src={CssR}
              alt="html"
            />
          </div>
          <div className='card2'></div>
          <div className='Sobrecard2'>
            <p className="jsxText">At Glynne, we leverage Adobe Illustrator and CSS along with other dependencies to craft stunning visual interfaces. Our expert team combines the precision of vector design with the powerful styling capabilities of CSS to deliver visually captivating experiences in your projects</p>
            <Boton />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="js"
            className="d-block2 w-100"
            src={Js}
            alt="JavaScript"
          />
          <div className="JsR">
            <img
              id="JsR"
              className="d-block2 JsRo"
              src={JsR}
              alt="html"
            />
          </div>
          <div className='card3'></div>
          <div className='Sobrecard3'>
          /GLYNNE.CO  <p className="jsxText">At Glynne, we harness the power of JavaScript to bring interactivity and dynamic functionality to your visual interfaces. Our team utilizes JavaScript along with other essential tools and libraries to create engaging and responsive user experiences that elevate your projects to the next level.</p>
            <Boton />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="react"
            className="d-block2 w-100"
            src={ReactJS}
            alt="react"
          />
          <div className="ReactR">
            <img
              id="htmlR"
              className="d-block2 ReactRo"
              src={ReactRo}
              alt="html"
            />
          </div>
          <div className='card4'></div>
          <div className='Sobrecard4'>
            <p className="jsxText">At Glynne, we harness the power of React and JavaScript to bring interactivity and dynamic functionality to your visual interfaces. Our expert team combines these technologies with essential tools and libraries to create captivating and highly responsive user experiences, taking your projects to the next level.</p>
            <Boton />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="NodeJS"
            className="d-block2 w-100"
            src={NodeJS}
            alt="NodeJs"
          />
          <div className="NodeR">
            <img
              id="Node"
              className="d-block2 NodeRo"
              src={NodeRo}
              alt="html"
            />
          </div>
          <div className='card5'></div>
          <div className='Sobrecard5'>
            <p className="jsxText">En Glynne, aprovechamos Node.js para crear aplicaciones web eficientes y escalables en el lado del servidor. Nuestro equipo experto utiliza JavaScript y Node.js para ofrecer soluciones rápidas y flexibles que se adaptan a sus necesidades. Potenciamos sus proyectos web con velocidad y confiabilidad.</p>
            <Boton />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrucel;
