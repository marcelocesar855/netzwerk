import React, { Component } from 'react';
import Header from './components/Header'
import Vision from './components/Vision'
import Entfaltung from './components/Entfaltung';
import Essenz from './components/Essenz'
import Slider from './components/Slider'
import Autor from './components/Autor'
import Footer from './components/Footer'

import './styles/global.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
       className: ''
    }
  }
  render() {
    return(
      <div>
        <Header />
        <Slider/>
        <Vision />
        <Entfaltung />
        <Essenz />
        <Autor/>
        <Footer/>
      </div>
    )
  }
}


      

export default App;
