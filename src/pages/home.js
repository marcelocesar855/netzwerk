import React, { Component } from 'react';
import Vision from '../components/Vision'
import Header from '../components/Header'
import Entfaltung from '../components/Entfaltung';
import Essenz from '../components/Essenz'
import Slider from '../components/Slider'
import Autor from '../components/Autor'
import '../styles/global.css'

class Home extends Component {

  render() {
    return(
      <div className='wrapper'>
        <Header />
        <Slider/>
        <Vision />
        <Entfaltung />
        <Essenz />
        <Autor/>
      </div>
    )
  }
}

export default Home;
