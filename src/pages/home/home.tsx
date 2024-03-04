import { margin } from "@mui/system";
import "../../app/globals.css";
import BasicDemo from "./submenu";
import Card1 from "@/components/Home/Cards/Card1";
import Card2 from "@/components/Home/Cards/Card2";
import Card3 from "@/components/Home/Cards/Card3";
import HeroSection from "@/components/Home/HeroSection";
import HorizontalCard from "@/components/Home/Cards/HorizontalCard";
import Card4 from "@/components/Home/Cards/Card4";
import ReviewsCard from "@/components/ReviewsCard";
import Footer from "@/components/Footer";
// import VideoBackground from '../../../public/video/'
// import VideoBackground from '../../../public/assets/video/travel.mp4';





export default function home(){
return (
<>
    <HeroSection />

    {/* horizontal card */}
    <div>


        <div className="container-wrapper py-10">
            <p className="text-center font-semibold text-[22px]">Plan an unforgettable trip from your city</p>
        </div>

        {/* very small horizontal card */}
        <div className="container-wrapper justify-center py-10 flex flex-wrap">
            {/* each small horizontal card */}
            <HorizontalCard />
            {/* each small horizontal card */}

            <HorizontalCard />
            {/* each small horizontal card */}

            <HorizontalCard />
            {/* each small horizontal card */}
            <HorizontalCard />

            {/* each small horizontal card */}
            <HorizontalCard />

        </div>

    </div>






    <div className="py-14 bg-slate-100">
        <div className="container-wrapper text-[32px] font-semibold text-center pb-7">
            <p>Lorem, ipsum dolor.</p>
            <p className="text-md font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cupiditate nobis minus?</p>
        </div>
        <Card4 />
    </div>


    















    {/* Card Kuoni copy */}
    <div className="container-wrapper py-14">
        <div className="block md:flex gap-3">
            <div className="max-w-[450px] px-5 items-center pt-20">
                <p className="text-[32px] font-semibold">Looking for a specific style for holiday</p>
                <p className="text-para pt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In consequatur
                    adipisci aliquam rerum error odio, nam, atque nostrum labore harum possimus nesciunt!</p>
            </div>
            <div className=" overflow-x-auto">

                <div className=" flex gap-3 ">
                    <div className=" shrink-0 relative max-w-[290px] rounded-lg overflow-hidden">
                        <img className="relative object-fit h-96"
                            src="https://images.unsplash.com/photo-1627640268913-91cfd4675b65?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                        <div className="absolute bottom-0 px-5 py-2">
                            <p className="text-xl text-white">Self Drive</p>
                            <div className=" line-clamp-2 text-para text-white rounded-md">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque aperiam
                                    exercitationem aliquid!</p>
                            </div>
                        </div>
                    </div>
                    <div className=" shrink-0 relative max-w-[290px] rounded-lg overflow-hidden">
                        <img className="relative object-fit h-96"
                            src="https://images.unsplash.com/photo-1627640268913-91cfd4675b65?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                        <div className="absolute bottom-0 px-5 py-2">
                            <p className="text-xl text-white">Self Drive</p>
                            <div className=" line-clamp-2 text-para text-white rounded-md">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque aperiam
                                    exercitationem aliquid!</p>
                            </div>
                        </div>
                    </div>
                    <div className=" shrink-0 relative max-w-[290px] rounded-lg overflow-hidden">
                        <img className="relative object-fit h-96"
                            src="https://images.unsplash.com/photo-1627640268913-91cfd4675b65?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                        <div className="absolute bottom-0 px-5 py-2">
                            <p className="text-xl text-white">Self Drive</p>
                            <div className=" line-clamp-2 text-para text-white rounded-md">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque aperiam
                                    exercitationem aliquid!</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>












    {/* card tab section */}
    <div className=" my-10">
    <div className="container-wrapper text-[32px] font-semibold text-center pb-7">
            <p>Lorem, ipsum dolor.</p>
            <p className="text-md font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cupiditate nobis minus?</p>
        </div>
        <div className="container-wrapper grid grid-cols-5 gap-3 overflow-hidden">


            <div className="flex flex-col gap-2 py-5">
                <div>
                    <button className="shadow-md bg-amber-600 text-white py-2 px-[80px]  rounded-md">Europe</button>
                </div>
                <div>
                    <button className="shadow-md bg-amber-600 text-white py-2 px-[80px]  rounded-md">Europe</button>
                </div>
                <div>
                    <button className="shadow-md bg-amber-600 text-white py-2 px-[80px]  rounded-md">Europe</button>
                </div>
                <div>
                    <button className="shadow-md bg-amber-600 text-white py-2 px-[80px]  rounded-md">Europe</button>
                </div>
                <div>
                    <button className="shadow-md bg-amber-600 text-white py-2 px-[80px]  rounded-md">Europe</button>
                </div>

            </div>

            <div className="flex gap-4 col-span-4 overflow-auto">

                {/*
                <!-- card 1 --> */}
                <Card3 />
                {/*
                <!-- card 1 --> */}
                <Card3 />

                {/*
                <!-- card 1 --> */}
                <Card3 />
            </div>

        </div>
    </div>








    




    <div>

    </div>









                <div className="py-14">

    {/* rounded card */}
    <div className="container-wrapper text-[32px] font-semibold text-center pb-7">
            <p>Lorem, ipsum dolor.</p>
            <p className="text-md font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cupiditate nobis minus?</p>
        </div>
    <div className="container-wrapper  grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-3">
        {/* card multiple */}
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
    </div>
                </div>


    {/* slider card here */}
    {/* <div className=" container-wrapper block lg:grid grid-cols-[390px,2fr] items-center h-[420px] px-12 pb-40">
        <div className="relative py-[150px] shrink-0 w-[370px] m-auto">
            <div className="absolute z-40 left-6 shadow-xl top-2 rounded-2xl overflow-hidden">
                <img className="w-80 h-[320px] object-cover "
                    src="https://images.unsplash.com/photo-1524026986132-000404263b59?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" />
            </div>
            <div className="absolute z-30 left-12 top-5 shadow-xl rounded-2xl overflow-hidden">
                <img className="w-80 h-[290px] object-cover "
                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" />
            </div>
            <div className="absolute z-20 left-0 top-5 shadow-xl rounded-2xl overflow-hidden">
                <img className="w-80 h-[290px] object-cover"
                    src="https://images.unsplash.com/photo-1512699355324-f07e3106dae5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="" />
            </div>
        </div>
        <div className=" mt-12 px-16">
            <p className="text-[26px] text-black font-semibold pb-5">Discover the World, specially curated for you!</p>
            <p className="text-[14px] pb-3">Our exclusive customized holidays division can cater to every travel need:
                hotel, air tickets, VISA, sightseeings, transfer or the entire package, all designed keeping in mind
                your interests!</p>
            <button className="p-3 bg-yellow-500 rounded-md px-10">Enquire now</button>
        </div>
    </div> */}






    {/* card and small banner */}
    <div className="container-wrapper text-[32px] font-semibold text-center pb-5">
            <p>Lorem, ipsum dolor.</p>
            <p className="text-md font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cupiditate nobis minus?</p>
        </div>

    <div className="container-wrapper   relative">
        <div className="ml-10 flex max-w-[620px] p-5 pr-20 shadow-lg bg-cover bg-center rounded-xl overflow-hidden "
            style={{ backgroundColor: 'rgb(153, 199, 221)', width: '550px', height: '320px' }}>
            <div className="">
                <p style={{ fontSize: '32px', margin: '10px 0', fontFamily: 'italic' }}>Lorem, ipsum dolor.</p>
                <h1 className=" font-bold" style={{ fontSize: '20px' }}>Lorem ipsum dolor sit amet consectetur.</h1>
                <p className="text-sm mt-2 mb-10 line-clamp-2">Lorem ipsum dolor sinsectetur nam assumenda, voluptas,
                    commodi ipsam dignissimos dolor, excepturi vitae. Atque sunt rem laudantium est ducimus aliquam
                    fuga!</p>
                <a href="" style={{ fontSize: '20px', marginTop: '20px' }}>More Information</a>
            </div>
        </div>
        <Card1 />

    </div>

    <div className="pt-40 pb-14">
        <ReviewsCard/>
    </div>


    <div className="py-14 bg-slate-200 mb-10">
    <div className="container-wrapper text-[32px] font-semibold text-center pb-10">
            <p>Lorem, ipsum dolor.</p>
            <p className="text-md font-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cupiditate nobis minus?</p>
        </div>
        <div className="grid grid-cols-3 container-wrapper gap-x-3 gap-y-10 px-5">
            {/* multiple card */}
            <div className="flex gap-2  ">
                <div className=" overflow-hidden ">
                    <img className=" object-cover w-14 h-14 rounded-full"
                        src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="" />
                </div>
                <div>
                    <p className="text-md font-semibold pb-1">Accomondation</p>
                    <p className="text-para font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            {/* multiple card */}
            <div className="flex gap-2  ">
                <div className=" overflow-hidden ">
                    <img className=" object-cover w-14 h-14 rounded-full"
                        src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="" />
                </div>
                <div>
                    <p className="text-md font-semibold pb-1">Accomondation</p>
                    <p className="text-para font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            {/* multiple card */}
            <div className="flex gap-2  ">
                <div className=" overflow-hidden ">
                    <img className=" object-cover w-14 h-14 rounded-full"
                        src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="" />
                </div>
                <div>
                    <p className="text-md font-semibold pb-1">Accomondation</p>
                    <p className="text-para font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            {/* multiple card */}
            <div className="flex gap-2  ">
                <div className=" overflow-hidden ">
                    <img className=" object-cover w-14 h-14 rounded-full"
                        src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="" />
                </div>
                <div>
                    <p className="text-md font-semibold pb-1">Accomondation</p>
                    <p className="text-para font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            {/* multiple card */}
            <div className="flex gap-2  ">
                <div className=" overflow-hidden ">
                    <img className=" object-cover w-14 h-14 rounded-full"
                        src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="" />
                </div>
                <div>
                    <p className="text-md font-semibold pb-1">Accomondation</p>
                    <p className="text-para font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            {/* multiple card */}
            <div className="flex gap-2  ">
                <div className=" overflow-hidden ">
                    <img className=" object-cover w-14 h-14 rounded-full"
                        src="https://images.unsplash.com/photo-1496644256288-2bb0a65f32f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="" />
                </div>
                <div>
                    <p className="text-md font-semibold pb-1">Accomondation</p>
                    <p className="text-para font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </div>


    <Footer/>


    




</>
)
}