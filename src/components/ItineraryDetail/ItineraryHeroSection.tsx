import "../../app/globals.css";
import { MdOutlineWhatsapp } from "react-icons/md";
import { Link as ScrollLink } from 'react-scroll';
export default function(){
    return(
        <>
            <div>
            <div className="container-wrapper grid grid-cols-1 xl:grid-cols-[2fr,1fr]  gap-4 ">
        <div className="">
            <img className="rounded-md h-[350px] object-cover shadow-md"
                src="https://img.veenaworld.com/group-tours/world/europe/eujw/eujw-bnn-1.jpg" alt="" />
        </div>

        <div className="justify-end flex-col gap-y-4 md:justify-center hidden xl:flex ">
            <div className="">
                <img className="rounded-md h-[167px] object-cover shadow-md"
                    src="https://img.veenaworld.com/group-tours/world/europe/eujw/eujw-bnn-1.jpg" alt="" />
            </div>
            <div className="">
                <img className="rounded-md h-[167px] max-md-full object-cover shadow-md"
                    src="https://img.veenaworld.com/group-tours/world/europe/eujw/eujw-bnn-1.jpg" alt="" />
            </div>
        </div>
        <div>
            <div>
                <div className="flex justify-between my-2">
                    <h1 className="  text-xl font-semibold">Europe jewels with Versailles</h1>
                    <div className="flex items-center justify-center border rounded-full w-6 h-6">
                        <img className=" p-1 " src="https://www.svgrepo.com/show/13666/heart.svg" alt="" />
                    </div>
                </div>
                <div className='stick top-1'>
                    <div className="flex flex-wrap gap-2 text-xxs font-semibold text-white">
                        <button className=' rounded-badge bg-navyblack py-1 px-2'>8 Days / 7 Nights</button>
                        <button className=' rounded-badge py-1 px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 capitalize'>Early bird sales!</button>

                    </div>
                    <div className="flex justify-between mt-2">
                        <div className="flex flex-wrap gap-1 items-center">
                            {/* <p className="text-xs"> <span>London</span> 15 Days ---</p>
                            <p className="text-xs"> <span>Paris</span> 15 Days ---</p>
                            <p className="text-xs"> <span>Brussels</span> 15 Days</p>
                            <p className="text-xs underline"> +20 more cities</p> */}
                            <p className='text-md '>Start & City: <span className='font-semibold'>Mumbai</span></p>
                        </div>
                        <div className="flex gap-2 items-center ">
                            <div>
                            <MdOutlineWhatsapp size={25} className='cursor-pointer'/>
                            </div>
                            
                            
                            <div>
                            <ScrollLink
                                to="ItinerarySection" // The ID of the section you want to scroll to
                                spy={true}
                                smooth={true}
                                offset={0} // Adjust this offset based on your layout (navbar height, etc.)
                                duration={500}
                            >
                                <p  className="hidden md:block text-sm underline text-blue font-medium cursor-pointer">View Iternery Page</p>
                            </ScrollLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-end">
            <div className="hidden xl:flex gap-1">
                <div className="text-right flex flex-col items-end justify-center ">
                    <p className="text-base leading-5 text-green-600 font-semibold uppercase">best deal price</p>
                    <div className='flex gap-1 items-end'>
                    <p className='text-sm line-through'>₹20,000</p>
                    <button className='uppercase text-xxs text-white bg-navyblack px-1 py-1 rounded-sm text-center'>37% Off</button>
                    </div>
                    <p className="text-sm leading-5">Starts From <span className="text-lg font-medium">₹
                            3,50,000</span>
                    </p>
                    <p className="text-xxs leading-5">per person on twin sharing</p>
                    
                </div>
                <div className="flex flex-col align-middle my-auto pl-2 gap-2">
                    <p className="bg-primary px-5 py-2 rounded-md text-white text-center text-para"><a>Book Now</a></p>
                    <p className="border px-5 py-2 rounded-md text-center text-para"><a>Customise</a></p>
                </div>
            </div>
        </div>

        {/* 3images */}


    </div>
            </div>
        </>
    )
}