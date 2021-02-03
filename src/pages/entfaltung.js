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
import entfaltung from '../assets/images/entfaltung3DnoSdw.png'
import front from '../assets/images/entfaltungfront.jpg'
import back from '../assets/images/entfaltungback.jpg'

class Entfaltung extends Component {

  state = {
    activeIndex : 0,
    animating : false, 
    items : [
      {
        src: entfaltung
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
            <img className='img-book' src={item.src} alt='EON - DIE ENTFALTUNG'/>
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
            ISBN: 978-3-9822627-2-7<br/>
            Alle Rechte vorbehalten: ©EARTH OASIS GmbH
            </p>
          <button className="button-pdf">Leseproben! <i class="fa fa-file-pdf-o"></i></button>
          </div>
          </div>
          <div className='col col-lg-8'>
              <div className="content">
                  <div className="subtitle">EARTH OASIS NETZWERK</div>
                  <div className="end">
                  <div className="title">Die Entfaltung</div>
                    <button className="button-buy">Zur Buch-bestellung!</button>
                  </div>
                  <div className="info-book">
                      <p className="text-book-back">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Immer mehr wache Menschen begreifen intuitiv: eine
                        menschenwürdige Zukunft ist nicht möglich, solange wir das
                        Geistige als grundlegende Schöpfungskraft leugnen und uns so von
                        unseren wahren Potenzialen abschneiden.<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In einer fiktiven Rückschau aus dem Jahre 2045 erleben wir aus der
                        Sicht von 13 NETZWERK-Pionieren aus 12 Ländern kraftvolle
                        Potenzialentfaltung. Der ganzheitliche Verbund ist längst zu einer
                        blühenden Oase mit Millionen schöpferisch tätigen Mitgliedern
                        herangewachsen. Innere und äußere Vielfalt und Fülle bringen
                        faszinierende Lebenswelten hervor: Ein solidarisches
                        Wirtschaftsleben auf der ganzheitlichen Firmen- und Berufsebene.
                        Village-Gemeinschaften, die individuelle Gaben wie auch friedliche,
                        erfüllende Formen des Zusammenlebens fördern. Und als
                        verbindende Ebene die Stiftungen, die ein gerechtes
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Organisationsmodell für das NETZWERK mit Leben erfüllen.<br/>
                        Du bist herzlich eingeladen, diese inspirierende VISION zu
                        erkunden! Die Trennung von Körper, Seele und Geist zu
                        überwinden! Neue, erfüllende Lebens(t)räume zu erschließen!
                        Unsere Erde in ein wahres Paradies zu verwandeln!</p>
                  </div>
              </div>
              <div className="info-book-m">
                <p className="text-book">Autor: Victor Rollhausen<br/>
                1. Auflage: November 2020<br/>
                ISBN: 978-3-9822627-2-7<br/>
                Alle Rechte vorbehalten: ©EARTH OASIS GmbH
                </p>
              <button className="button-pdf">Leseproben! <i class="fa fa-file-pdf-o"></i></button>
              </div>
          </div>
        </div>
        <Autor/>
        <Others book1='vision' book2='essenz'/>
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

export default Entfaltung;