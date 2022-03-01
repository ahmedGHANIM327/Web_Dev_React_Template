import React from 'react';
import './Contact.css'
import Grid from '@mui/material/Grid';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import GoogleMapReact from 'google-map-react';

const subjects = [
    {
      value: 'Website Creation',
      label: 'Website Creation',
    },
    {
      value: 'Design UI/UX',
      label: 'UI/UX Design',
    },
    {
      value: 'mobile app development',
      label: 'Mobile App Development',
    },
    {
      value: 'ecommerce website development',
      label: 'Ecommerce Website Development',
    },
    {
        value: 'something else',
        label: 'Something Else',
    },
];

const mapStyles = {
    position : 'relative',
    width: '100%',
    height: '100%'
};

export default function Contact() {

    const defaultProps = {
        center: {
          lat: 43.548389,
          lng: 1.454000
        },
        zoom: 11
    };

    const [subject, setSubject] = React.useState('Website Creation');

    const handleChange = (event) => {
        setSubject(event.target.value);
    };
  return (
    <div id="contact">
        <Grid container spacing={2}>
            <Grid className='bloc-map' item lg={3} md={4} xs={12}>
            <GoogleMapReact
                    bootstrapURLKeys={{ key: ''/* YOUR KEY HERE */ }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    style = {mapStyles}
                >
                </GoogleMapReact>
            </Grid>
            <Grid className='bloc-contact' item lg={9} md={8} xs={12}>
                <div className='title-section'>
                    <h1>Contact US</h1>
                    <span className='divider'></span>
                </div>
                <div className="sub-bloc-contact">
                    <Grid container spacing={2}>
                        <Grid className='social-contact' item lg={4} md={4} xs={12}>
                            <ul>
                                <li>
                                    <a href='tel:+336 74 31 16 24'><LocalPhoneIcon /> +336 74 31 16 24</a>
                                </li>
                                <li>
                                    <a href='mailto:contact@ahmed-ghanim.com'><EmailIcon /> contact@ahmed-ghanim.com</a>
                                </li>
                                <li>
                                    <a href='https://www.instagram.com/agweb_dev/'><InstagramIcon /> @agweb_dev</a>
                                </li>
                                <li>
                                    <a href='https://ahmed-ghanim.com'><LanguageIcon /> ahmed-ghanim.com</a>
                                </li>
                            </ul>
                        </Grid>
                        <Grid className='form-contact' item lg={8} md={8} xs={12}>
                                <TextField
                                    id="standard-name"
                                    label="Name"
                                    required
                                    variant="standard"
                                    className='input name'
                                />
                                <TextField
                                    id="standard-email"
                                    label="Email"
                                    required
                                    type="email"
                                    variant="standard"
                                    className='input email'
                                />
                                <TextField
                                    id="standard-select-subject"
                                    select
                                    fullWidth
                                    value={subject}
                                    onChange={handleChange}
                                    label="Please select your subject"
                                    variant="standard"
                                    className='input subject'
                                    >
                                    {subjects.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <TextField
                                id="standard-multiline-message"
                                label="Message"
                                multiline
                                rows={4}
                                variant="standard"
                                className='input message'
                                />

                                <div className="action-send">
                                    <button>Send <SendIcon /></button>
                                </div>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}