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
    { name: "Indeed", logo: indeedGrayLogo },
    { name: "JobScout", logo: jobScoutLogo },
    { name: "Jobware", logo: jobwareLogo },
    { name: "Kalaydo", logo: kalaydoLogo },
    { name: "LinkedIn", logo: linkedinLogo },
    { name: "meinestadt", logo: meineStadtLogo },
    { name: "Monster", logo: monsterLogo },
    { name: "Stellenanzeigen", logo: stellenanzeigenLogo },
    { name: "Stepstone", logo: stepstoneGrayLogo },
    { name: "Xing", logo: xingLogo },
    { name: "yourfirm", logo: yourFirmLogo },
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
                <SwiperSlide className="flex items-center justify-center" key={index}>
                    <div className={`flex flex-col items-center justify-center`}>
                        <img
                            src={company.logo}
                            alt={`${company.name} logo`}
                            className={`h-9 ${company.name.toLocaleLowerCase() == "indeed" || company.name.toLocaleLowerCase() == "xing" || company.name.toLocaleLowerCase() == "linkedin" || company.name.toLocaleLowerCase() == "jobware" || company.name.toLocaleLowerCase() == "yourfirm" ? "py-1" : ""} ${company.name.toLocaleLowerCase() == "facebook" || company.name.toLocaleLowerCase() == "monster" || company.name.toLocaleLowerCase() == "stepstone" ? "py-2" : ""} w-auto object-contain mx-auto`}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default InfinitySlider;
