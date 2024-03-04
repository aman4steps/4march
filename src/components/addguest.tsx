import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MdBedroomChild } from "react-icons/md";
import { IoMan } from "react-icons/io5";
import { FaChild } from "react-icons/fa";
import { MdChildFriendly } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import CalendarFunc from './Calender';



export default function Addguest() {
const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
setOpen(true);
};

const handleClose = () => {
setOpen(false);
};

return (
<React.Fragment>
    
      <span onClick={handleClickOpen}  className="cursor-pointer bg-navyblack hover:border hover:border-navyblack hover:text-navyblack hover:bg-white  text-white flex justify-center py-3 rounded-md">Add Guests Rooms</span>
      <Dialog className='h-[90%] my-auto'
        open={open}
        
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        // maxWidth="md"
        fullWidth

      >

<div className=' '>
    <div className='relative'>
        <div className='sticky top-0 shadow-md z-2'>

        <div className='flex justify-between items-center py-3 px-5 bg-white'>
            <p className=' capitalize text-md font-semibold'>
                add guest & Choose from
            </p>
            <IoIosClose className='cursor-pointer' onClick={handleClose} size={40} />
            
        </div>
        <hr />
        </div>
        <div className='overflow-y-auto md:px-12 px-2'>
            <div className='flex items-center gap-10 mt-5'>
                <label htmlFor="Adultsdropdown" className='my-2'>
                    <div className='flex gap-3 items-center'>
                        <IoMan />
                        <div>
                            <p className="text-para">Adults <span className=' text-slate-400 font-light'>(Above 12
                                    yrs)</span> </p>
                        </div>
                    </div>
                </label>

                <select id="Adultsdropdown" className='border px-4 py-1 rounded-md'>
                    <option value="0" className=''>0</option>
                    <option value="1" className=''>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">4</option>
                    <option value="6">6</option>
                </select>

            </div>
            <div className='flex items-center gap-10 '>
                <label htmlFor="Childdropdown" className='my-2'>
                    <div className='flex gap-3 items-center'>
                        <FaChild />
                        <div>
                            <p className="text-para">Child<span className='  text-slate-400 font-light'> (Age 2 - 11
                                    yrs)</span> </p>
                        </div>
                    </div>
                </label>

                <select id="Childdropdown" className='border px-4 py-1 rounded-md'>
                    <option value="0" className=''>0</option>
                    <option value="1" className=''>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

            </div>
            <div className='flex items-center gap-10 '>
                <label htmlFor="Infantdropdown" className='my-2'>
                    <div className='flex gap-3 items-center'>
                        <MdChildFriendly />
                        <div>
                            <p className="text-para">Infant <span className='text-slate-400 font-light '>(Age 0 - 2
                                    yrs)</span> </p>
                        </div>
                    </div>
                </label>

                <select id="Infantdropdown" className='border px-4 py-1 rounded-md'>
                    <option value="0" className=''>0</option>
                    <option value="1" className=''>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

            </div>

            {/* <div className='mt-4'>
                <p className='text-blue cursor-pointer hover:underline'>Add room</p>
            </div> */}
            <div className='my-4'>
                <CalendarFunc/>
            </div>

            <div>
                <div className="flex flex-col mt-8">
                    <div className='mb-2 flex gap-24 items-center'>
                        <div>
                            <p className="ml-2 text-para font-semibold cursor-pointer">1 Twin Room - 2 Adults</p>
                            <div className='ml-7 flex gap-3 items-center'>
                                <MdBedroomChild size={20} />
                                <p className='text-para'>1 Twin Bed in each room</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <FaCircleMinus size={18} className='cursor-pointer text-navyblack hover:text-slate-700'/>
                            <p className='text-para'>3</p>
                            <FaCirclePlus size={19} className='cursor-pointer text-navyblack hover:text-slate-700'/>
                        </div>
                    </div>
                    <hr className='my-2' />
                    <div className='mb-2 flex gap-24 items-center'>
                        <div>
                            <p className="ml-2 text-para font-semibold cursor-pointer">1 Twin Room - 2 Adults</p>
                            <div className='ml-7 flex gap-3 items-center'>
                                <MdBedroomChild size={20} />
                                <p className='text-para'>1 Twin Bed in each room</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <FaCircleMinus size={18} className='cursor-pointer text-navyblack hover:text-slate-700'/>
                            <p className='text-para'>3</p>
                            <FaCirclePlus size={19} className='cursor-pointer text-navyblack hover:text-slate-700'/>
                        </div>
                    </div>
                    <hr className='my-2' />
                    <div className='mb-2 flex gap-24 items-center'>
                        <div>
                            <p className="ml-2 text-para font-semibold cursor-pointer">1 Twin Room - 2 Adults</p>
                            <div className='ml-7 flex gap-3 items-center'>
                                <MdBedroomChild size={20} />
                                <p className='text-para'>1 Twin Bed in each room</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <FaCircleMinus size={18} className='cursor-pointer text-navyblack hover:text-slate-700'/>
                            <p className='text-para'>3</p>
                            <FaCirclePlus size={19} className='cursor-pointer text-navyblack hover:text-slate-700'/>
                        </div>
                    </div>
                    <hr className='my-2' />
                    
                    
                    
                    




                </div>
            </div>


            <div className='mt-5'>
                <p className='bg-navyblack text-white pl-5 rounded-md'>Transports</p>
                <div className='flex-col flex items-center justify-between border-b md:flex-row mb-2'>
                    <img className=' w-32 h-24 object-cover'
                        src="https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80"
                        alt="" />
                    <div className='items-center flex flex-col md:block'>
                        <p className='font-semibold'>Maruti Suzuki <span className='text-sm  text-blue font-normal ml-2 hover:underline cursor-pointer'>About</span></p>
                        <p className='text-para'>6 Guest Spaces</p>
                    </div>
                    <div className='items-center flex flex-col'>
                        {/* <p className='font-semibold text-base'>₹ 20,000</p> */}
                        <button className='border border-navyblack  text-navyblack text-para px-3 py-2 rounded-md hover:bg-navyblack hover:text-white'>Select</button>
                    </div>
                </div>
                
                





            </div>
        </div>

    </div>
    <div className=' bottom-0 sticky bg-slate-50 border-t py-2 px-4 flex justify-between items-center'>
        <div>
            <div className='flex gap-4'>
                <p className='text-sm'><span className='font-semibold'>2</span>Adults</p>
                <p className='text-sm'><span className='font-semibold'>2</span>Child</p>
                <p className='text-sm'><span className='font-semibold'>2</span>Infant</p>
            </div>
            <div>
                <p className='font-semibold text-sm md:text-base'>1 Twin Room-2 Adults</p>
            </div>
            <div className='text-sm flex gap-2 md:gap-4'>
                <p>Transport : <span className='font-semibold'>Maruti Suzuki</span></p>
                <p>Capacity : <span className='font-semibold'>6</span></p>
            </div>
        </div>
        <button className='bg-navyblack  py-1 text-white rounded-md hover:bg-slate-400 h-12 px-4'>Submit</button>
    </div>

</div>
</Dialog>
</React.Fragment>
);
}