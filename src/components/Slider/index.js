import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import './styles.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';

import { Component } from 'react';

class slider extends Component {
  render() {
     return(
   <AwesomeSlider animation="openAnimation">
      <container id="home" className="container__home">
      <div className="home">  
         <div>
            <div className="nome_da_ej">
               <h1 className="seven">EARTH OASIS NETWORK</h1>
            </div>
            <div className="traco"></div>
         </div>
         <div className="aling__end">
         <p className="text__home">Daaaar Vida ao seu projeto<br/> é o nosso objetivo</p>
         <a href="#contato"><button className="button__contato">Conheça a Visão</button></a>
         </div>
      </div>
      </container>
      <container id="home" className="container__home">
      <div className="home">  
         <div>
            <div className="nome_da_ej">
               <h1 className="seven">EARTH OASIS NETWORK</h1>
            </div>
            <div className="traco"></div>
         </div>
         <div className="aling__end">
         <p className="text__home">Dar Vida ao seu projeto<br/> é o nosso objetivo</p>
         <a href="#contato"><button className="button__contato">Conheça a Visão</button></a>
         </div>
      </div>
      </container>
      <container id="home" className="container__home">
      <div className="home">  
         <div>
            <div className="nome_da_ej">
               <h1 className="seven">EARTH OASIS NETWORK</h1>
            </div>
            <div className="traco"></div>
         </div>
         <div className="aling__end">
         <p className="text__home">Dar Vida ao seu projeto<br/> é o nosso objetivo</p>
         <a href="#contato"><button className="button__contato">Conheça a Visão</button></a>
         </div>
      </div>
      </container>
   </AwesomeSlider>
     )}}

export default slider;