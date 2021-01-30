import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import vision from '../../assets/images/vision-erde.png'
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
               <h1 className="seven">EARTH OASIS NETZWERK</h1>
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
      <div className="vision">  
         <div>
            <div className="book-vision-name">
               <h1 className="seven">DIE VISION</h1>
            </div>
            <div className="traco"></div>
            <div className='image-v'>
                        <span class="helper"></span>
                        <img src={vision} alt="EON - DIE VISION" /> 
                    </div>
         </div>
         <div className="aling__end">
         <p className="text__book">WIE <span class="text_enph">WIR</span><br/>
         EINE <span class="text_enph2">GEDEIHENDE</span><br/>
         <span class="text_enph">ZUKUNFT</span> IN<br/> DER <span class="text_enph2">GEGENWART</span><br/>
         <span class="text_enph2">ERSCHAFFEN</span></p>
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