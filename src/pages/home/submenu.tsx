import React, { useState } from 'react';
import { MegaMenu } from 'primereact/megamenu';
import { MenuItem } from 'primereact/menuitem';
export default function BasicDemo() {
    const [isHovered, setIsHovered] = useState(false);
return(
    <>
    
<div className="h-[450px] p-5 bg-slate-500 mt-10 grid grid-cols-[1fr,2fr]">
    <div className="flex flex-col ">
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <button className="py-2 px-10 text-red-200 bg-red-600 ">hello</button>
      
    </div>
        <button className="py-2 px-10 text-red-200 bg-red-600 ">hello</button>
        <button className="py-2 px-10 text-red-200 bg-red-600 ">hello</button>
        <button className="py-2 px-10 text-red-200 bg-red-600 ">hello</button>
    </div>
    <div className='bg-white flex gap-5 '>
    {isHovered && 
        <div className='mx-5'>
            <p className='font-semibold'>Delhi</p>
            <div>
                <p className='underline font-semibold'>Himachal Pradesh</p>
                <div>
                    <p className='leading-7'>Srinagar</p>
                    <p className='leading-7'>Srinagar</p>
                    <p className='leading-7'>Srinagar</p>
                </div>
                <p className='underline font-semibold'> Pradesh</p>
                <div>
                    <p className='leading-7'>Srinagar</p>
                    <p className='leading-7'>Srinagar</p>
                    <p className='leading-7'>Srinagar</p>
                </div>
            </div>
        </div>
}
        <div className='mx-5'>
            <p className='font-semibold'>Delhi</p>
            <div>
                <p className='underline font-semibold'>Himachal Pradesh</p>
                <div>
                    <p className='leading-7'>Srinagar</p>
                    <p className='leading-7'>Srinagar</p>
                    <p className='leading-7'>Srinagar</p>
                    <p className='leading-7'>Srinagar</p>
                    <p className='leading-7'>Srinagar</p>
                    <p className='leading-7'>Srinagar</p>
                    <p className='leading-7'>Srinagar</p>
                    <p className='leading-7'>Srinagar</p>
                    <p className='leading-7'>Srinagar</p>
                </div>
            </div>
        </div>
        
       


    </div>



    








</div>










</>
)
}