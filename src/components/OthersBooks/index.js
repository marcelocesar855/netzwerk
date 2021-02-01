import React from 'react';
import './styles.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import visionBook from '../assets/images/vision3DnoSdw.png'
import visionFront from '../assets/images/visionfront.jpg'
import visionBack from '../assets/images/visionback.jpg'
import entfaltungBook from '../assets/images/entfaltung3DnoSdw.png'
import entfaltungFront from '../assets/images/entfaltungfront.jpg'
import entfaltungBack from '../assets/images/entfaltungback.jpg'
import essenzBook from '../assets/images/essenz3DnoSdw.png'
import essenzFront from '../assets/images/essenzfront.jpg'
import essenzBack from '../assets/images/essenzback.jpg'

import { Component } from 'react';

class Others extends Component {

    state = {
        book1 : '',
        book2 : ''
    }

    componentWillReceiveProps() {
        this.setState({
            book1 : this.props.book1,
            book2 : this.props.book2,
        })
    }
   
  render() { 
     return(
        <container className="container-main">
            
        </container>
     )}}

export default Others;