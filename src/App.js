import React, { Component } from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Sobre from './components/Sobre'
import Time from './components/Time'
import Servicos from './components/Servicos';
import Contato from './components/Contato'
import Example from './components/Carousel'
import Slider from './components/Slider'

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
        <Sobre />
        <Time />
        <Servicos />
        <Contato />
      </div>
    )
  }
}


      

export default App;
