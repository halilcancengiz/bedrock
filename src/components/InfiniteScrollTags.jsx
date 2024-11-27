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
        <div
            ref={scrollContainerRef}
            className="overflow-hidden bg-secondary whitespace-nowrap relative w-full py-4"
        >
            <div className="inline-flex bg-secondary">
                {extendedTagList.map((tag, index) => (
                    <div
                        key={index}
                        className="inline-block bg-custom-yellow text-t-primary pt-[20px] pb-[24px] border-2 border-black px-[40px] mx-2 text-[28px] so-bold rounded-md"
                        style={{
                            boxShadow: "4px 4px 0px 0px #000000", // Siyah gölge (shadow)
                        }}
                    >
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteScrollTags;
