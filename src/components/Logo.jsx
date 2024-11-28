import { NavLink } from "react-router-dom"
import logo from "../assets/images/newlogo.png"

export const Logo = () => {
    return (
        <NavLink className="flex items-center gap-2.5 whitespace-nowrap max-w-[295px] w-full" aria-label="Open home page" to="/">
            <img className="min-w-[40px] min-h-[40px] size-[40px]" src={logo} alt="" />
            <div className=" xs:text-[30px] text-[24px] text-t-primary font-semibold">Jobspakete</div>
        </NavLink>

    )
}
