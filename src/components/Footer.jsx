import React from "react";

import logo from "../assets/img/logo-white.svg";

import { social } from "../data";
const Footer = () => {
    return (
        <footer className="bg-orange py-8 lg:py-4">
            <div className="container mx-auto">
                <div className="flex text-white flex-col gap-y-6 lg:flex-row items-center justify-between">
                    <a href="#">
                        <img src={logo} alt="logo" />
                    </a>

                    {/* copyright */}
                    <div className="text-[15px]">
                        &copy;{new Date().getFullYear()} All Rights Reserved ||
                        Designed and Coded by{" "}
                        <a
                            className="hover:text-yellow transition"
                            href="https://tusharupadhyay.vercel.app/"
                        >
                            Tushar Upadhyay
                        </a>{" "}
                    </div>

                    {/* socials */}
                    <div className="flex gap-x-2">
                        {social.map((item, index) => {
                            return (
                                <a href={item.href} target="_blank" key={index}>
                                    <div className="bg-[#fe8d71a9] hover:bg-[#fe8d71] w-10 h-10 rounded-full flex justify-center items-center transition text-2xl ">
                                        {item.icon}
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
