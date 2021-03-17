import React from 'react';
import './style.css';
import {
  UncontrolledCarousel} from 'reactstrap';
import visionBook from '../../assets/images/vision3DnoSdw.png'
import visionFront from '../../assets/images/visionfront.jpg'
import visionBack from '../../assets/images/visionback.jpg'
import entfaltungBook from '../../assets/images/entfaltung3DnoSdw.png'
import entfaltungFront from '../../assets/images/entfaltungfront.jpg'
import entfaltungBack from '../../assets/images/entfaltungback.jpg'
import essenzBook from '../../assets/images/essenz3DnoSdw.png'
import essenzFront from '../../assets/images/essenzfront.jpg'
import essenzBack from '../../assets/images/essenzback.jpg'

import { Component } from 'react';

class Others extends Component {

    state = {
        book1 : {
            title : '',
            desc : '',
            ref : ''
        },
        book2 : {
            title : '',
            desc : '',
            ref : ''
        },
        items1 : [],
        items2 : []
    }

    componentDidMount() {
        this.defineBooks(this.props.book1, this.props.book2)
    }

    defineBooks(book1, book2) {
        if (book1 === 'vision' ){
            this.book1Vision()
            if(book2 === 'entfaltung'){
                this.book2Entfaltung()
            }else{
                this.book2Essenz()
            }
        }else{
            this.book1Entfaltung()
            this.book2Essenz()
        }
    }

    book1Vision () {
        this.setState({
            book1 : {
                title : 'Die VISION',
                desc : 'Wie wir eine gedeihende Zukunft in der Gegenwart erschaffen',
                ref: "/vision-buecher"
            },
            items1 : [
                {src : visionBook},
                {src : visionFront},
                {src : visionBack}
            ]
        })
    }

    book1Entfaltung () {
        this.setState({
            book1 : {
                title : 'Die Entfaltung',
                desc : 'Mit vereinter Schöpferkraft von Geist und Materie die Erde in eine Oase verwandeln',
                ref: "/entfaltung-buecher"
            },
            items1 : [
                {src : entfaltungBook},
                {src : entfaltungFront},
                {src : entfaltungBack}
            ]
        })
    }

    book2Entfaltung () {
        this.setState({
            book2 : {
                title : 'Die Entfaltung',
                desc : 'Mit vereinter Schöpferkraft von Geist und Materie die Erde in eine Oase verwandeln',
                ref: "/entfaltung-buecher"
            },
            items2 : [
                {src : entfaltungBook},
                {src : entfaltungFront},
                {src : entfaltungBack}
            ]
        })
    }

    book2Essenz () {
        this.setState({
            book2 : {
                title : 'Die Essenz',
                desc : 'Die VISION kompakt',
                ref: "/essenz-buecher"
            },
            items2 : [
                {src : essenzBook},
                {src : essenzFront},
                {src : essenzBack}
            ]
        })
    }
   
  render() { 
     return(
         <div>
         <div className="title-ob">Die anderen Bücher</div>
            <div className='row row-books'>
            <div className='col-lg'>
                <div className='row'>
                    <div className='col-lg'>
                        <UncontrolledCarousel items={this.state.items1}  interval={7000} ride={'carousel'}/>
                    </div>
                    <div className='col-lg'>
                    <div className="content">
                        <div><a  className="subtitle" href={this.state.book1.ref}>{this.state.book1.title}</a></div>
                        <div className="info-book">
                            <p className="text-book-back">{this.state.book1.desc}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='col col-lg'>
                <div className='row'>
                    <div className='col-lg'>
                        <UncontrolledCarousel items={this.state.items2}  interval={7000} ride={'carousel'}/>
                        </div>
                        <div className='col-lg'>
                        <div className="content">
                            <div><a className="subtitle" href={this.state.book2.ref}>{this.state.book2.title}</a></div>
                            <div className="info-book">
                                <p className="text-book-back">{this.state.book2.desc}</p>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
   </div>
)}}

export default Others;