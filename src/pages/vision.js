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
import vision from '../assets/images/vision3DnoSdw.png'
import front from '../assets/images/visionfront.jpg'
import back from '../assets/images/visionback.jpg'

class Vision extends Component {

  state = {
    activeIndex : 0,
    animating : false, 
    items : [
      {
        src: vision
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
            <img className='img-book' src={item.src} alt='EON - DIE VISION'/>
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
            ISBN: 978-3-9822627-1-0<br/>
            Alle Rechte vorbehalten:<br/>©EARTH OASIS GmbH
            </p>
          <button className="button-pdf">Leseproben! <i class="fa fa-file-pdf-o"></i></button>
          </div>
          </div>
          <div className='col col-lg-8'>
              <div className="content">
                  <div className="subtitle">EARTH OASIS NETZWERK</div>
                  <div className="end">
                  <div className="title">Die VISION</div>
                    <button className="button-buy">Zur Buchbestellung!</button>
                  </div>
                  <div className="info-book">
                      <p className="text-book-back">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mit der Macht unseres Verstandesdenkens haben wir die materielle
                      Welt erschlossen, uns die Erde untertan gemacht. Aber stellen wir
                      uns der damit verbundenen Verantwortung? Haben wir eine
                      gedeihende Welt erschaffen, die unseren großen Potenzialen als
                      integrierte Wesen aus Körper, Geist und Seele gerecht wird? Eine
                      Welt, in der freie, selbstbestimmte Menschen friedlich zusammen
                      leben und schöpferisch tätig sind? Leider sprechen die in vielen
                      Lebensbereichen zunehmenden Gefahren und Fehlentwicklungen
                      eine andere Sprache.<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Die VISION des ganzheitlichen Drei-Ebenen NETZWERKS bietet
                      praktikable Lösungen, die sich an unseren wahren Möglichkeiten
                      ausrichten. Individuelle Bewusstwerdungs- und Heilungsprozesse
                      offener Menschen werden dabei zu kraftvollen Impulsgebern für
                      eine gedeihende Zukunft – im Wachstumsverbund und hoffentlich
                      darüber hinaus. Dieses Buch entwirft einen völlig neuartigen
                      gesellschaftlichen Organismus, der enorme Synergien durch
                      Ergänzung und Ausgleich gegensätzlicher Kräfte erzeugt. Liebe,
                      Schönheit, Kreativität und Verbundenheit werden so zu prägenden
                      Impulsen im NETZWERK.</p>
                  </div>
              </div>
              <div className="info-book-m">
                <p className="text-book">Autor: Victor Rollhausen<br/>
                1. Auflage: November 2020<br/>
                ISBN: 978-3-9822627-1-0<br/>
                Alle Rechte vorbehalten:<br/>©EARTH OASIS GmbH
                </p>
              <button className="button-pdf">Leseproben! <i class="fa fa-file-pdf-o"></i></button>
              </div>
          </div>
        </div>
        <Autor/>
        <Others book1='entfaltung' book2='essenz'/>
      </div>
      <div class="modal fade" id="view" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <img class='img-book-modal' className="rounded img-fluid" src={this.state.view} alt='EON - DIE VISION'></img>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Vision;