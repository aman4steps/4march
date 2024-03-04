import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
// import {ItineraryFaq,Itineraryfaqheading} from './Itineraryfaq';


export default function() {
  return (
    <div className='w-3/4 m-auto '>
        <div className='text-center mb-10'>
            <p className='text-2xl'>HighLight & Inclusion</p>
            
            <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      <Accordion className='my-2 shadow-none border-y-[1px] bg-[#F1F5F9] outline-0 ' >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-white'/>}
          aria-controls="panel1-content"
          id="panel1-header"
          className=' bg-navyblack text-white '
          sx={{borderRadius:1}}
        >
            {/* itenaray heading is here */}
          {/* <Itineraryfaqheading/>  */}
          <p className='text-md'>Expanded by default Lorem, ipsum dolor.</p>
        </AccordionSummary>
        <AccordionDetails className='border-0 mt-1'>
            {/* itenery data is here */}
          {/* <ItineraryFaq/> */}
          <ul className='list-disc pl-5'>
            <li className='text-para leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</li>
            <li className='text-para leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</li>
            <li className='text-para leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</li>
            <li className='text-para leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</li>
            <li className='text-para leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</li>
            <li className='text-para leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</li>
          </ul>
          
        </AccordionDetails>
      </Accordion>
      
      
      <Accordion className='my-2 shadow-none border-y-[1px] bg-[#F1F5F9] outline-0 ' >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-white'/>}
          aria-controls="panel1-content"
          id="panel1-header"
          className=' bg-navyblack text-white '
          sx={{borderRadius:1}}
        >
            {/* itenaray heading is here */}
          {/* <Itineraryfaqheading/>  */}
          <p className='text-md'>Expanded by default Lorem, ipsum dolor.</p>
        </AccordionSummary>
        <AccordionDetails className='border-0 mt-1'>
            {/* itenery data is here */}
          {/* <ItineraryFaq/> */}
          <ul className='list-disc pl-5'>
            <li className='text-para '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</li>
          </ul>
          
        </AccordionDetails>
      </Accordion>
      
      
      <Accordion className='my-2 shadow-none border-y-[1px] bg-[#F1F5F9] outline-0 ' >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-white'/>}
          aria-controls="panel1-content"
          id="panel1-header"
          className=' bg-navyblack text-white '
          sx={{borderRadius:1}}
        >
            {/* itenaray heading is here */}
          {/* <Itineraryfaqheading/>  */}
          <p className='text-md'>Expanded by default Lorem, ipsum dolor.</p>
        </AccordionSummary>
        <AccordionDetails className='border-0 mt-1'>
            {/* itenery data is here */}
          {/* <ItineraryFaq/> */}
          <ul className='list-disc pl-5'>
            <li className='text-para '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</li>
          </ul>
          
        </AccordionDetails>
      </Accordion>
      
      
      
      
    </div>
  );
}
