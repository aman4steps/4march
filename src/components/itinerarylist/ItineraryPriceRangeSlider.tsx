import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';


const MAX = 100;
const MIN = 0;
const marks = [
  {
    value: MIN,
    label: '',
  },
  {
    value: MAX,
    label: '',
  },
];

export default function() {
  const [val, setVal] = React.useState(MIN);
  const handleChange = (_: any, newValue:any) => {
    setVal(newValue);
  };

  return (
    <Box >
      <Slider
        className='w-full'
        marks={marks}
        step={10}
        value={val}
        valueLabelDisplay="auto"
        min={MIN}
        max={MAX}
        onChange={handleChange}
        sx={{color:"#2A2C41"}}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
        <p
          className='text-para'
          onClick={() => setVal(MIN)}
        >
          {MIN} Package
        </p>
        <p
          className='text-para'
          onClick={() => setVal(MAX)}
        >
          {MAX} Packages
        </p>
      </Box>
    </Box>
  );
}