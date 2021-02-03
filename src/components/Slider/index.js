import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import vision from '../../assets/images/vision-erde.png'
import entfaltung from '../../assets/images/entfaltung-erde.png'
import essenz from '../../assets/images/essenz-erde.png'
import './styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';

import { Component } from 'react';

class slider extends Component {
   
  render() {
   const AutoplaySlider = withAutoplay(AwesomeSlider);   
     return(
   <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={5000} animation="openAnimation">
      <container id="home" className="container__home">
      <div className="home">  
         <div>
            <div className="nome_da_ej">
               <h1 className="seven">EARTH OASIS NETZWERK</h1>
            </div>
         </div>
         <div className="end">
         <p className="text__home">. . . Eine Entdeckungsreise in<br/>
         unsere unbegrenzten Potenziale . . .</p>
         <button className="button__contato">Erkunde die VISION!</button>
         </div>
      </div>
      </container>
      <container id="home" className="container__home">
      <div className="vision">  
         <div>
            <div className="book-vision-name">
               <h1 className="seven">DIE VISION</h1>
            </div>
            <div className='image-v'>
                        <span class="helper"></span>
                        <a href="/vision-buecher"><img src={vision} alt="EON - DIE VISION" /> </a>
                    </div>
         </div>
         <div className="end">
         <p className="text__book-s">WIE <span class="text_enph">WIR</span><br/>
         EINE <span class="text_enph2">GEDEIHENDE</span><br/>
         <span class="text_enph">ZUKUNFT</span> IN<br/> DER <span class="text_enph2">GEGENWART</span><br/>
         <span class="text_enph2">ERSCHAFFEN</span></p>
         </div>
      </div>
      </container>
      <container id="home" className="container__home">
      <div className="entfaltung">  
         <div>
            <div className="book-vision-name">
               <h1 className="seven">DIE ENTFALTUNG</h1>
            </div>
            <div className='image-v'>
                        <span class="helper"></span>
                        <a href="/entfaltung-buecher"><img src={entfaltung} alt="EON - DIE ENTFALTUNG" /> </a>
                    </div>
         </div>
         <div className="end">
         <p className="text__book-s">MIT<br/><span class="text_enph2">VEREINTER<br/>SCHÖPFERKRAFT</span><br/>
         VON <span class="text_enph2">GEIST</span> UND <span class="text_enph2">MATERIE</span><br/>
         DIE <span class="text_enph">ERDE</span> IN EINE<br/>
         <span class="text_enph">OASE</span> VERWANDELN</p>
         </div>
      </div>
      </container>
      <container id="home" className="container__home">
      <div className="essenz">  
         <div>
            <div className="book-essenz-name">
               <h1 className="seven">DIE ESSENZ</h1>
            </div>
            <div className='image-e'>
                        <span class="helper"></span>
                        <a href="/essenz-buecher"><img src={essenz} alt="EON - DIE ESSENZ" /> </a>
                    </div>
         </div>
         <div className="end">
         <p className="text__book-s">DIE <span class="text_enph">VISION</span><br/>
         <span class="text_enph2">KOMPAKT</span></p>
         </div>
      </div>
      </container>
   </AutoplaySlider>
     )}}

export default slider;