import React, { Component } from 'react';
import Header from '../components/Header'
import '../styles/global.css'
import video1 from '../assets/videos/Gesprach14-3-2021.mp4'

class Interviews extends Component {

  render() {
    return(
      <div className='wrapper'>
        <Header />
        <div className="interview">  
         <div>
         <div className="interview-name">
            <h1 className="inter">INTERVIEWS</h1>
          </div>
          <div className="end">
         <p className="text__book-s">MIT <span class="text_enph">VICTOR<br/>ROLLHAUSEN</span><br/>
         UND <span class="text_enph2">ANDEREN</span><br/></p>
         </div>
         </div>
      </div>
      <center>
      <div className="title-interview">Sven Weishaupt interviewt Victor Rollhausen</div>
        <video className='video-border' controls>
          <source src={video1} type="video/mp4"/>
            Your browser does not support the video tag.
            sven_weishaupt
        </video>
      </center>
      </div>
    )
  }
}

export default Interviews;
