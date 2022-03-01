import React from 'react';
import './Home.css'
import Grid from '@mui/material/Grid';
import Homeimage from '../Assets/HomeIMG.png';
import WordpressLogo from '../Assets/WordpressIcon.png';
import ReactLogo from '../Assets/ReactIcon.png';
import AngularLogo from '../Assets/AngularICON.png';
import DjangoLogo from '../Assets/DjangoIcon.png';

export default function Home() {
  return (
    <div id="home">
        <Grid container spacing={2}>
            <Grid className='bloc-text' item md={6}>
                <h1>Hello ,<br></br>I am a <span className='web-dev-span'>WEB DEVELOPER</span></h1>
                <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                <div className="actions">
                    <button className='discover'>Discover More</button>
                    <button className='contact'>Contact US</button>
                </div>
            </Grid>
            <Grid className='bloc-image' item md={6}>
                <img alt='Web developer template using React and Material-UI' title='Web developer template using React and Material-UI' src={Homeimage} />
                <img alt='Web developer template using React and Material-UI , Wordpress' title='Web developer template using React and Material-UI' className='logo wordpress' src={WordpressLogo}/>
                <img alt='Web developer template using React and Material-UI , React' title='Web developer template using React and Material-UI' className='logo react' src={ReactLogo}/>
                <img alt='Web developer template using React and Material-UI , Angular' title='Web developer template using React and Material-UI' className='logo angular' src={AngularLogo}/>
                <img alt='Web developer template using React and Material-UI , Django' title='Web developer template using React and Material-UI' className='logo django' src={DjangoLogo}/>
            </Grid>
      </Grid>
    </div>
  )
}