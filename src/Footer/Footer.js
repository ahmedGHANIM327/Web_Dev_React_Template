import React from 'react';
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {

  const handleClick = () => {
    window.scrollTo({
        left:0,
        top:0,
    })
  }

  return (
    <div id="footer">
        <div className="top">
            <KeyboardArrowUpIcon onClick={handleClick}/>
        </div>
        <div className="social-icons">
            <a href='https://www.instagram.com/agweb_dev/'><InstagramIcon sx={{ fontSize: 35 }}/></a>
            <a href='https://www.facebook.com/ahmed.ghanim.731'><FacebookIcon sx={{ fontSize: 35 }}/></a>
            <a href='https://ahmed-ghanim.com'><LanguageIcon sx={{ fontSize: 35 }}/></a>
            <a href='https://github.com/ahmedGHANIM327'><GitHubIcon sx={{ fontSize: 35 }}/></a>
        </div>
        <div className="copyrights">
            © Designed by <a href='https://ahmed-ghanim.com'>ahmed-ghanim.com</a> 
        </div>
    </div>
  )
}