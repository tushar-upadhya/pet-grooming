import React from "react";

import PhoneIcon from "../assets/img/phone.svg";

const Program = () => {
    return (
        <div>
            <div className="flex lg:gap-x-10 items-baseline justify-end">
                <img
                    className="w-[28px] h-[28px] lg:w-[34px] lg:h-[34px] "
                    src={PhoneIcon}
                    alt="PhoneIcon"
                />
                <div className="lg:text-[23px] text-blue font-extrabold">
                    +91 99999999
                </div>
            </div>

            {/* open hours */}
            <div className="text-sm">
                {/* desktop */}
                <div className="hidden lg:flex ">
                    Opening Hours: MON - SUN: 10am TO 5pm
                </div>
                {/* mobile */}
                <div className="lg:hidden text-right ">
                    Opening Hours: MON - SUN: 10am TO 5pm
                </div>
            </div>
        </div>
    );
};

export default Program;
