import React, { useEffect, useState } from "react";

import Nav from "./Nav";
import Program from "./Program";
import NavMobile from "./NavMobile";

import logo from "../assets/img/logo.svg";

import { CgMenuRight } from "react-icons/cg";

const Header = () => {
    const [bg, setBg] = useState(false);

    // * nav Mobile state
    const [navMobile, setNavMobile] = useState(false);

    // * scroll
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setBg(true) : setBg(false);
        });
    });

    return (
        <header
            className={`${
                bg ? "bg-white shadow-md py-3" : "bg-none py-5"
            } fixed w-full right-0 left-0 z-10 transition-all duration-300`}
        >
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <a href="#">
                    <img src={logo} alt="" />
                </a>
                {/* nav */}
                <div className="hidden lg:flex">
                    <Nav />
                </div>
                {/* program */}
                <Program />
                {/* nav mobile button */}
                <div
                    onClick={() => setNavMobile(!navMobile)}
                    className="lg:hidden cursor-pointer"
                >
                    <CgMenuRight className="text-blue text-3xl" />
                </div>
                {/* nav mobile */}
                <div
                    className={`${
                        navMobile ? "max-h-[260px]" : "max-h-0"
                    } fixed w-full bg-yellow shadow-lg top-[78px] left-0 h-full overflow-hidden transition-all`}
                >
                    <NavMobile />
                </div>
            </div>
        </header>
    );
};

export default Header;
