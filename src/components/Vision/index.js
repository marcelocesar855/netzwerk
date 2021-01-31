
import React from 'react';
import image from '../../assets/images/vision3D.png'
import './style.css'

const Vision = () => {

    return (
        <container className="container-main">
            <div className="content-l">
                <div className="title-l">EARTH OASIS NETZWERK - Die VISION</div>
                <div className="info">
                    <p className="text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ist es denkbar, dass wir Menschen auf dieser Erde friedlich
                    miteinander leben? Mit gegenseitigem Respekt und ohne
                    Kriege, Ausbeutung und Machtmissbrauch? Ja, es ist möglich! Wir müssen „nur“ das Paradigma ändern,
                    nach dem wir leben!
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Das EARTH OASIS NETZWERK bietet mit seiner ganzheitlichen
                    VISION die Vorlage für ein neues Lebensmodell des
                    modernen, erwachten Menschen.<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Eine VISION, in der die Menschen kooperieren, anstatt sich in
                    Streit und gnadenlosem Wettbewerb gegenüberzustehen. In
                    der das Miteinander zu Fülle und Wohlstand Aller führt und
                    nicht zu einem immer extremeren Auseinanderdriften der
                    Schere zwischen Arm und Reich.<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Die wahren Potentiale des Menschen sind Liebe und
                    Mitgefühl – nur haben wir das heute vergessen. Die EON
                    VISION bietet die Architektur für ein erwachtes Leben in einer
                    für Alle gedeihenden Welt. Sie zeigt, dass es möglich ist,
                    unsere menschliche Natur in Einklang zu bringen mit der uns
                    umgebenden Natur der Erde, deren Teil wir sind.
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