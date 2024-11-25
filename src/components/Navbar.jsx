import { NavLink } from "react-router-dom";
import { IoIosArrowDown, TbPointFilled } from "../assets/icons/icons";
import Button from "./Button";
import { Squash as Hamburger } from "hamburger-react";
import { useRef, useState, useEffect } from "react";
import { Logo } from "./Logo";

const Navbar = () => {
    const mobileNavbarRef = useRef(null);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);

    const toggleMobileNav = () => {
        setIsMobileNavOpen((prevState) => !prevState);
    };

    useEffect(() => {
        const handleResize = () => {
            const isLg = window.innerWidth >= 1024;
            setIsLgScreen(isLg);
            if (isLg) {
                setIsMobileNavOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isLgScreen]);

    return (
        <header className="flex items-center bg-white gap-5 h-[70px] text-neutral-600 py-6 border-b-[1px] border-neutral-300 relative px-6">
            <div className="mx-auto max-w-[1296px] w-full flex items-center text-[18px] leading-[20px] justify-between">
                <div className="flex items-center gap-x-8 invisible">
                    <nav className="lg:flex hidden items-center gap-x-8">
                        <NavLink className="flex items-center gap-1 text-primary transition-all duration-300 so-medium text-sm" to="/" >
                            Start
                        </NavLink>
                    </nav>

                    <div className="flex items-center gap-x-8">
                        <NavLink className="md:flex hidden" to="/contact">
                            <Button>
                                Kontakt
                            </Button>
                        </NavLink>
                        <div className={`${isMobileNavOpen ? "bg-secondary3" : "bg-primary"} rounded-[10px] hover:bg-secondary3 transition-all duration-300 lg:hidden ml-3`}>
                            <Hamburger
                                aria-label="Toggle mobile navbar"
                                toggled={isMobileNavOpen}
                                toggle={toggleMobileNav}
                                size={20}
                                color="white"
                                duration={0.8}
                            />
                        </div>
                    </div>
                </div>

                <Logo />

                <div className="flex items-center gap-6">
                    <div className="lg:flex hidden items-center gap-x-8">
                        <NavLink className="flex items-center gap-1 text-primary transition-all duration-300 so-semibold text-sm" to="/" >
                            Start
                        </NavLink>
                        {/* <NavLink className="hover:text-primary transition-all duration-300 tb-medium" to="/services" >
                            Dienstleistungen
                        </NavLink> */}

                        {/* <div className="lg:flex hidden items-center gap-1 group hover:text-primary transition-colors duration-300 relative">
                            <div className="tb-medium">Preise</div>
                            <IoIosArrowDown className="group-hover:transform group-hover:-rotate-180 transition-transform duration-300" size={16} />
                            <div className="absolute invisible opacity-0 translate-y-[10px] z-[11] pt-[13px] group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out -left-1/2 top-full  text-neutral-600">
                                <div className="flex flex-col gap-8 rounded-3xl px-[66px] py-[64px] border-[1px] border-net bg-neutral-100 mt-2">
                                    <NavLink className="hover:text-primary transition-all duration-300 flex items-center gap-1 tb-medium" to="/ads-plan" >
                                        <TbPointFilled /> Google Ads
                                    </NavLink>
                                    <NavLink className="hover:text-primary transition-all duration-300 flex items-center gap-1 tb-medium" to="/seo-plan" >
                                        <TbPointFilled /> SEO
                                    </NavLink>
                                    <NavLink className="hover:text-primary transition-all duration-300 flex items-center gap-1 tb-medium" to="/company-listing-plan">
                                        <TbPointFilled /> Unternehmenslistung
                                    </NavLink>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div className="flex items-center gap-x-8">
                        <NavLink className="md:flex hidden" to="/contact">
                            <Button>
                                Kontakt
                            </Button>
                        </NavLink>
                        <div className={`bg-white rounded-[10px] hover:bg-secondary3 transition-all duration-300 lg:hidden ml-3`}>
                            <Hamburger
                                aria-label="Toggle mobile navbar"
                                toggled={isMobileNavOpen}
                                toggle={toggleMobileNav}
                                size={30}
                                color="#262626"
                                duration={0.8}
                            />
                        </div>
                    </div>
                </div>

            </div>
            {/* mobile navbar */}
            <nav ref={mobileNavbarRef} className={`mobile-navbar-shadow z-10 lg:hidden absolute left-0 top-full w-full bg-neutral-100 transition-[max-height] duration-300 ease-in-out overflow-hidden border-b-[1px] border-neutral-300 ${isMobileNavOpen ? "max-h-[600px]" : "max-h-0"}`}>
                <div className="w-full h-full flex flex-col p-6 text-[20px] tb-medium">

                    <NavLink className="flex items-center gap-1 hover:text-primary transition-all duration-300 py-[15px]" to="/" >
                        Start
                    </NavLink>
                    <NavLink className="hover:text-primary transition-all duration-300 py-[15px]" to="/services" >
                        Dienstleistungen
                    </NavLink>

                    <div className="flex flex-col items-start gap-1 group transition-colors duration-300 py-[15px]" >
                        <div className="flex items-center gap-1 group-hover:text-primary">
                            Preise <IoIosArrowDown className="group-hover:transform group-hover:-rotate-180 transition-transform duration-300" size={16} />
                        </div>
                        <div className="hidden opacity-0 group-hover:flex group-hover:opacity-100 flex-col transition-opacity duration-300">
                            <NavLink className="hover:text-primary transition-colors duration-300 flex items-center py-[15px] gap-1 tb-medium" to="/ads-plan" >
                                <TbPointFilled /> Google Ads
                            </NavLink>
                            <NavLink className="hover:text-primary transition-colors duration-300 flex items-center py-[15px] gap-1 tb-medium" to="/seo-plan" >
                                <TbPointFilled /> SEO
                            </NavLink>
                            <NavLink className="hover:text-primary transition-colors duration-300 flex items-center py-[15px] gap-1 tb-medium" to="/company-listing-plan">
                                <TbPointFilled /> Unternehmenslistung
                            </NavLink>
                        </div>
                    </div>


                    <div className="py-[15px] mt-[60px]">
                        <NavLink to="/contact">
                            <Button className="w-full h-16 text-base tb-bold" variant="primary" size="default">
                                Kontakt
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;