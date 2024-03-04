import Addguest from "@/components/addguest";
import "../../../app/globals.css";

export default function(){
    return(
        <>
        
            <div className="border p-3 rounded-md bg-white xs:mt-5 xl:mt-0 xs:hidden xl:block overflow-hidden " >
                <div className="bg-white">
                        <p className="text-base font-bold">Booking Summary</p>
                        <hr />
                </div>
                
                    <div className=" overflow-y-auto">
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
                        {/* <hr className="border-dashed" /> */}
                        <div className="flex justify-between  pt-3 pb-3 ">
                            <div>
                                <p className="text-sm">Basic Price</p>
                                {/* <p className="text-sm underline text-blue font-semibold">View Pricing Table</p> */}
                            </div>
                            <div className="">
                                <p className="text-lg font-medium"> ₹ 40,000</p>
                                <p className="text-xxs">per person on twin sharing</p>
                            </div>
                        </div>
                        
                        
                        <div>
                        <Addguest/>
                        </div>
                        <hr className="border-dashed my-4" />
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
                        <hr className="border-dashed my-2" />
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
        </>
    )
}