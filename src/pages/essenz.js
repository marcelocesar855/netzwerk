import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import $ from 'jquery';
import 'bootstrap';
import {Clickable} from 'react-clickable';
import './styles.css';
import Header from '../components/HeaderBooks'
import Autor from '../components/Autor'
import Others from '../components/OthersBooks'
import essenz from '../assets/images/essenz3DnoSdw.png'
import front from '../assets/images/essenzfront.jpg'
import back from '../assets/images/essenzback.jpg'

class Essenz extends Component {

  state = {
    activeIndex : 0,
    animating : false, 
    items : [
      {
        src: essenz
      },
      {
        src: front
      },
      {
        src: back
      }
    ],
    view : {}
  }

  next = () => {
    if (this.state.animating) return;
    const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({activeIndex : nextIndex});
  }

  previous = () => {
    if (this.state.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setState({activeIndex : nextIndex});
  }

  goToIndex = (newIndex) => {
    if (this.state.animating) return;
    this.setState({activeIndex : newIndex});
  }

  slides = this.state.items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => this.setState({animating : true})}
        onExited={() => this.setState({animating : false})}
        key={item.src}>
        <Clickable onClick={() => {
            this.setState({view : item.src})
              $('#view').modal('show');
            }}>
            <img className='img-book' src={item.src} alt='EON - DIE ESSENZ'/>
        </Clickable>
      </CarouselItem>
    );
  });


  render() {
    return(
      <div className='wrapper'>
        <Header />
        <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <Carousel className='carousel-main' interval={7000} ride={'carousel'}
              activeIndex={this.state.activeIndex}
              next={this.next}
              previous={this.previous}>
            <CarouselIndicators items={this.state.items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
            {this.slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
          <div className="info-book-w">
            <p className="text-book">Autor: Victor Rollhausen<br/>
            1. Auflage: November 2020<br/>
            ISBN: 978-3-9822627-3-4<br/>
            Alle Rechte vorbehalten:<br/>©EARTH OASIS GmbH
            </p>
          <button className="button-pdf">Leseproben! <i class="fa fa-file-pdf-o"></i></button>
          </div>
          </div>
          <div className='col col-lg-8'>
              <div className="content">
                  <div className="subtitle">EARTH OASIS NETZWERK</div>
                  <div className="end">
                  <div className="title">Die Essenz</div>
                    <button className="button-buy" onClick={()=> window.open('https://shop.earth-oasis-netzwerk.de/produkt/earth-oasis-netzwerk-die-essenz/', "_blank")}>Zur Buchbestellung!</button>
                  </div>
                  <div className="info-book">
                      <p className="text-book-back">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Das hier kompakt in seiner Essenz vorgestellte EARTH OASIS
                        NETZWERK freiheitlicher Potenzialentfaltung fördert den Menschen
                        in seiner Ganzheit als kraftvolle Körper-Geist-Seele Einheit. Dabei
                        gehören individuelles inneres Wachstum, äußerer wirtschaftlicher
                        und beruflicher Erfolg sowie ein in liebevoller Herzensenergie
                        verbundenes, gedeihendes Gemeinschaftsleben zusammen. Sie sind
                        Ausdruck zunehmender Bewusstheit, innerer Heilung und
                        wachsender Lebensfreude all der Menschen, die sich in diesem
                        Drei-Ebenen Entfaltungsverbund engagieren. Und dabei volle
                        Verantwortung für das eigene Dasein übernehmen.<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alles im Leben hat seine Zeit! Und wahrscheinlich ist es kein Zufall,
                        dass diese drei Bücher – 25 Jahre, nachdem diese VISION erstmals
                        sichtbar wurde - gerade jetzt, in den Zeiten der Corona-Krise
                        beendet wurden und erscheinen. Nutzen wir also die machtvolle
                        Energie dieser so klar greifbaren Wendezeit! Es liegt ganz in unseren
                        Händen, die in jedem Menschen vorhandenen Potenziale zu
                        aktivieren und eine Welt innerer und äußerer Fülle und Schönheit
                        zu erschaffen – hier und jetzt!</p>
                  </div>
              </div>
              <div className="info-book-m">
                <p className="text-book">Autor: Victor Rollhausen<br/>
                1. Auflage: November 2020<br/>
                ISBN: 978-3-9822627-3-4<br/>
                Alle Rechte vorbehalten:<br/>©EARTH OASIS GmbH
                </p>
              <button className="button-pdf">Leseproben! <i class="fa fa-file-pdf-o"></i></button>
              </div>
          </div>
        </div>
        <Autor/>
        <Others book1='vision' book2='entfaltung'/>
      </div>
      <div class="modal fade" id="view" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <img class='img-book-modal' className="rounded img-fluid" src={this.state.view} alt='EON - DIE ENTFALTUNG'></img>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Essenz;