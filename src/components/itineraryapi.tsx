import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import {ItineraryFaq,Itineraryfaqheading} from './Itineraryfaq';


export default function itineraryapi() {
  return (
    <div className=''>
      <Accordion className='mb-4 border-none shadow-none'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className=' shadow-sm bg-lightgray m-0'
        >
            {/* itenaray heading is here */}
          <Itineraryfaqheading/> 
        </AccordionSummary>
        <AccordionDetails className='border-0 mt-2'>
            {/* itenery data is here */}
          <ItineraryFaq/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
