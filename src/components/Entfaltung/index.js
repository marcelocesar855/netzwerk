
import React from 'react';
import image from '../../assets/images/entfaltung3D.png'
import './style.css'

const Sobre = () => {

    return (
        <container className="container-main">
            <div className="content-r">
                <div className="title-r">EARTH OASIS NETZWERK - Die Entfaltung</div>
                <div className="info">
                    <div className='image-r'>
                        <span class="helper"></span>
                        <img src={image} alt="EON - DIE ENTFALTUNG" /> 
                    </div>
                    <p className="text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wir schreiben das Jahr 2045! Es ist das 20 jährige Jubiläum
                    des EARTH OASIS NETZWERKS. 13 Pioniere der Gründerzeit
                    treffen sich und lassen die Anfangsjahre Revue passieren.
                    Es ist dies eine fiktive Erzählung aus der Zukunft, die
                    beschreibt, wie alles werden kann.<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Weltweit ist ein NETZWERK aus Villages entstanden, in denen
                    Menschen nach der VISION von Gesundheit, Heilung und
                    Liebe miteinander leben. Auch gibt es noch die „alte“ Welt,
                    aber die positive lichtvolle Kraft der VISION hat sich in alle
                    Erdteile ausgebreitet. Millionen von Menschen sind
                    Mitglieder des NETZWERKS. Ein riesiger Verbund von Firmen
                    ist entstanden, der nach den ganzheitlichen Statuten des
                    NETZWERKS operiert und Fülle und Wohlstand generiert. Und
                    überall fördern regionale Stiftungen den Geist der VISION. Ein
                    Blick in die Zukunft, wie sie tatsächlich sein kann. Wir können
                    jetzt beginnen, sie zu erschaffen!
                    </p>
                </div>
            </div>
        </container>
    );
    
};



export default Sobre;