// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";

import img1 from '../../assets/carousel2/img1.png'
import img2 from '../../assets/carousel2/img2.png'
import img3 from '../../assets/carousel2/img3.png'


const Carousel = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                speed={1500}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                loop={true}
                pagination={{
                clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper w-full h-[90vh] rounded-xl"
            >
                <SwiperSlide className="w-full h-full rounded-xl overflow-hidden">
                    <div className="relative w-full h-full">
                        <img className="w-full h-full object-cover object-center" src={img1} alt="" />
                        <div className="absolute top-0 w-full h-full text-[#ffc9c4] bg-black bg-opacity-75 flex justify-center items-center tracking-wider">
                            <div>
                                <h1 className="text-7xl w-3/4 mx-auto text-center font-bold">Join Us in Making a Difference</h1>
                                <p className="w-3/4 mx-auto mt-10 text-gray-200 text-center text-lg">Become a volunteer and contribute to meaningful projects in your community. Together, we can create positive change and impact lives.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full h-full rounded-xl overflow-hidden">
                    <div className="relative w-full h-full">
                        <img className="w-full h-full object-cover object-center" src={img2} alt="" />
                        <div className="absolute top-0 w-full h-full text-[#ffc9c4] bg-black bg-opacity-75 flex justify-center items-center tracking-wider">
                            <div>
                                <h1 className="text-7xl w-3/4 mx-auto text-center font-bold">Discover Exciting Volunteer Opportunities</h1>
                                <p className="w-3/4 mx-auto mt-10 text-gray-200 text-center text-lg">Explore a wide range of volunteer opportunities tailored to your interests and skills. Find projects that align with your passion and make a meaningful impact.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full h-full rounded-xl overflow-hidden">
                    <div className="relative w-full h-full">
                        <img className="w-full h-full object-cover object-center" src={img3} alt="" />
                        <div className="absolute top-0 w-full h-full text-[#ffc9c4] bg-black bg-opacity-75 flex justify-center items-center tracking-wider">
                            <div>
                                <h1 className="text-7xl w-3/4 mx-auto text-center font-bold">Make a Lasting Impact with Your Time</h1>
                                <p className="w-3/4 mx-auto mt-10 text-gray-200 text-center text-lg">our time and skills matter. Join our community of volunteers and make a lasting impact on the lives of individuals in need. Every small effort counts.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;