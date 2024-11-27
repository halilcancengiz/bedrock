import { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({
    title = "title",
    content = "content",
    type,
    listHeaders = [],
    listContent = [],
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            style={{ boxShadow: "0px 4px 22px 0px rgba(8, 15, 52, 0.03)" }}
            onClick={toggleAccordion}
            className="cursor-pointer bg-white md:pt-[42px] xs:pt-[35px] pt-[30px] md:pb-[45px] xs:pb-[38px] pb-[32px] xs:px-[34px] px-[25px] border border-neutral-300 rounded-md"
        >
            <div className="flex items-center justify-between">
                <h3 className="md:text-[22px] xs:text-[20px] text-[18px] md:leading-[28.006px] xs:leading-[25.46px] leading-[22.914px] mr-[10px] so-bold text-t-primary">
                    {title}
                </h3>
                <div
                    className={`min-w-[34px] min-h-[34px] flex transition-all duration-300 items-center justify-center rounded-[8px] ${
                        isOpen ? "bg-primary rotate-90" : "bg-secondary rotate-0"
                    } `}
                >
                    <IoIosArrowDown
                        size="24"
                        className={`transform transition-all -rotate-90 duration-300 ${
                            isOpen ? "text-white" : "text-primary"
                        } `}
                    />
                </div>
            </div>
            <div
                id="contentContainer"
                ref={contentRef}
                className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[1000px]" : "max-h-0"
                }`}
                style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight : 0 }}
            >
                <div
                    className={`pt-5 text-[18px] text-t-primary so-regular transition-all duration-300 ${
                        isOpen ? "opacity-1 scale-100" : "opacity-0 scale-95"
                    }`}
                >
                    {type === "list" && listHeaders.length === listContent.length ? (
                        <ul className="list-none pl-0">
                            {listHeaders.map((header, index) => (
                                <li key={index} className="mb-4">
                                    <p className="font-bold mb-1">{header}</p>
                                    <p className="text-neutral-700 pl-5">{listContent[index]}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
