'use client';

import { LandmarkCardProps } from "@/utils/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import OtherInfo from "./OtherInfo";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = ({ landmarks }: { landmarks: LandmarkCardProps[] }) => {
    return (
        <Swiper
            navigation={true}
            modules={[Navigation, Autoplay, Pagination]}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            className="mySwiper"
        >
            {landmarks.length === 0 ? (
                <p>No landmarks available</p>
            ) : (
                landmarks.map((landmark) => (
                    <SwiperSlide key={landmark.image} className="group">
                        <div className="relative rounded-md overflow-hidden">
                            <img
                                className="w-full h-[600px] object-cover brightness-90 group-hover:brightness-75 transition-all duration-300"
                                src={landmark.image}
                                alt={landmark.name}
                            />
                            <div className='absolute bottom-0 left-0 z-50'>
                                <div className="col-span-4 mb-4 h-full flex-1 justify-end px-5 md:mb-4 md:justify-end md:px-10">
                                    <OtherInfo landmark={landmark}/>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))
            )}
        </Swiper>
    );
};

export default Hero;
