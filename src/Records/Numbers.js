import React, { useEffect, useState } from 'react';
import './Numbers.css'
import Grid from '@mui/material/Grid';
import DevicesIcon from '@mui/icons-material/Devices';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function Numbers() {

    /* Counter for projects */ 
    const [counter_projects, setProjects_counter] = useState(0);

    /* Counter for Happy Clients */ 
    const [counter_clients, setClients_counter] = useState(0);

    /* Counter for Awards Wins */ 
    const [counter_awards, setAwards_counter] = useState(0);

    useEffect(() => {
        const timer_projects = setInterval(() => {
            setProjects_counter((prevProgress) => (prevProgress >= 320 ? 320 : prevProgress + 10));
        }, 70);

        const timer_clients = setInterval(() => {
            setClients_counter((prevProgress) => (prevProgress >= 520 ? 520 : prevProgress + 10));
        }, 40);

        const timer_awards = setInterval(() => {
            setAwards_counter((prevProgress) => (prevProgress >= 120 ? 120 : prevProgress + 10));
        }, 70);

        return () => {
            clearInterval(timer_projects);
            clearInterval(timer_clients);
            clearInterval(timer_awards);
        };

    }, []);

  return (
    <div id="numbers">
        <Grid container spacing={2}>
            <Grid className='bloc-item' item lg={4} md={6} xs={12}>
                <DevicesIcon sx={{ fontSize: 30 }}/>
                <h2>{counter_projects} +</h2>
                <h3>Projects Done</h3>
            </Grid>
            <Grid className='bloc-item' item lg={4} md={6} xs={12}>
                <GroupsIcon sx={{ fontSize: 30 }}/>
                <h2>{counter_clients} +</h2>
                <h3>Happy Clients</h3>
            </Grid>
            <Grid className='bloc-item' item lg={4} md={6} xs={12}>
                <EmojiEventsIcon sx={{ fontSize: 30 }}/>
                <h2>{counter_awards} +</h2>
                <h3>Awards Wins</h3>
            </Grid>
      </Grid>
    </div>
  )
}