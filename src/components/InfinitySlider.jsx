import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Şirket logoları ve isimleri
import facebookLogo from "../assets/images/facebook.png";
import indeedGrayLogo from "../assets/images/indeed-gray.png";
import jobScoutLogo from "../assets/images/jobsscout-gray.png";
import jobwareLogo from "../assets/images/jobware.png";
import kalaydoLogo from "../assets/images/kalaydo.png";
import linkedinLogo from "../assets/images/linkedin.png";
import meineStadtLogo from "../assets/images/meinestadt.png";
import monsterLogo from "../assets/images/monster.png";
import stellenanzeigenLogo from "../assets/images/stellenanzeigen.png";
import stepstoneGrayLogo from "../assets/images/stepstone-gray.png";
import xingLogo from "../assets/images/xing.png";
import yourFirmLogo from "../assets/images/yourfirm.png";

const companies = [
    { name: "Facebook", logo: facebookLogo },
    { name: "Indeed Gray", logo: indeedGrayLogo },
    { name: "JobScout", logo: jobScoutLogo },
    { name: "Jobware", logo: jobwareLogo },
    { name: "Kalaydo", logo: kalaydoLogo },
    { name: "LinkedIn", logo: linkedinLogo },
    { name: "Meine Stadt", logo: meineStadtLogo },
    { name: "Monster", logo: monsterLogo },
    { name: "Stellenanzeigen", logo: stellenanzeigenLogo },
    { name: "Stepstone Gray", logo: stepstoneGrayLogo },
    { name: "Xing", logo: xingLogo },
    { name: "Your Firm", logo: yourFirmLogo },
];

const InfinitySlider = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]} // Autoplay eklendi
            className="mySwiper"
            breakpoints={{
                460: {
                    slidesPerView: 2,
                },
                500: {
                    slidesPerView: 3,
                },
                614: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 5,
                },
                922: {
                    slidesPerView: 6,
                },
                1280: {
                    slidesPerView: 7,
                },
            }}
        >
            {companies.map((company, index) => (
                <SwiperSlide key={index}>
                    <div className="flex flex-col items-center">
                        <img
                            src={company.logo}
                            alt={`${company.name} logo`}
                            className="w-28 h-32 object-contain"
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default InfinitySlider;
