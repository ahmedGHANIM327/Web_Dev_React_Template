import React from 'react';
import './About.css'
import Grid from '@mui/material/Grid';
import Aboutimage from '../Assets/AboutUSIMG.png'
import SpeedIcon from '@mui/icons-material/Speed';
import LaptopIcon from '@mui/icons-material/Laptop';
import WordpressLogo from '../Assets/WordpressIcon.png';
import ReactLogo from '../Assets/ReactIcon.png';
import AngularLogo from '../Assets/AngularICON.png'
import DjangoLogo from '../Assets/DjangoIcon.png'
import MySQLLogo from '../Assets/MySQLICON.png'
import AWSLogo from '../Assets/AWSICON.png'


export default function About() {
  return (
    <div id="about">
        <div className='title-section'>
            <h1>About US</h1>
            <span className='divider'></span>
        </div>
        <Grid container spacing={2}>
            <Grid className='bloc-image' item md={6}>
                <img alt='Web developer template using React and Material-UI' title='Web developer template using React and Material-UI' src={Aboutimage} />
            </Grid>
            <Grid className='bloc-text' item md={6}>
                <h2>Our Mission</h2>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
                   auctor sit amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, 
                   elementum id enim. Curabitur aliquet quam id dui posuere blandit.</p>
                <div className="blocks">
                    <div className="bloc">
                        <SpeedIcon className='icon' sx={{ fontSize: 35 }}/>
                        <h3>FAST & EASY WORK</h3>
                        <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                    </div>
                    <div className="bloc">
                        <LaptopIcon className='icon' sx={{ fontSize: 35 }}/>
                        <h3>CREATE RESULT</h3>
                        <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                    </div>
                    
                </div>
            </Grid>
      </Grid>
      <div className="skills">
        <img alt='Web developer template using React and Material-UI' title='Web developer template using React and Material-UI' src={WordpressLogo}/>
        <img alt='Web developer template using React and Material-UI' title='Web developer template using React and Material-UI' src={ReactLogo}/>
        <img alt='Web developer template using React and Material-UI' title='Web developer template using React and Material-UI' src={AngularLogo}/>
        <img alt='Web developer template using React and Material-UI' title='Web developer template using React and Material-UI' src={DjangoLogo}/>
        <img alt='Web developer template using React and Material-UI' title='Web developer template using React and Material-UI' src={MySQLLogo}/>
        <img alt='Web developer template using React and Material-UI' title='Web developer template using React and Material-UI' src={AWSLogo}/>
      </div>
    </div>
  )
}