


import '../../../../src/app/globals.css'
// import { Link, animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';
// import ViewPlanAlertDialog from "../../../components/viewPlanAlert";
import { Link as ScrollLink } from 'react-scroll';
import Itineraryapi from '@/components/itineraryapi';
import { MdOutlineWhatsapp } from "react-icons/md";
// crousel react
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Calenderfunc from '@/components/Calender';
import Addguest from '@/components/addguest';





export default function details() {

    // tour details
    const[activeTab,setActiveTab]=useState('tab1')

    const handleTabClick = (tour_details:string) => {
        setActiveTab(tour_details);
        // console.log(tour_details)
      };
      
      // upgrades available
      
      const[UpgradesAvalilable,setUpgradesAvalilable]=useState('tab1')
  
      const UpgradesAvalilableTabClick=(UpgradesAvalilable:string)=> {
        setUpgradesAvalilable(UpgradesAvalilable);
        console.log(UpgradesAvalilable)
        };

    
    // Itinerary
    // const [isItinerary,setIsItinerary]=useState(true)
    // const openCloseItinerary=()=>{
    //     setIsItinerary(!isItinerary)
    //     console.log(isItinerary)
    // }
    






return <div className=''>
    
    {/*Bo0king Summary View Plan  */}
    
    
      {/* <ViewPlanAlertDialog/> */}
      
                

    {/*  */}
    <Addguest/>

    
    
        <div className='xl:hidden items-center bg-green fixed bottom-0 z-[60] px-5 bg-slate-100 rounded-lg md:bg-slate-100 w-full pb-2 md:py-3'>
            <div className='block md:justify-evenly md:flex items-center'>
            <div className="mt-5 relative ">
                            <div className='z-40 absolute m-auto top-[-5px] flex items-center justify-center ml-[4.5rem]'>

                            <p className="hidden md:block  rounded-full bg-yellow-400 w-[120px] px-[12px] text-[10px] font-bold">
                                ₹
                                EMI
                                AVAIABLE
                            </p>
                            </div>
                            <div className="z-30 hidden md:flex  justify-between align-middle bg-orange-200 py-1 sm:py-6 px-2 rounded-md  ">
                                <div>
                                    <p className="text-[12px] md:text-[14px] font-bold mb-2">From ₹2,0399/month</p>
                                    <p className="text-[10px] md:text-[12px]">No Cost EMI also a available</p>
                                </div>
                                <div>
                                    {/* <p className="text-[14px] font-bold underline text-blue-900"> > </p> */}
                                </div>
                            </div>
                        </div>
                {/*  */}
                <div className="md:flex  md:justify-end">
                <div className="md:flex justify-between md:gap-3 items-center mt-4">
                    <div className='flex items-center py-2'>
                        <div className="block md:hidden grow text-center bg-orange-200 py-1 sm:py-6 px-2 rounded-md  ">
                                <div>
                                    <p className="text-[12px] md:text-[14px] font-bold mb-2">From ₹2,0399/month</p>
                                    <p className="text-[10px] md:text-[12px]">No Cost EMI </p>
                                </div>
                                <div>
                                    {/* <p className="text-[14px] font-bold underline text-blue-900"> > </p> */}
                                </div>
                            </div>
                        <div className=" grow text-right ">
                            <p className="text-[12px] sm:text-xs leading-5 text-green-600 font-semibold">SUPER DEAL PRICE</p>
                            <p className="text-[10px] sm:text-xxs leading-5">Starts From <span className="text-[22px] font-medium">₹
                                    3,50,000</span>
                            </p>
                            <p className="hidden sm:block text-[9px] md:text-[10px] leading-5">per person on twin sharing</p>
                            <p className="text-[12px] sm:text-sm leading-5 font-medium underline text-blue">from ₹ 19,423/months</p>
                        </div>
                    </div>
                    <div className="grow">
                        <p className=" sm:leading-7 mb-2 bg-orange-400 px-5 py-1 sm:py-2 rounded-md text-white text-center "><a>Date & Price</a></p>
                        <p className="sm:leading-7 border px-5 sm:py-2 py-1 rounded-md text-center bg-white"><a>View Price</a></p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    





    <div className="container-wrapper">
        <div className="text-xs breadcrumbs mb-5 ">
            <ul>
                <li ><a>Home</a></li>
                <li><a>Documents</a></li>
                <li className='font-semibold'>Add Document</li>
            </ul>
        </div>
    </div>

    {/* */}
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

    {/* Select departure city */}
    <div className="bg-gray-100 mt-[20px]">
        <div className="container-wrapper">

        <div className="mb-[20px] pt-[40px]">
                <h1 className="text-lg font-medium">Select departure city, dates & add guest to book your tour</h1>
                <p className="italic text-slate-600 text-sm">As seats fill, prices increase! So book today!</p>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-[2fr,1fr] gap-x-3">
            <div className="flex flex-col gap-4 border rounded-md p-3 relative bg-white">
                    <div className="">
                        <div className="flex gap-3">
                            <p className="text-base font-bold p-4">1. SELECT DEPARTURE CITY & DATE</p>
                        </div>
                        <hr />
                        <div className="overflow-y-scroll ">
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
                                    <Calenderfunc/>
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
                                <div className='bg-green-500 w-full'>
                                    <p className='absolute border-b text-indigo-800 text-semibold cursor-pointer text-sm right-24 capitalize'>More</p>
                                </div>
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

                <div className="border p-3 rounded-md bg-white xs:mt-5 xl:mt-0 xs:hidden xl:block" >
                    <div>
                        <p className="text-base font-bold">Booking Summary</p>
                        <hr />
                        <div className="flex mb-[10px] mt-5 text-sm">
                            <p className=" w-20">Dept. city : </p>
                            <p className="font-semibold">Mumbai</p>
                        </div>
                        <div className="flex mb-[10px] text-sm">
                            <p className=" w-20">Dept. date :</p>
                            <p className=" font-bold">10 Mar 2024 - 17 Mar 2024</p>
                        </div>
                        <div className="flex mb-[10px] text-sm">
                            <p className=" w-20">Traveller :</p>
                            <p className=" font-semibold">0 Adults (s)</p>
                        </div>
                        <div className="flex mb-[10px] text-sm">
                            <p className=" w-20">Rooms :</p>
                            <p className=" font-semibold">0 Rooms</p>
                        </div>
                        <hr className="border-dashed mt-10 mb-2" />
                        <div className="flex justify-between">
                            <div>
                                <p className="text-sm">Basic Price</p>
                                <p className="text-sm underline text-blue font-semibold">View Pricing Table</p>
                            </div>
                            <div>
                                <p className="text-lg font-medium"> ₹ 40,000</p>
                                <p className="text-xxs">per person on twin sharing</p>
                            </div>
                        </div>
                        <div className="mt-5 relative ">
                            <div className='z-40 absolute translate-x-full top-[-8px] flex items-center justify-center'>

                            <p className="  rounded-full bg-yellow-300 text-center text-gray-700 w-[120px] px-[12px] text-xxs font-bold">
                                ₹
                                EMI
                                AVAIABLE
                            </p>
                            </div>
                            <div className="z-30  flex justify-between align-middle bg-orange-200 py-6 px-2 rounded-md  ">
                                <div>
                                    <p className="text-sm font-bold mb-2">From ₹2,0399/month</p>
                                    <p className="text-xs">No Cost EMI also a available</p>
                                </div>
                                <div>
                                    {/* <p className="text-[14px] font-bold underline text-blue-900"> > </p> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-2">
                            <div>
                                <p className="text-sm font-semibold text-blue">1800 22 7972</p>
                            </div>
                            <div>
                                <p className="text-xs"><span className="text-[13px] underline text-blue font-semibold">Locate</span> nearest
                                    Bizare
                                    Expenditure</p>
                            </div>
                        </div>
                        <hr className="border-dashed my-4" />
                        <div>
                            <span className="bg-primary  text-white flex justify-center py-3 rounded-md">Add Guests
                                and
                                Rooms</span>
                        </div>
                        <div className='text-para grid grid-cols-2 my-3'>
                            <div>
                            </div>
                            <div className='grid grid-cols-2'>
                                <p>Total Cost</p>
                                <p className=''>70,000</p>
                            </div>
                        </div>
                        <div className='text-para grid grid-cols-2 -mt-2'>
                            <div>
                            </div>
                            <div className='grid grid-cols-2'>
                                <p>GST 5% </p>
                                <p className=''>2,300</p>
                            </div>
                        </div>
                        <hr className="border-dashed mt-1" />
                        <div className='text-para grid grid-cols-2'>
                            <div>
                            </div>
                            <div className='grid grid-cols-2 gap-1'>
                                <p>Grand Total</p>
                                <p className='font-semibold'>70,000</p>
                            </div>
                        </div>
                        <div className='flex justify-center gap-10 my-3'>
                            <label className=" inline-flex items-center">
                                <input type="radio" className=" form-radio text-primary" name="radio-group" />
                                <span className="ml-2 font-semibold">Pay 25% Now</span>
                            </label>

                            <label className=" inline-flex items-center">
                                <input type="radio" className="form-radio text-primary" name="radio-group" />
                                <span className="ml-2 font-semibold">Pay Full Online</span>
                            </label>

  
                        </div>
                        <div className='flex gap-3'>
                            <button className=" border-primary border text-primary flex-flow grow  flex justify-center py-3 rounded-md">Customise</button>
                            <button className="bg-primary grow  text-white flex justify-center py-3 rounded-md">Book now</button>
                        </div>

                    </div>


                </div>


               

                <div className="flex gap-5 py-4 mb-5 bg-green">
                    <p className="text-xxs font-semibold">Terms and Conditions apply</p>
                    <p className="text-xxs font-semibold">5% GST is applicable on given tour price</p>
                    <p className="text-xxs font-semibold">Mentioned tour prices are Per Person for Indian Nationals
                        only.
                    </p>
                </div>
            </div>
        </div>


    </div>



    {/* */}
    <div>
    <div id="ItinerarySection" className="bg-white py-3 shadow-md sticky top-0 z-40">
        <div className="container-wrapper gap-5 md:gap-12 xs:pb-5 md:pb-0  flex justity-start overflow-x-auto ">
            <div>
            <ScrollLink
            to="ItinerarySubSection" // The ID of the section you want to scroll to
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset based on your layout (navbar height, etc.)
            duration={500}
          >
                <p className=" text-para cursor-pointer hover:border-b-2 font-semibold border-amber-600 py-2 hover:text-orange-800">Itinerary</p>
          </ScrollLink>
            </div>
            <div>
            <ScrollLink
            to="TourDetailsSection" // The ID of the section you want to scroll to
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset based on your layout (navbar height, etc.)
            duration={500}
          >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2 font-semibold border-amber-600 py-2 hover:text-orange-800">Tour Details</p>
          </ScrollLink>
            </div>
            <div><ScrollLink
            to="TourInformationSection" // The ID of the section you want to scroll to
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset based on your layout (navbar height, etc.)
            duration={500}
          >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2 font-semibold border-amber-600 py-2 hover:text-orange-800">Tour Information</p>
          </ScrollLink>
            </div>
            <div>
            <ScrollLink
            to="NeedToKnowSection" // The ID of the section you want to scroll to
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset based on your layout (navbar height, etc.)
            duration={500}
          >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2 font-semibold border-amber-600 py-2 hover:text-orange-800">Need to Know</p>
          </ScrollLink>
            </div>
            <div>
            <ScrollLink
            to="Policy&TermsSection" // The ID of the section you want to scroll to
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset based on your layout (navbar height, etc.)
            duration={500}
          >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2 font-semibold border-amber-600 py-2 hover:text-orange-800">Policy & Terms</p>
          </ScrollLink>
            </div>
            <div>
            <ScrollLink
            to="UpgradesSection" // The ID of the section you want to scroll to
            spy={true}
            smooth={true}
            offset={-70} // Adjust this offset based on your layout (navbar height, etc.)
            duration={500}
          >
                <p className="text-center w-[120px] text-para cursor-pointer hover:border-b-2 font-semibold border-amber-600 py-2 hover:text-orange-800">Upgrades</p>
          </ScrollLink>
            </div>
        </div>
    </div>

    <div className="container-wrapper  grid grid-cols-1 xl:grid-cols-[2fr,1fr]">
        <div>

        <div className='p-5'>
                <img className='rounded-xl shadow-md'
                    src="https://uploads.exoticca.com/p/15367/45697/i/ism_horizontal_aspect_ratio_3_29.jpg" alt="" />
            </div>

            <div id='ItinerarySubSection'  className="flex justify-between my-5">
                <p className="text-lg font-semibold">Itinerary <span
                        className="text-[13px] italic text-slate-600 ">(Day Wise)</span></p>
                <p onClick={()=>setIsItinerary(!isItinerary)} className="cursor-pointer text-[14px] text-blue font-medium underline">View all days</p>
            </div>
            <div>
                <p className='text-para' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, id quibusdam! Veritatis qui,
                    nostrum praesentium labore corrupti consequatur sapiente provident. Omnis saepe laborum eveniet,
                    animi deleniti odit quisquam, sapiente voluptate expedita maiores voluptatum, illo rerum.</p>
            </div>
            
            {/* woriking */}
            {/*
            <!--------------------------------------------------------- itenery data show in multiple time  --------------------------------------------------------------------------------------------------------> */}
            <div className=" justify-between mt-8">
                <Itineraryapi/>
                <Itineraryapi/>
                <Itineraryapi/>
                <Itineraryapi/>
                <Itineraryapi/>
            </div>


           

            
            
        {/* <!--------------------------------------------------------- itenery data show End  --------------------------------------------------------------------------------------------------------> */}


            






















            

            
            {/* <!-- TOUR DETAILS IS HERE --> */} 
            <div id="TourDetailsSection">
                <div className="mt-12">
                    <p className="text-lg font-semibold">Tour Details</p>
                    <p className="text-sm italic text-slate-600">Best facilities with no added cost.</p>
                </div>
                <div className="flex justify-between mt-5 gap-2 border-b-2 border-navyblack">
                    <div onClick={() => handleTabClick('tab1')} className={`cursor-pointer rounded-t-lg py-2 grow text-center text-[16px]   ${activeTab === 'tab1' ? 'bg-navyblack text-white' : 'text-slate-400 border-x-[1px] border-t-[1px] border-navyblacklite  bg-slate-200'}`}>
                        <p className='text-sm'>Akhf Details </p>
                    </div>
                    <div onClick={() => handleTabClick('tab2')} className={`cursor-pointer rounded-t-lg py-2   grow text-center text-[16px]   ${activeTab === 'tab2' ? 'bg-navyblack text-white' : 'text-slate-400 border-x-[1px] border-t-[1px] border-navyblacklite  bg-slate-200'}`}>
                        <p className='text-sm'>Flight Details </p>
                    </div>
                    <div onClick={() => handleTabClick('tab3')} className={`cursor-pointer rounded-t-lg py-2   grow text-center text-[16px]   ${activeTab === 'tab3' ? 'bg-navyblack text-white' : 'text-slate-400 border-x-[1px] border-t-[1px] border-navyblacklite bg-slate-200'}`}>
                        <p className='text-sm'>Flight Details </p>
                    </div>

                </div>
                <div className="border rounded-b-lg  overflow-hidden">
                    <div className={`md:p-5 xs:p-0 xs:overflow-x-auto list-disc mx-5 ${activeTab === 'tab1' ? 'block' : 'hidden'}`}>
                        <div>
                            <div className='mb-5'>
                                <p className='text-sm font-semibold'>Departure & Arrival</p>
                            </div>
                            <div className='flex'>
                                <div className='grow'>
                                    <p className='text-base font-semibold'>Mumbai</p>
                                    <p className='text-sm '>03 March 06:20 AM</p>
                                </div>
                                <div className='grow flex flex-col justify-center items-center' >
                                    <div >
                                        <img className='w-20' src="https://seeklogo.com/images/I/indigo-airlines-logo-B3BBFD5004-seeklogo.com.png" alt="" />
                                    </div>
                                    <div className='flex relative items-center mt-2'>
                                        
                                        <hr className=' w-10' />
                                        
                                        <div className='border px-7 rounded-full flex'>
                                            <span className='text-[10px]' >-:-</span>
                                        </div>
                                        <hr className=' w-10' />
                                    </div>
                                </div>
                                <div className='grow text-right'>
                                    <p className='text-base font-semibold'>Mumbai</p>
                                    <p className='text-sm '>03 March 06:20 AM</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    {/* use this tour informatio ref veena world */}
                    {/* <ul className={`p-5 list-disc ml-[20px] ${activeTab === 'tab1' ? 'block' : 'hidden'}`}>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        
                    </ul> */}
                    <div className={`py-5 list-disc  ${activeTab === 'tab2' ? 'block' : 'hidden'}`}>
                        <div className=''>
                            <table className='w-full'>
                                <tbody>
                                    <tr className='flex justify-between '>
                                        <td className='grow text-base font-semibold text-center'>City - Country</td>
                                        <td className='grow text-base font-semibold text-center'>Hotel</td>
                                        <td className='grow text-base font-semibold  text-center'>Check In - Check Out</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className=''>
                            <table className='w-full'>
                                <tbody>
                                    <tr className='flex justify-between even:bg-white odd:bg-slate-100 text-center'>
                                        <td className='grow text-sm py-2  text-center'>City - Country</td>
                                        <td className='grow text-sm py-2  text-center'>Hotel</td>
                                        <td className='grow text-sm py-2  text-center'>Check In - Check Out</td>
                                    </tr>
                                    <tr className='flex justify-between even:bg-white odd:bg-slate-100 text-center'>
                                        <td className='grow text-sm py-2  text-center'>City - Country</td>
                                        <td className='grow text-sm py-2  text-center'>Hotel</td>
                                        <td className='grow text-sm py-2  text-center'>Check In - Check Out</td>
                                    </tr>
                                    <tr className='flex justify-between even:bg-white odd:bg-slate-100 text-center'>
                                        <td className='grow text-sm py-2  text-center'>City - Country</td>
                                        <td className='grow text-sm py-2  text-center'>Hotel</td>
                                        <td className='grow text-sm py-2  text-center'>Check In - Check Out</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                    <div className={` ${activeTab === 'tab3' ? 'block' : 'hidden'}`}>
                        <div className='grid grid-cols-[0.9fr,,2fr] border-b-2'>
                            <div className=' bg-slate-100 px-5  pt-3 pb-2 '>
                                <p className='leading-7 text-sm'>Guest type</p>
                                <p className='leading-7 text-sm'>reporting time</p>
                                <p className='leading-7 text-sm'>dropping time</p>
                            </div>
                            <div className='px-5 pt-3 pb-2'>
                                <p className='leading-7 text-sm'>shkjs shfj sjh</p>
                                <p className='leading-7 text-sm'>lorem sdfsdfsf</p>
                                <p className='leading-7 text-sm'>sdfev rtr er slorem</p>
                            </div>
                            
                        </div>
                        <div className='grid grid-cols-[0.9fr,,2fr]'>
                            <div className=' bg-slate-100 px-5  pt-3 pb-2 '>
                                <p className='leading-7 text-sm'>Guest type</p>
                                <p className='leading-7 text-sm'>reporting time</p>
                                <p className='leading-7 text-sm '>dropping time</p>
                            </div>
                            <div className='px-5 pt-3 pb-2'>
                                <p className='leading-7 text-sm'>shkjs shfj sjh</p>
                                <p className='leading-7 text-sm'>lorem sdfsdfsf</p>
                                <p className='leading-7 text-sm'>sdfev rtr er slorem</p>
                            </div>
                            
                        </div>
                        
                        
                        
                    </div>

                </div>

            </div>

            

            <div id='Policy&TermsSection' className='pt-12'>
                <div className="my-[10px] mb-[20px]">
                    <p className="text-lg font-semibold">Payment Terms</p>
                    <p className="text-sm italic text-slate-600">Things to consider before the trip!</p>
                </div>
                {/* only midium devices */}
                <div className="lg:block hidden">
                    <div className="border-b border-slate-600">
                        <div className="lg:flex max-[600px]:block">
                            <div className="bg-navyblack flex items-center p-3 rounded-tl-lg">
                                <p className="text-sm text-white w-[180px]"> Cancellation received no. of days prior
                                    to
                                    departure</p>
                            </div>
                            <div
                                className="bg-slate- lg:flex justify-between text-xs p-2 items-center w-full rounded-tr-lg border-t border-r border-navyblacklite max-[600px]:block">
                                <div
                                    className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center w-[70px] ">
                                    <p>D</p>
                                    <p>0 to 5</p>
                                </div>
                                <div
                                    className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                                    <p>D</p>
                                    <p>6 to 15</p>
                                </div>
                                <div
                                    className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                                    <p>D</p>
                                    <p>16 to 30</p>
                                </div>
                                <div
                                    className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                                    <p>D</p>
                                    <p>31 to 45</p>
                                </div>
                                <div
                                    className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                                    <p>D</p>
                                    <p>46 to 60</p>
                                </div>
                                <div
                                    className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                                    <p>D</p>
                                    <p>61 to 90</p>
                                </div>
                                <div
                                    className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                                    <p>D</p>
                                    <p>91 to 120</p>
                                </div>
                                <div
                                    className="flex lg:flex-col max-[600px]:flex-row max-[900px]:my-3 gap-1 items-center lg:w-[70px]">
                                    <p>D</p>
                                    <p>121 to 900</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*
                    <!-- --> */}
                    <div>
                        <div className="flex">
                            <div className="bg-navyblack flex items-center p-3 rounded-bl-lg">
                                <p className="text-sm text-white w-[180px]">Cancellation received no. of days prior
                                    to
                                    departure</p>
                            </div>
                            <div
                                className="bg-white flex justify-between w-full text-sm p-2 items-center rounded-br-lg border-b border-r border-slate-600">
                                <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                    <p>100%</p>
                                </div>
                                <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                    <p>85%</p>
                                </div>
                                <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                    <p>75%</p>
                                </div>
                                <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                    <p>50%</p>
                                </div>
                                <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                    <p>30%</p>
                                </div>
                                <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                    <p>20%</p>
                                </div>
                                <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                    <p>15%</p>
                                </div>
                                <div className="flex lg:flex-col max-[600px]:flex-row gap-1 items-center w-[70px]">
                                    <p>10%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*
                    <!-- --> */}
                </div>

                {/* all small devices */}
                <div className='lg:hidden'>
                    <div className='flex  border-b rounded-md' >
                        <div className='grow'>
                            <div className='bg-navyblack p-3 text-white'>
                                <p className='text-sm'>Cancellation received no. of days prior to departure</p>
                            </div>
                            <div>
                                <table className='w-full border-r text-sm'>
                                    <tbody >
                                        
                                        <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                            <td className='py-2' >Right-0 to 5</td>
                                        </tr>
                                        <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                            <td className='py-2' >D-0 to 5</td>
                                        </tr>
                                        <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                            <td className='py-2' >D-0 to 5</td>
                                        </tr>
                                        <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                            <td className='py-2' >D-0 to 5</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>

                            
                        </div>
                        {/* right */}
                        <div className='grow'>
                            <div className='bg-navyblack p-3 text-white'>
                                <p className='text-sm'>Cancellation received no. of days prior to departure</p>
                            </div>
                            <div>
                                <table className='w-full text-sm'>
                                    <tbody >
                                        
                                        <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                            <td className='py-2' >New-0 to 5</td>
                                        </tr>
                                        <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                            <td className='py-2' >D-0 to 5</td>
                                        </tr>
                                        <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                            <td className='py-2' >D-0 to 5</td>
                                        </tr>
                                        <tr className='my-10 even:bg-white odd:bg-slate-100 text-center'>
                                            <td className='py-2' >D-0 to 5</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>

                            
                        </div>
                        
                        
                    </div>                    
                </div>

                <div>

                    <div className="mt-5">
                        <div className="my-[10px]">
                            <p className="text-base font-semibold">Payment Terms</p>
                            <p className="text-para">Guest can pay by Cheque/ Demand Draft/ Debit card / Credit card/
                                NEFT/ RTGS/ IMPS. For Debit / Credit card payment additional 1.8 % convenience charge
                                will be applicable Cheque / Demand draft should be in favour of "Veena Patil Hospitality
                                Pvt ltd"</p>
                        </div>
                        <p className="text-[16px] font-semibold leading-9">Remark</p>
                        <ul className="list-disc ml-[20px]">
                            <li className="text-para leading-8">All meals will be provided by Veena World in case the
                                flight reaches the stipulated destination early morning or leaves destination late in
                                the evening.</li>
                            <li className="text-para leading-8">In Case if any sightseeing is not done due to weekly
                                closure, an alternative sightseeing will be done for the same.</li>
                            <li className="text-para leading-8">All meals will be provided by Veena World in case the
                                flight reaches the stipulated destination early morning or leaves destination late in
                                the evening.</li>
                            <li className="text-para leading-8">In Case if any sightseeing is not done due to weekly
                                closure, an alternative sightseeing will be done for the same.</li>
                        </ul>

                    </div>

                </div>

                {/*
                <!--  --> */}

                <div id='UpgradesSection'>
                    <div className="mt-12">
                        <p className="text-lg font-semibold">Upgrades Available</p>
                        <p className="text-sm italic text-slate-600">Best facilities with no added cost.</p>
                    </div>
                    <div className="flex justify-between mt-5 gap-2 border-b-2 border-indigo-900">
                        <div onClick={()=>{UpgradesAvalilableTabClick("tab1")}} className={`cursor-pointer rounded-t-lg py-2 px-10 bg-indigo-900 grow text-center text-[16px]   ${UpgradesAvalilable === 'tab1' ? 'bg-indigo-900 text-white' : 'text-slate-400 border-x-[1px] border-t-[1px] border-indigo-900  bg-slate-200'}`}>
                            <p className='text-sm'>Flight Details </p>
                        </div>
                        <div onClick={()=>{UpgradesAvalilableTabClick("tab2")}}  className={`cursor-pointer rounded-t-lg py-2 px-10 bg-indigo-900 grow text-center text-[16px]   ${UpgradesAvalilable === 'tab2' ? 'bg-indigo-900 text-white' : 'text-slate-400 border-x-[1px] border-t-[1px] border-indigo-900  bg-slate-200'}`}>
                            <p className='text-sm'>Flight Details </p>
                        </div>

                    </div>
                    <div className="border p-5 ">
                    <ul className={`list-disc ml-[20px] ${UpgradesAvalilable === 'tab1' ? 'block' : 'hidden'}`}>
                        <li className="leading-8 text-[15px]"><span></span>Tab 1</li>
                        
                    </ul>
                    <ul className={`list-disc ml-[20px] ${UpgradesAvalilable === 'tab2' ? 'block' : 'hidden'}`}>
                        <li className="leading-8 text-[15px]"><span></span>Tab 2</li>
                        
                    </ul>
                    </div>

                </div>
            </div>

        </div>
        <div className="hidden xl:block mt-10">
            <div className='sticky top-20 z-20'>
                
            <div className="flex gap-1 items-center  justify-end ">
                <div className="items-center flex flex-col p-2 text-center">
                    <img className="w-4" src="https://www.svgrepo.com/show/475692/whatsapp-color.svg" alt="" />
                    <p className="text-[12px]">Send Itinerary</p>
                </div>

                <div className="border-l h-full items-center flex flex-col p-2 text-center">
                    <img className="w-4" src="https://www.svgrepo.com/show/522439/printer.svg" alt="" />
                    <p className="text-[12px]">Print Itinerary</p>
                </div>
                <div className="border-l h-full items-center flex flex-col p-2 text-center">
                    <img className="w-4" src="https://www.svgrepo.com/show/522399/envelope-closed.svg" alt="" />
                    <p className="text-[12px]">Email Itinerary</p>
                </div>

            </div>
            {/* card is here */}
            <div className="relative flex-shrink-0 max-w-[18rem] mt-5 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border ml-[80px]">
            <div
                className="relative mx-4 mt-4 overflow-hidden text-white  rounded-md bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                    alt="ui/ux review check" />
                <div
                    className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                </div>
                
            </div>
            <div className="px-6 py-4">
                <div className="flex items-center justify-between mb-3">
                    <h5
                        className=" text-lg font-semibold leading-snug ">
                        Wooden House, Florida
                    </h5>
                    <p
                        className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="-mt-0.5 h-5 w-5 text-primary">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"></path>
                        </svg>
                        5.0
                    </p>
                </div>
                
                    <div>
                        <p className='text-[14px] line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing. Assenda maxime impedit adipisci? Ipsa cupiditate magnam ex, temporibus non cumque amet et saepe.</p>
                    </div>
                <div className="flex justify-center mt-5">
                    <div className="text-right">
                        {/* <p className="text-[14px] leading-5 text-cyan-400 font-semibold">SUPER DEAL PRICE</p> */}
                        <p className="text-[12px] leading-4 text-green-600">Starts From <span className="text-[20px] text-black font-medium">₹
                                3,50,000</span></p>
                        {/* <p className="text-[10px] leading-5">per person on twin sharing</p> */}
                        <p className="text-[14px] leading-5 font-medium underline text-blue">from ₹ 19,423/months
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-6 pt-3">
                <button
                    className="text-white bg-primary w-full py-3 rounded-md font-semibold text-base "
                    type="button">
                    View details
                </button>
            </div>
        </div>
            </div>
            
        </div>
    </div>

</div>


    {/* Reviews */}
    <div className="bg-cyan-950 mt-10">
        <div className="container-wrapper ">
            <div className="text-center pt-10">
                <h3 className="text-2xl leading-8 font-semibold text-white">Bizare Expenditure tour reviews</h3>
                <p className="text-xs leading-8 font-semibold text-white"> What are you waiting for? Chalo Bag Bharo Nikal
                    Pado!
                </p>
            </div>

            <div className="flex gap-3 justify-between py-10 max-[1180px]:overflow-x-scroll">
                {/*
                <!-- card 1--> */}
                <div
                    className=" bg-white rounded-lg p-5 relative flex-shrink-0 max-w-[22rem] flex-col bg-clip-border shadow-lg">
                    <div className="flex gap-3">
                        <p className="flex  gap-1 font-semibold">
                            <span className="flex align-middle">
                                <img className="w-[15px] " src="https://www.svgrepo.com/show/13695/star.svg" alt="" />
                            </span>
                            5</p>
                        <p
                            className=" px-2 border rounded-sm text-sm text-center text-amber-600 border-amber-600">
                            Faimly</p>
                    </div>
                    <p className="text-base font-semibold mt-3 mb-3">European Jewels with Versailles</p>
                    <p className="line-clamp-3 text-para italic ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, fugit! Vero, itaque pariatur
                        cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                        corporis dicta!
                    </p>
                    <span className="text-para italic underline text-blue">more</span>
                    <div>
                        <p className="text-paras font-semibold mt-5">Anita Kumari</p>
                        <p className="text-sm">Travelled in Sep,2023</p>
                    </div>
                </div>

                

                
                {/*
                <!-- card --> */}
                {/*
                <!-- card 1--> */}
                <div
                    className=" bg-white rounded-lg p-5 relative flex-shrink-0 max-w-[22rem] flex-col bg-clip-border shadow-lg">
                    <div className="flex gap-3">
                        <p className="flex  gap-1 font-semibold">
                            <span className="flex align-middle">
                                <img className="w-[15px] " src="https://www.svgrepo.com/show/13695/star.svg" alt="" />
                            </span>
                            5</p>
                        <p
                            className=" px-2 border rounded-sm text-sm text-center text-amber-600 border-amber-600">
                            Faimly</p>
                    </div>
                    <p className="text-base font-semibold mt-3 mb-3">European Jewels with Versailles</p>
                    <p className="line-clamp-3 text-para italic ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, fugit! Vero, itaque pariatur
                        cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                        corporis dicta!
                    </p>
                    <span className="text-para italic underline text-blue">more</span>
                    <div>
                        <p className="text-paras font-semibold mt-5">Anita Kumari</p>
                        <p className="text-sm">Travelled in Sep,2023</p>
                    </div>
                </div>

                

                
                {/*
                <!-- card --> */}
                {/*
                <!-- card 1--> */}
                <div
                    className=" bg-white rounded-lg p-5 relative flex-shrink-0 max-w-[22rem] flex-col bg-clip-border shadow-lg">
                    <div className="flex gap-3">
                        <p className="flex  gap-1 font-semibold">
                            <span className="flex align-middle">
                                <img className="w-[15px] " src="https://www.svgrepo.com/show/13695/star.svg" alt="" />
                            </span>
                            5</p>
                        <p
                            className=" px-2 border rounded-sm text-sm text-center text-amber-600 border-amber-600">
                            Faimly</p>
                    </div>
                    <p className="text-base font-semibold mt-3 mb-3">European Jewels with Versailles</p>
                    <p className="line-clamp-3 text-para italic ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, fugit! Vero, itaque pariatur
                        cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                        corporis dicta!
                    </p>
                    <span className="text-para italic underline text-blue">more</span>
                    <div>
                        <p className="text-paras font-semibold mt-5">Anita Kumari</p>
                        <p className="text-sm">Travelled in Sep,2023</p>
                    </div>
                </div>

                

                
                {/*
                <!-- card --> */}



            </div>
            {/*
            <!-- button --> */}
            <div className="text-center pb-10">
                <button className="bg-primary p-3 px-5 text-base text-white rounded-md">Read More Reviews</button>
            </div>

        </div>
    </div>


    {/* Similar tour */}

    <div className="container-wrapper pt-10 pb-5">
        <h2 className="text-2xl ">Similar Tours for You</h2>
        <p className='italic text-sm'>Explore more intersted tour</p>
    </div>

    <div className="container-wrapper flex gap-3 justify-between max-[1180px]:overflow-x-scroll  w-full p-1">
        {/*
        <!-- card 1 --> */}
        <div
            className="relative flex-shrink-0 max-w-[22rem] flex-col rounded-md bg-white bg-clip-border text-gray-700 shadow-md border">
            <div
                className="relative mx-4 mt-4 overflow-hidden text-white rounded-md bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                    alt="ui/ux review check" />
                <div
                    className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                </div>
                
            </div>
            <div className="px-6 py-3">
                <div className="flex items-center justify-between mb-3">
                    <h5
                        className="block  text-lg font-semibold  leading-snug ">
                        Wooden House, Florida
                    </h5>
                    <p
                        className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="-mt-0.5 h-5 w-5 text-primary">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"></path>
                        </svg>
                        5.0
                    </p>
                </div>
                <div className='line-clamp-3'>
                <p className="block font-sans text-md text-gray-700">
                    Enter a freshly updated and thoughtfully furnished peaceful home
                    surrounded by ancient trees, stone walls, and open meadows.
                </p>
                </div>
                <div className="flex justify-between mt-5">
                    <div>

                        <div className="flex mt-6">
                            <div className="z-30">
                                <p
                                    className="rounded-full bg-white w-[30px] h-[30px] text-center border-2 border-x-primary">
                                    ₹
                                </p>
                            </div>
                            <div className="bg-indigo-200 p-1 px-3 mx-[-10px] rounded-sm">
                                <p className="text-indigo-800 text-[12px] font-semibold pl-1">Quick Quote</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-sm leading-5 text-green-700 font-bold">SUPER DEAL PRICE</p>
                        <p className="text-xxs leading-5">Starts From <span className="text-md font-semibold ">₹
                                3,50,000</span></p>
                        
                        <p className="text-sm leading-5 font-medium underline text-blue">from ₹ 19,423/months
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-6 pt-1 pb-3 mb-1">
                <button
                    className="text-white bg-primary w-full py-3 rounded-md font-semibold text-base "
                    type="button">
                    View details
                </button>
            </div>
        </div>
        {/* End */}
        {/*
        <!-- card 1 --> */}
        <div
            className="relative flex-shrink-0 max-w-[22rem] flex-col rounded-md bg-white bg-clip-border text-gray-700 shadow-md border">
            <div
                className="relative mx-4 mt-4 overflow-hidden text-white rounded-md bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                    alt="ui/ux review check" />
                <div
                    className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                </div>
                
            </div>
            <div className="px-6 py-3">
                <div className="flex items-center justify-between mb-3">
                    <h5
                        className="block  text-lg font-semibold  leading-snug ">
                        Wooden House, Florida
                    </h5>
                    <p
                        className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="-mt-0.5 h-5 w-5 text-primary">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"></path>
                        </svg>
                        5.0
                    </p>
                </div>
                <div className='line-clamp-3'>
                <p className="block font-sans text-md text-gray-700">
                    Enter a freshly updated and thoughtfully furnished peaceful home
                    surrounded by ancient trees, stone walls, and open meadows.
                </p>
                </div>
                <div className="flex justify-between mt-5">
                    <div>

                        <div className="flex mt-6">
                            <div className="z-30">
                                <p
                                    className="rounded-full bg-white w-[30px] h-[30px] text-center border-2 border-x-primary">
                                    ₹
                                </p>
                            </div>
                            <div className="bg-indigo-200 p-1 px-3 mx-[-10px] rounded-sm">
                                <p className="text-indigo-800 text-[12px] font-semibold pl-1">Quick Quote</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-sm leading-5 text-green-700 font-bold">SUPER DEAL PRICE</p>
                        <p className="text-xxs leading-5">Starts From <span className="text-md font-semibold ">₹
                                3,50,000</span></p>
                        
                        <p className="text-sm leading-5 font-medium underline text-blue">from ₹ 19,423/months
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-6 pt-1 pb-3 mb-1">
                <button
                    className="text-white bg-primary w-full py-3 rounded-md font-semibold text-base "
                    type="button">
                    View details
                </button>
            </div>
        </div>
        {/* End */}
        {/*
        <!-- card 1 --> */}
        <div
            className="relative flex-shrink-0 max-w-[22rem] flex-col rounded-md bg-white bg-clip-border text-gray-700 shadow-md border">
            <div
                className="relative mx-4 mt-4 overflow-hidden text-white rounded-md bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                    alt="ui/ux review check" />
                <div
                    className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                </div>
                
            </div>
            <div className="px-6 py-3">
                <div className="flex items-center justify-between mb-3">
                    <h5
                        className="block  text-lg font-semibold  leading-snug ">
                        Wooden House, Florida
                    </h5>
                    <p
                        className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="-mt-0.5 h-5 w-5 text-primary">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"></path>
                        </svg>
                        5.0
                    </p>
                </div>
                <div className='line-clamp-3'>
                <p className="block font-sans text-md text-gray-700">
                    Enter a freshly updated and thoughtfully furnished peaceful home
                    surrounded by ancient trees, stone walls, and open meadows.
                </p>
                </div>
                <div className="flex justify-between mt-5">
                    <div>

                        <div className="flex mt-6">
                            <div className="z-30">
                                <p
                                    className="rounded-full bg-white w-[30px] h-[30px] text-center border-2 border-x-primary">
                                    ₹
                                </p>
                            </div>
                            <div className="bg-indigo-200 p-1 px-3 mx-[-10px] rounded-sm">
                                <p className="text-indigo-800 text-[12px] font-semibold pl-1">Quick Quote</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-sm leading-5 text-green-700 font-bold">SUPER DEAL PRICE</p>
                        <p className="text-xxs leading-5">Starts From <span className="text-md font-semibold ">₹
                                3,50,000</span></p>
                        
                        <p className="text-sm leading-5 font-medium underline text-blue">from ₹ 19,423/months
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-6 pt-1 pb-3 mb-1">
                <button
                    className="text-white bg-primary w-full py-3 rounded-md font-semibold text-base "
                    type="button">
                    View details
                </button>
            </div>
        </div>
        {/* End */}
        
       
    </div>

    <div className='container-wrapper  grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-2'>
        <div className='p-5 rounded-md border shadow-lg'>
            <div>
                <img className=' h-52 w-full object-cover rounded-sm' src="https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>


            <div className='my-3'>
                <p className=' leading-8 text-para'>Hello i am small text</p>
                <p className='text-md font-semibold'>Lorem ipsum  Ipsum aliquid nihil inventore, nesciunt modi debitis minima omnis.</p>
                <p className=' leading-9 text-base'>Lorem, ipsum dolor.</p>
                <p className='text-base'><span>17 days · <span> 10 places</span> · <span> 3 countries</span></span></p>
            </div>

            <div className='pt-5'>
            {/* <div className='flex justify-between items-end'> */}

            <div className='flex justify-end '>
                <button className='text-md bg-navyblack px-6 py-3 text-white rounded-md'>View</button>
            </div>


            </div>


        </div>
    </div>
    














        <div className='container-wrapper py-3'>
            <hr />
            <div className='grid grid-cols-2  md:grid-cols-4 py-5 my-5  gap-5 text-center'>
                <div className='bg-slate-200 '>
                    <img src="https://w7.pngwing.com/pngs/341/135/png-transparent-logo-google-customer-service-review-google.png" alt="" />
                </div>
                <div className='bg-slate-200 '>
                    <img src="https://w7.pngwing.com/pngs/341/135/png-transparent-logo-google-customer-service-review-google.png" alt="" />
                </div>
                <div className='bg-slate-200 '>
                    <img src="https://w7.pngwing.com/pngs/341/135/png-transparent-logo-google-customer-service-review-google.png" alt="" />
                </div>
                <div className='bg-slate-200 '>
                    <img src="https://w7.pngwing.com/pngs/341/135/png-transparent-logo-google-customer-service-review-google.png" alt="" />
                </div>
                
            </div>
            <hr />
        </div>


{/* add guest pop up desiging */}
        <div className='container-wrapper'>
        <div className=' shadow-sm border rounded-lg'>
                <div>
                    add guest & Choose from
                </div>
                <hr />
                <div className='flex items-center gap-10 '>
                <label htmlFor="cars">
                    <div>
                        <img src="" alt="" />
                        <div>
                            <p>Adults <span className='italic'>(Above 12 yrs)</span> </p>
                        </div>
                    </div>
                </label>

                <select id="cars" className='border px-4 py-1'>
                <option value="1" className=''>1</option> 
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                </select>
                    
                </div>

                <div>
                <div className="flex flex-col ">
                    <div className='my-4'>
                        <label className="inline-flex items-center">
                            <input type="radio" className="form-radio text-primary" name="radio-group" />
                            <p className="ml-2 text-base font-semibold">1 Twin Room - 2 Adults</p>
                        </label>
                            <div className='ml-7'>
                                <img src="" alt="" />
                                <p className='text-base'>1 Twin Bed in each room</p>
                            </div>
                    </div>
                    <div className='my-4'>
                        <label className="inline-flex items-center">
                            <input type="radio" className="form-radio text-primary" name="radio-group" />
                            <p className="ml-2 text-base font-semibold">1 Twin Room - 2 Adults</p>
                        </label>
                            <div className='ml-7'>
                                <img src="" alt="" />
                                <p className='text-base'>1 Twin Bed in each room</p>
                            </div>
                    </div>
                    <div className='my-4'>
                        <label className="inline-flex items-center">
                            <input type="radio" className="form-radio text-primary" name="radio-group" />
                            <p className="ml-2 text-base font-semibold">1 Twin Room - 2 Adults</p>
                        </label>
                            <div className='ml-7'>
                                <img src="" alt="" />
                                <p className='text-base'>1 Twin Bed in each room</p>
                            </div>
                    </div>

                        

                        
                        </div>
                </div>


             </div>
        </div>




    <div className='mb-80'></div>
    <div className='mb-80'>t</div>
    <div className='mb-80'>t</div>



    <Carousel className='container-wrapper '>
                <div >
                    <img className='w-full h-60 object-cover' src="https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    
                </div>
                <div>
                    <img className='w-full h-60 object-cover' src="https://images.unsplash.com/photo-1708583625790-732008e8f277?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img className='w-full h-60 object-cover' src="https://plus.unsplash.com/premium_photo-1708276242787-387acf1bbd4b?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>








</div>
}