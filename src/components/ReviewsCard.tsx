import "../app/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Slider from "react-slick";




export default function(){
    var settings = {
dots: false,
infinite: true,
speed: 500,
slidesToShow: 3,
slidesToScroll: 1,
responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    
  ]
};
    return(
        <>

            <div className="bg-cyan-950 mt-10">
        <div className="container-wrapper ">
            <div className="text-center pt-10">
                <h3 className="text-2xl leading-8 font-semibold text-white">Bizare Expenditure tour reviews</h3>
                <p className="text-xs leading-8 font-semibold text-white"> What are you waiting for? Chalo Bag Bharo Nikal
                    Pado!
                </p>
            </div>

            <div className=" my-5 mx-4 sm:px-3 sm:mx-0">
            <Slider {...settings}>
                {/* <!-- card 1--> */}
                <div className="px-2 sm:px-2 md:px-2">

                    <div
                        className="  bg-white rounded-lg p-5 relative sm:max-w-72  md:max-w-[360px] flex-col bg-clip-border shadow-lg">
                        <div>
                            <div>
                                <img className="w-full h-44 object-cover rounded-md mb-3" src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>

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
                        </div>
                        <p className="text-base font-semibold mt-3 mb-3">European Jewels with Versailles</p>
                        <p className="line-clamp-3 text-para italic ">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, fugit! Vero, itaque pariatur
                            cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                            cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                            cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                            cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                            cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                            cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                            cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                            corporis dicta!
                        </p>
                        <span className="text-para italic underline text-blue">more</span>
                        <div>
                            <p className="text-paras font-semibold mt-5">Anita Kumari</p>
                            <p className="text-sm">Travelled in Sep,2023</p>
                        </div>
                    </div>
                </div>
                {/*<!-- card End --> */}
                {/* <!-- card 1--> */}
                <div className="px-2 sm:px-2 md:px-2">

                    <div
                        className="  bg-white rounded-lg p-5 relative sm:max-w-72  md:max-w-[360px] flex-col bg-clip-border shadow-lg">
                        <div>
                            <div>
                                <img className="w-full h-44 object-cover rounded-md mb-3" src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>

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
                        </div>
                        <p className="text-base font-semibold mt-3 mb-3">European Jewels with Versailles</p>
                        <p className="line-clamp-3 text-para italic ">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, fugit! Vero, itaque pariatur
                            cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                            cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                            cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                            cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                            cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                            cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                            cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                            corporis dicta!
                        </p>
                        <span className="text-para italic underline text-blue">more</span>
                        <div>
                            <p className="text-paras font-semibold mt-5">Anita Kumari</p>
                            <p className="text-sm">Travelled in Sep,2023</p>
                        </div>
                    </div>
                </div>
                {/*<!-- card End --> */}
                {/* <!-- card 1--> */}
                <div className="px-2 sm:px-2 md:px-2">

                    <div
                        className="  bg-white rounded-lg p-5 relative sm:max-w-72  md:max-w-[360px] flex-col bg-clip-border shadow-lg">
                        <div>
                            <div>
                                <img className="w-full h-44 object-cover rounded-md mb-3" src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>

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
                        </div>
                        <p className="text-base font-semibold mt-3 mb-3">European Jewels with Versailles</p>
                        <p className="line-clamp-3 text-para italic ">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, fugit! Vero, itaque pariatur
                            cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                            cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                            cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                            cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                            cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                            cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                            cumque sint ad quidem consequatur quis animi eligendi assumenda! Nostrum ad explicabo animi
                            corporis dicta!
                        </p>
                        <span className="text-para italic underline text-blue">more</span>
                        <div>
                            <p className="text-paras font-semibold mt-5">Anita Kumari</p>
                            <p className="text-sm">Travelled in Sep,2023</p>
                        </div>
                    </div>
                </div>
                {/*<!-- card End --> */}
                
                
                


            </Slider>
            </div>
            {/*
            <!-- button --> */}
            <div className="text-center pb-10">
                <button className="bg-primary p-3 px-5 text-base text-white rounded-md">Read More Reviews</button>
            </div>

        </div>
    </div>
        </>
    )
}