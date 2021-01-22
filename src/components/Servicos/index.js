
import React from 'react';
import image from '../../assets/images/vision3D1.png'
import './style.css'

const Sobre = () => {

    return (
        <container className="container__sobre">
            <div className="sobre1">
                <div className="title__sobre1">Earth Oasis Netzwerk - Die Entfaltung</div>
                <div className="traco1"></div>
                <div className="sobre__info">
                    <div className='sobre__image1'>
                        <span class="helper"></span>
                        <img src={image} alt="Imagem da 7sight" /> 
                    </div>
                    <p className="sobre__text">
                    Wir schreiben das Jahr 2045! Es ist das 20 jährige
                    Jubiläum des Earth Oasis Netzwerk. Die Pioniere der

                    Gründerzeit treffen sich und diskutieren über die
                    Anfangsjahre.
                    Es ist dies eine fiktive Erzählung aus der Zukunft, die
                    beschreibt, wie alles werden kann.
                    Weltweit ist ein Netzwerk aus Villages entstanden, in
                    denen Menschen nach der Vision von Gesundheit,
                    Heilung und Liebe miteinander leben. Auch gibt es noch
                    die „alte“ Welt, aber die positive lichtvolle Kraft der
                    Vision hat sich in alle Erdteile ausgebreitet. Millionen von
                    Menschen sind Mitglieder des Netzwerkes. Ein riesiger
                    Verbund von Firmen ist entstanden, der nach den
                    Statuten des Netzwerkes operiert und Fülle und
                    Wohlstand generiert. Und überall steuern regionale
                    Stiftungen den Geist der Vision. Ein Blick in die Zukunft,
                    wie sie tatsächlich sein kann. Wir können jetzt beginnen,
                    sie zu erschaffen.
                    </p>
                </div>
            </div>
        </container>
    );
    
};



export default Sobre;