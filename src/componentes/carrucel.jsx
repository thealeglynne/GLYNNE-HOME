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
import CSS from "../imagenes/bac-css.jpg";
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
            loading="lazy"
            height="400"
          />
          <div className="htmlR">
            <img
              id="htmlR"
              className="d-block2 htmlRo"
              src={HtmlRobot}
              alt="html"
              loading="lazy"
            height="400"
            />
          </div>
          <div className='card'></div>
          <div className='Sobrecard'>
            <p className="jsxText">En Glynne, el lenguaje JSX potencia la creación de páginas y programas sólidos, ágiles y funcionales con un código altamente legible, permitiendo experiencias interactivas y cautivadoras en tus proyectos y aplicaciones web.</p>
            <Boton />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="css"
            className="d-block2 w-100"
            src={CSS}
            alt="CSS"
            loading="lazy"
            height="400"
          />
          <div id='CssR' className="CssR">
            <img
              id="CssRo"
              className="d-block2 CssRo"
              src={CssR}
              alt="html"
              loading="lazy"
            height="400"
            />
          </div>
          <div className='card2'></div>
          <div className='Sobrecard2'>
            <p className="jsxText">
En Glynne, utilizamos Adobe Illustrator y CSS, junto con otras dependencias, para crear impresionantes interfaces visuales. Nuestro equipo de expertos combina la precisión del diseño vectorial con las potentes capacidades de estilo de CSS para ofrecer experiencias visualmente cautivadoras en tus proyectos.</p>
            <Boton />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="js"
            className="d-block2 w-100"
            src={Js}
            alt="JavaScript"
            loading="lazy"
            height="400"
          />
          <div className="JsR">
            <img
              id="JsRo"
              className="d-block2 JsRo"
              src={JsR}
              alt="html"
            />
          </div>
          <div className='card3'></div>
          <div className='Sobrecard3'>
          <p className="jsxText">el poder de JavaScript  brinda interactividad y funcionalidad dinámica a tus interfaces visuales. Nuestro equipo utiliza JavaScript junto con otras herramientas y bibliotecas esenciales para crear experiencias de usuario atractivas y receptivas que llevan tus proyectos al siguiente nivel.</p>
            <Boton />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="react"
            className="d-block2 w-100"
            src={ReactJS}
            alt="react"
            loading="lazy"
            height="400"
          />
          <div className="ReactR">
            <img
              id="htmlR"
              className="d-block2 ReactRo"
              src={ReactRo}
              alt="html"
              loading="lazy"
            height="400"
            />
          </div>
          <div className='card4'></div>
          <div className='Sobrecard4'>
            <p className="jsxText">Nuestro enfoque innovador potencia React y JavaScript para crear interfaces interactivas y dinámicas en el comercio electrónico, mejorando tu negocio.</p>
            <Boton />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            id="NodeJS"
            className="d-block2 w-100"
            src={NodeJS}
            alt="NodeJs"
            loading="lazy"
            height="400"
          />
          <div className="NodeR">
            <img
              id="Node"
              className="d-block2 NodeRo"
              src={NodeRo}
              alt="html"
              loading="lazy"
            height="400"
            />
          </div>
          <div className='card5'></div>
          <div className='Sobrecard5'>
            <p className="jsxText"> Con Node.js  creamos aplicaciones web eficientes y escalables en el lado del servidor. Nuestro equipo experto utiliza JavaScript y Node.js para ofrecer soluciones rápidas y flexibles que se adaptan a sus necesidades. Potenciamos sus proyectos web con velocidad y confiabilidad.</p>
            <Boton />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrucel;
