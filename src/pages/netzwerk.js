import React, { Component } from 'react';
import Header from '../components/Header'
import '../styles/global.css'

class Netzwerk extends Component {

  render() {
    return(
      <div className='wrapper'>
        <Header/>
        <div className="oasis">  
         <div>
          <div className="interview-name">
              <h1 className="inter">EARTH OASIS NETZWERK</h1>
            </div>
            <div className="end">
          <p className="text__book-s">EIN <span class="text_enph2">ORT,</span> AN DEM SICH<br/>
          <span class="text_enph">LICHTWESEN</span> AUF<br/>
          DER <span class="text_enph">ERDE</span><br/>
          <span class="text_enph2">VERBINDEN</span> KÖNNEN</p>
          </div>
         </div>
      </div>
      <div className="content-l">
            <div className="title-l">Herzlich Willkommen im Netzwerk-Forum!</div>
            <div className="info">
                <p className="text">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hier kannst du Menschen treffen und über die Earth Oasis Vision diskutieren, dich
                austauschen oder einfach Gleichgesinnte kennenlernen.<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Es ein erster Treffpunkt für ein entstehendes Netzwerk, das du selber mit initiierst.
                Vielleicht hast du das Visionsbuch schon gelesen und bist inspiriert auch deine
                Zukunft aktiv mit anderen mitzugestalten. Das grundlegende Modell für eine bessere
                Lebenswelt auf der Erde liegt dir mit dem Visionsbuch vor und du kannst mit
                Freunden und Bekannten aus deinem Umfeld selbst zum Mitschöpfer einer
                friedlichen und gerechteren Welt werden. Du kannst Gruppen auf facebook oder
                anderen socialen Medien gründen, um Kontakte zu Gleichgesinnten in deiner Stadt
                oder Gemeinde zu finden. Ich könnt euch treffen und beginnen, die Vision einer
                neuen Erde auf die Welt zu bringen.<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wenn du dich in diesem Forum mit Namen und e-mail anmeldest, erhälst du als
                Dankeschön kostenfrei das Visions-Essenz Buch als Download für dein Interesse.<br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unser Ziel von earth Oasis Netzwerk ist es, Menschen zusammenzubringen und zu
                helfen aktiv für eine bessere Lebenswelt einzustehen. Du kannst heute damit
                beginnen. Deine Daten werden selbstverständlich vertraulich behandelt.
                <center>
                  <button className="button__contato">Download Essenzbuch!</button>
                </center>
                </p>
            </div>
        </div>
      </div>
    )
  }
}

export default Netzwerk;
