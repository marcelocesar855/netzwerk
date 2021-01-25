import React, { Component } from 'react';
import Header from './components/Header'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos';
import Contato from './components/Contato'
import Slider from './components/Slider'
import Autor from './components/Autor'

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
        <Servicos />
        <Contato />
        <Autor/>
      </div>
    )
  }
}


      

export default App;
