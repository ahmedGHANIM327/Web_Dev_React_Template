import React from 'react';
import './Features.css'
import Grid from '@mui/material/Grid';
import DevicesIcon from '@mui/icons-material/Devices';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import CodeIcon from '@mui/icons-material/Code';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import CommentIcon from '@mui/icons-material/Comment';


export default function Features() {
  return (
    <div id="features">
        <div className='title-section'>
            <h1>Features </h1>
            <span className='divider'></span>
        </div>
        <Grid container spacing={2}>
            <Grid className='bloc-item' item lg={4} md={6} xs={12}>
                <DevicesIcon sx={{ fontSize: 30 }}/>
                <div className="content">
                    <h2>RESPONSIVE</h2>
                    <p>Vivamus suscipit tortor eget felis porttitor volutpat. 
                        Pellentesque in ipsum id orci porta dapibus.</p>
                </div>
            </Grid>
            <Grid className='bloc-item' item lg={4} md={6} xs={12}>
                <FindReplaceIcon sx={{ fontSize: 30 }}/>
                <div className="content">
                    <h2>CUSTOMIZABLE</h2>
                    <p>Vivamus suscipit tortor eget felis porttitor volutpat. 
                        Pellentesque in ipsum id orci porta dapibus.</p>
                </div>
            </Grid>
            <Grid className='bloc-item' item lg={4} md={6} xs={12}>
                <ViewQuiltIcon sx={{ fontSize: 30 }}/>
                <div className="content">
                    <h2>UI ELEMENTS</h2>
                    <p>Vivamus suscipit tortor eget felis porttitor volutpat. 
                        Pellentesque in ipsum id orci porta dapibus.</p>
                </div>
            </Grid>
            <Grid className='bloc-item' item lg={4} md={6} xs={12}>
                <CodeIcon sx={{ fontSize: 30 }}/>
                <div className="content">
                    <h2>CLEAN CODE</h2>
                    <p>Vivamus suscipit tortor eget felis porttitor volutpat. 
                        Pellentesque in ipsum id orci porta dapibus.</p>
                </div>
            </Grid>
            <Grid className='bloc-item' item lg={4} md={6} xs={12}>
                <CommentIcon sx={{ fontSize: 30 }}/>
                <div className="content">
                    <h2>DOCUMENTED</h2>
                    <p>Vivamus suscipit tortor eget felis porttitor volutpat. 
                        Pellentesque in ipsum id orci porta dapibus.</p>
                </div>
            </Grid>
            <Grid className='bloc-item' item lg={4} md={6} xs={12}>
                <BrowserUpdatedIcon sx={{ fontSize: 30 }}/>
                <div className="content">
                    <h2>FREE UPDATES</h2>
                    <p>Vivamus suscipit tortor eget felis porttitor volutpat. 
                        Pellentesque in ipsum id orci porta dapibus.</p>
                </div>
            </Grid>
      </Grid>
    </div>
  )
}