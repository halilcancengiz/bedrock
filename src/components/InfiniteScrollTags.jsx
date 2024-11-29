import React, { useState, useEffect, useRef } from "react";

const InfiniteScrollTags = () => {
    const [tagList] = useState([
        "HR-Teams",
        "Startups",
        "Global Players",
        "Agenturen",
        "Große Unternehmen",
        "KMU",
        "Personaler",
        "Produktionsbetriebe",
        "Handwerksbetriebe",
        "Neue Unternehmen",
        "Alle",
    ]);

    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        let scrollAmount = 0;

        const scrollTags = () => {
            if (scrollContainer) {
                scrollAmount += 0.5; // Kayma hızını ayarlamak için küçük bir değer ekliyoruz
                scrollContainer.scrollLeft = scrollAmount;

                // Eğer kaydırma sonuna ulaşıldıysa başa sar
                if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                    scrollAmount = 0;
                }
            }
            requestAnimationFrame(scrollTags); // Her frame'de animasyonu çağır
        };

        requestAnimationFrame(scrollTags); // Animasyonu başlat

        return () => cancelAnimationFrame(scrollTags); // Bileşen kaldırıldığında animasyonu temizle
    }, []);

    // Tag listesini iki kez göstermek sonsuz bir döngü efekti sağlar
    const extendedTagList = [...tagList, ...tagList];

    return (
        <div ref={scrollContainerRef} className="overflow-hidden bg-secondary whitespace-nowrap relative w-full py-4">
            <div className="inline-flex bg-secondary">
                {extendedTagList.map((tag, index) => (
                    <div
                        key={index}
                        className="inline-block bg-custom-yellow font-semibold text-t-primary lg:pt-[20px] pt-[16px] lg:pb-[24px] pb-[20px] border-2 border-black px-[40px] mx-2 lg:text-[28px] md:text-[24px] text-[20px]"

                    >
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteScrollTags;
