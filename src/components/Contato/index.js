
import React from 'react';
import image from '../../assets/images/vision3D2.png'
import './style.css'

const Sobre = () => {

    return (
        <container className="container__sobre">
            <div className="sobre">
                <div className="title__sobre">Earth Oasis Netzwerk - Die Essenz</div>
                <div className="traco"></div>
                <div className="sobre__info">
                    <p className="sobre__text">
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
                    <div className='sobre__image'>
                        <span class="helper"></span>
                        <img src={image} alt="Imagem da 7sight" /> 
                    </div>
                </div>
            </div>
        </container>
    );
    
};



export default Sobre;