import { NavLink } from "react-router-dom";
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
        <header className="flex items-center bg-white gap-5 h-[70px] text-t-primary py-6 border-b-[1px] border-neutral-300 relative px-6">
            <div className="mx-auto max-w-[1296px] w-full flex items-center text-[18px] leading-[20px] justify-between">
                <div className="lg:flex hidden items-center gap-x-8 invisible">
                    <nav className="lg:flex hidden items-center gap-x-8">
                        <NavLink className="flex items-center gap-1 text-t-primary transition-all duration-300  text-sm font-medium" to="/" >
                            Start
                        </NavLink>
                    </nav>

                    <div className="flex items-center gap-x-8">
                        <NavLink className="md:flex hidden" to="/contact">
                            <Button>
                                Kontakt
                            </Button>
                        </NavLink>
                        <div className={`${isMobileNavOpen ? "bg-secondary3" : "bg-primary"} hover:bg-secondary3 transition-all duration-300 lg:hidden ml-3`}>
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
                        <NavLink className="flex items-center gap-1 text-t-primary font-medium transition-all duration-300  text-sm" to="/" >
                            Start
                        </NavLink>
                    </div>

                    <div className="flex items-center gap-x-8">
                        <NavLink className="md:flex hidden" to="/contact">
                            <Button>
                                Kontakt
                            </Button>
                        </NavLink>
                        <div className={`bg-white hover:bg-secondary3 transition-all duration-300 lg:hidden ml-3`}>
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
                <div className="w-full h-full flex flex-col p-6 text-[20px] ">

                    <NavLink className="flex items-center gap-1 text-t-primary font-medium transition-all duration-300 py-[15px]" to="/" >
                        Start
                    </NavLink>

                    <div className="py-[15px]">
                        <NavLink to="/contact">
                            <Button className="w-full h-16 text-base " variant="primary" size="default">
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