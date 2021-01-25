
import React from 'react';
import image from '../../assets/images/essenz3D.png'
import './style.css'

const Essenz = () => {

    return (
        <container className="container-main">
            <div className="content-l">
                <div className="title-l">Earth Oasis Netzwerk - Die Essenz</div>
                <div className="traco-l"></div>
                <div className="info">
                    <p className="text">
                    Die Essenz ist das Grundlagenbuch der Vision in
                    komprimierter Form. Hier findest du die wichtigsten
                    Leitgedanken und Ideen der Vision des Earth Oasis
                    Netzwerk auf knapp 170 Buchseiten.

                    Für all diejenigen, die sich für diese Vision interessieren,
                    stellen wir das Buch zum Download kostenfrei bereit.
                    Dazu muss man sich lediglich im Netzwerk anmelden,
                    ohne eine Art der Verpflichtung, versteht sich. Es geht
                    uns darum, jedermann/frau das Netzwerk vorzustellen,
                    um die Möglichkeit zu eröffnen sich damit weiter zu
                    befassen und aktiv daran mitzuwirken.
                    Natürlich kann man das Buch auch bestellen –
                    zusammen mit Band 1 und Band 2 oder auch nur das
                    Essenzbuch als Einzelausgabe.
                    </p>
                    <div className='image-l'>
                        <span class="helper"></span>
                        <img src={image} alt="EON - ESSENZ" /> 
                    </div>
                </div>
            </div>
        </container>
    );
    
};



export default Essenz;