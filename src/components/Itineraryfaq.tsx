import "../app/globals.css";


export const Itineraryfaqheading=()=>{
    return(
        <>
            <div className="flex justify-between">
                <div className=" ">
                    <div className="flex items-center gap-3">
                        <div className="bg-navyblack text-white px-2 py-1 rounded-sm">
                            <p className="text-xs font-semibold">Day 1</p>
                        </div>
                        <div>
                            <p className="text-base font-semibold">Delhi - Chandigarh (1 Night)</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export const ItineraryFaq=()=>{
    return(
        <>
            
            <div className="relative">

                


                {/* ------------------------------------------------------------------------ */}
            <div className="relative text-para pl-10 border-l ml-4 border-limeyellow border-dashed pb-2">
                {/* circle */}
                <div className="-left-3 absolute bg-primary h-6 w-6 rounded-full">
                </div>
                <p className="text-base font-semibold text-black">Your Text Heading</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam aspernatur nesciunt deleniti
                    repellendus cum architecto, porro accusamus quibusdam, omnis fuga fugiat possimus eveniet.</p>
                <p>Dress Color for today : Yellow</p>
                {/* 2 Time Multiple */}
                <div className='my-5' >
                    <div className='flex gap-5'>
                        <p className='text-base font-semibold' >Today’s Sightseeing</p>
                    </div>
                    {/* 2 time multiple  */}
                    <div className="pl-5 py-3">
                        <div className='flex gap-2'>
                            <img className='w-5'
                                src="https://www.reshot.com/preview-assets/icons/TZCXQGV5F4/maps-TZCXQGV5F4.svg" alt="" />
                            <p className='text-sm leading-7' >Today’s Sightseeing</p>
                        </div>
                        <div className='flex gap-2'>
                            <img className='w-5 '
                                src="https://www.reshot.com/preview-assets/icons/TZCXQGV5F4/maps-TZCXQGV5F4.svg" alt="" />
                            <p className='text-sm leading-7' >Today’s Sightseeing</p>
                        </div>
                    </div>
                    
                </div>
                
            </div>


            </div>

            
        </>
    )

}