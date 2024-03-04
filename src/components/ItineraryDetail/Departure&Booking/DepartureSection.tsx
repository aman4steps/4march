import CalendarFunc from "@/components/Calender";
import "../../../app/globals.css";
export default function(){
    return(
        <>
            <div>
            <div className="flex flex-col gap-4 border rounded-md p-3 relative bg-white">
                    <div className="">
                        <div className="flex gap-3">
                            <p className="text-base font-bold p-4">1. SELECT DEPARTURE CITY & DATE</p>
                        </div>
                        <hr />
                        <div className="overflow-y-auto ">
                            <div className="flex gap-3 py-4">
                                <div className="font-semibold text-sm border rounded-full py-2 px-3.5">
                                    <span></span>All
                                    departure</div>
                                <div className="font-semibold text-sm border rounded-full py-2 px-3.5"><span></span>
                                    Mumbai
                                </div>
                                <div className="font-semibold text-sm border rounded-full py-2 px-3.5"><span></span>
                                    Joining/Leaving</div>
                            </div>
                            
                            {/* select departure city */}
                            <div className=' relative flex flex-wrap gap-4  py-4'>
                                <div className='ml-2'>
                                    <CalendarFunc/>
                                </div>
                                <div className='ml-2'>
                                    <p className='font-semibold text-base mb-2 mt-1'>About us</p>
                                    <p className='text-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta excepturi provident sit, vitae, veritatis voluptatum magnam labore, aperiam vero ex hic.</p>
                                </div>

                                <div>
                                <p className='text-md ml-2 font-semibold my-2'>Highlists</p>
                                <div>
                                    <ol className='list-disc   '>
                                        <li className='ml-10 text-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ut commodi numquam.</li>
                                        <li className='ml-10 text-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ut commodi numquam.</li>
                                        <li className='ml-10 text-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ut commodi numquam.</li>
                                        <li className='ml-10 text-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ut commodi numquam.</li>
                                        </ol>
                                    {/* shadow */}
                                    {/* <div className='bottom-4 ml-5 absolute shadow-t-4 shadow-lg bg-slate-200 opacity-50 w-[85%] h-3 '></div> */}
                                </div>
                                {/* <div className='bg-green-500 w-full'>
                                    <p className='absolute border-b text-indigo-800 text-semibold cursor-pointer text-sm right-24 capitalize'>More</p>
                                </div> */}
                                </div>




                            </div>
                        </div>

                    </div>
                    <hr className="mb-4" />
                    <div className="absolute bottom-0 bg-white my-1">
                        <p className="text-sm">View itinerary for the tours you have booked by logging into your
                            account.</p>
                    </div>

                </div>
            </div>
        </>
    )
}