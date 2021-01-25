
import React from 'react';
import image from '../../assets/images/vision3D.png'
import './style.css'

const Vision = () => {

    return (
        <container className="container-main">
            <div className="content-l">
                <div className="title-l">Earth Oasis Netzwerk - Die Vision</div>
                <div className="traco-l"></div>
                <div className="info">
                    <p className="text">
                    Ist es denkbar, dass wir Menschen auf dieser Erde
                    friedlich miteinander leben? Mit gegenseitigem Respekt
                    und ohne Kriege, Ausbeutung und Machtmissbrauch?
                    Ja, wir müssen „nur“ das Paradigma ändern, nachdem
                    wir leben!

                    Das Earth Oasis Netzwerk bietet mit seiner Vision, die
                    Vorlage für eine neues Lebensmodell des modernen,
                    erwachten Menschen.
                    Eine Vision, in der die Menschen kooperieren, anstatt
                    wettzustreiten. In der das Miteinander zu Fülle und
                    Wohlstand aller führt und nicht zu Arm und Reicher.
                    Das wahre Potential des Menschen ist die Liebe und das
                    Mitgefühl – nur haben wir das heute vergessen. Die
                    EON VISION bietet die Architektur für ein erwachtes
                    Leben in einer für Alle gedeihenden Welt und zeigt, das
                    es möglich ist die Natur des Menschen in Einklang zu
                    bringen, mit der Natur der Erde.
                    </p>
                    <div className='image-l'>
                        <span class="helper"></span>
                        <img src={image} alt="EON - DIE VISION" /> 
                    </div>
                </div>
            </div>
        </container>
    );
    
};



export default Vision;