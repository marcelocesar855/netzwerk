
import React from 'react';
import image from '../../assets/images/essenz3D.png'
import './style.css'

const Essenz = () => {

    return (
        <container className="container-main">
            <div className="content-l">
                <div className="title-l">EARTH OASIS NETZWERK - Die Essenz</div>
                <div className="info">
                    <p className="text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Die Essenz ist das Grundlagenbuch der VISION in
                    komprimierter Form. Hier findest du die wichtigsten
                    Leitgedanken und Ideen der VISION des EARTH OASIS
                    NETZWERKS auf knapp 170 Buchseiten.
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Für all diejenigen, die sich für diese VISION interessieren,
                    stellen wir das Buch zum Download kostenfrei bereit. Dazu
                    muss man sich lediglich im NETZWERK anmelden, ohne eine
                    Art der Verpflichtung, versteht sich. Es geht uns darum,
                    jedermann/frau diesen ganzheitlichen Entfaltungsverbund
                    vorzustellen, um die Möglichkeit zu eröffnen, sich damit
                    weiter zu befassen und auf Wunsch aktiv daran mitzuwirken.
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Natürlich kann man das Buch auch bestellen – zusammen mit
                    Band 1 – DIE VISION (590 Seiten) - und Band 2 – DIE
                    ENTFALTUNG (205 Seiten) - oder auch nur das Essenz-Buch
                    als Einzelausgabe.
                    </p>
                    <div className='image-l'>
                        <span class="helper"></span>
                        <a href="/essenz-buecher"><img src={image} alt="EON - ESSENZ" /> </a>
                    </div>
                </div>
            </div>
        </container>
    );
    
};



export default Essenz;