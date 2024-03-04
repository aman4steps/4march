import "../../../app/globals.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Slider from "react-slick";



const Card4 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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

return (
    <div className="">

        <div className="container-wrapper px-6 overflow-hidden">
            <Slider {...settings}>
                <div className="shadow-md max-w-[280px] rounded-lg overflow-hidden">
                    <div className="relative">
                        <img className=" relative w-full h-52 object-cover z-10"
                            src="https://plus.unsplash.com/premium_photo-1663127576306-9d9de0a47318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                        <div className="flex gap-4 absolute bottom-0 z-20 px-2">
                            <p className="font-semibold text-md text-white ">Turkey</p>
                            <p className="font-semibold text-md text-white">11 Days</p>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-5 px-2 py-2 bg-white">
                        <p className="text-lg font-semibold">Treasures of Anatolia</p>
                        <p className="text-para line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                            officiis non, hic quod magni id eligendi tempore quia dolores sed, voluptas perspiciatis aliquam
                            accusantium rem ex nesciunt excepturi qui placeat?</p>
                        <div>
                            <p className=" line-through text-sm">Rs. 1,199</p>
                            <div className="flex gap-5 items-center">
                                <p className="text-md font-semibold">Rs. 599</p>
                                <button className="bg-primary text-xs py-2 px-3 text-white ">-50%</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shadow-md  max-w-[280px] rounded-lg overflow-hidden">
                    <div className="relative">
                        <img className=" relative w-full h-52 object-cover z-10"
                            src="https://plus.unsplash.com/premium_photo-1663127576306-9d9de0a47318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                        <div className="flex gap-4 absolute bottom-0 z-20 px-2">
                            <p className="font-semibold text-md text-white ">Turkey</p>
                            <p className="font-semibold text-md text-white">11 Days</p>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-5 px-2 py-2 bg-white">
                        <p className="text-lg font-semibold">Treasures of Anatolia</p>
                        <p className="text-para line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                            officiis non, hic quod magni id eligendi tempore quia dolores sed, voluptas perspiciatis aliquam
                            accusantium rem ex nesciunt excepturi qui placeat?</p>
                        <div>
                            <p className=" line-through text-sm">Rs. 1,199</p>
                            <div className="flex gap-5 items-center">
                                <p className="text-md font-semibold">Rs. 599</p>
                                <button className="bg-primary text-xs py-2 px-3 text-white ">-50%</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shadow-md  max-w-[280px] rounded-lg overflow-hidden">
                    <div className="relative">
                        <img className=" relative w-full h-52 object-cover z-10"
                            src="https://plus.unsplash.com/premium_photo-1663127576306-9d9de0a47318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" />
                        <div className="flex gap-4 absolute bottom-0 z-20 px-2" >
                            <p className="font-semibold text-md text-white ">Turkey</p>
                            <p className="font-semibold text-md text-white">11 Days</p>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-5 px-2 py-2 bg-white">
                        <p className="text-lg font-semibold">Treasures of Anatolia</p>
                        <p className="text-para line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                            officiis non, hic quod magni id eligendi tempore quia dolores sed, voluptas perspiciatis aliquam
                            accusantium rem ex nesciunt excepturi qui placeat?</p>
                        <div>
                            <p className=" line-through text-sm">Rs. 1,199</p>
                            <div className="flex gap-5 items-center">
                                <p className="text-md font-semibold">Rs. 599</p>
                                <button className="bg-primary text-xs py-2 px-3 text-white ">-50%</button>
                            </div>
                        </div>
                    </div>
                </div>

                        
                



            </Slider>

        </div>
    </div>
)
}

export default Card4