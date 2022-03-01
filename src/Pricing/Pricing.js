import React from 'react';
import './Pricing.css'
import Grid from '@mui/material/Grid';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LanguageIcon from '@mui/icons-material/Language';

export default function Pricing() {
  return (
    <div id="pricing">
        <div className='title-section'>
            <h1>Pricing</h1>
            <span className='divider'></span>
        </div>
        <Grid container spacing={3} direction="row"
  justifyContent="center">
            <Grid item md={4}>
              <div className="bloc-price">
                <BrightnessLowIcon className='price-icon'/>
                <h2>BASIC</h2>
                <h3>50 €</h3>
                <ul>
                  <li><CheckIcon className='check'/> Vestibulum ante ipsum primis in faucibus.</li>
                  <li><CheckIcon className='check'/> Vestibulum ante ipsum primis in faucibus.</li>
                  <li><ClearIcon className='clear'/> Vestibulum ante ipsum primis in faucibus.</li>
                  <li><ClearIcon className='clear'/> Vestibulum ante ipsum primis in faucibus.</li>
                  <li><ClearIcon className='clear'/> Vestibulum ante ipsum primis in faucibus.</li>
                  <li><ClearIcon className='clear'/> Vestibulum ante ipsum primis in faucibus.</li>
                </ul>
                <button className='more'>More</button>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className="bloc-price standard">
                <LanguageIcon className='price-icon'/>
                <h2>STANDARD</h2>
                <h3>100 €</h3>
                <ul>
                  <li><CheckIcon className='check'/> Vestibulum ante ipsum primis in faucibus.</li>
                  <li><CheckIcon className='check'/> Vestibulum ante ipsum primis in faucibus.</li>
                  <li><CheckIcon className='check'/> Vestibulum ante ipsum primis in faucibus.</li>
                  <li><CheckIcon className='check'/> Vestibulum ante ipsum primis in faucibus.</li>
                  <li><ClearIcon className='clear'/> Vestibulum ante ipsum primis in faucibus.</li>
                  <li><ClearIcon className='clear'/> Vestibulum ante ipsum primis in faucibus.</li>
                </ul>
                <button className='more'>More</button>
              </div>
            </Grid>
            <Grid item md={4}>
            <div className="bloc-price">
                <WorkspacePremiumIcon className='price-icon'/>
                <h2>PREMIUM</h2>
                <h3>150 €</h3>
                <ul>
                  <li><CheckIcon className='check'/> Vestibulum ante ipsum primis in faucibus.</li>
                  <li><CheckIcon className='check'/> Vestibulum ante ipsum primis in faucibus.</li>
                  <li><CheckIcon className='check'/> Vestibulum ante ipsum primis in faucibus.</li>
                  <li><CheckIcon className='check'/> Vestibulum ante ipsum primis in faucibus.</li>
                  <li><CheckIcon className='check'/> Vestibulum ante ipsum primis in faucibus.</li>
                  <li><CheckIcon className='check'/> Vestibulum ante ipsum primis in faucibus.</li>
                </ul>
                <button className='more'>More</button>
              </div>
            </Grid>
      </Grid>
    </div>
  )
}