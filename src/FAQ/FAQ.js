import React from 'react';
import './FAQ.css'
import Grid from '@mui/material/Grid';
import FAQIMG from '../Assets/FAQIMG.png'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function FAQ() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

  return (
    <div id="faq">
        <div className='title-section'>
            <h1>Frequently Asked Questions</h1>
            <span className='divider'></span>
        </div>
        <Grid container spacing={2}>
            <Grid className='bloc-image' item md={6}>
                <img alt='Web developer template using React and Material-UI' title='Web developer template using React and Material-UI' src={FAQIMG} />
            </Grid>
            <Grid className='bloc-text' item md={6}>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
                   auctor sit amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, 
                   elementum id enim. Curabitur aliquet quam id dui posuere blandit.</p>
                <div className="questions-bloc">
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="question">
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ fontSize: 35 }}/>}
                        className="question-header"
                        >
                            <h3>Lorem ipsum dolor sit amet consectetu adipiscing elit ?</h3>
                        </AccordionSummary>
                        <AccordionDetails className="question-content">
                            <p>
                            Your content goes here. Edit or remove this text inline or in the module Content settings. 
                            You can also style every aspect of this content in the module Design settings and even apply 
                            custom CSS to this text in the module Advanced settings.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="question">
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ fontSize: 35 }}/>}
                        className="question-header"
                        >
                            <h3>Lorem ipsum dolor sit amet consectetu adipiscing elit ?</h3>
                        </AccordionSummary>
                        <AccordionDetails className="question-content">
                            <p>
                            Your content goes here. Edit or remove this text inline or in the module Content settings. 
                            You can also style every aspect of this content in the module Design settings and even apply 
                            custom CSS to this text in the module Advanced settings.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="question">
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ fontSize: 35 }}/>}
                        className="question-header"
                        >
                            <h3>Lorem ipsum dolor sit amet consectetu adipiscing elit ?</h3>
                        </AccordionSummary>
                        <AccordionDetails className="question-content">
                            <p>
                            Your content goes here. Edit or remove this text inline or in the module Content settings. 
                            You can also style every aspect of this content in the module Design settings and even apply 
                            custom CSS to this text in the module Advanced settings.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </Grid>
      </Grid>
    </div>
  )
}