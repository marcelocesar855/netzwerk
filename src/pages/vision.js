import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import './styles.css';
import Header from '../components/HeaderBooks'
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
    ]
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
        <img className='img-book' src={item.src} alt='EON - DIE VISION'/>
      </CarouselItem>
    );
  });


  render() {
    return(
      <div className='wrapper'>
        <Header />
        <div className='container'>
        <div className='row'>
          <div className='col col-lg-4'>
            <Carousel interval={7000} ride={'carousel'}
              activeIndex={this.state.activeIndex}
              next={this.next}
              previous={this.previous}>
            <CarouselIndicators items={this.state.items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
            {this.slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
          </div>
          <div className='col col-lg'>
            
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Vision;