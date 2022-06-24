import React from 'react';
import { slide as Menu } from 'react-burger-menu';

function MobileMenu() {
    return (
        <div className="hidden md:inline-flex space-x-5 items-center ">
            <a href="" className="cursor-pointer"> <FacebookIcon /> </a>
            <a href="" className="cursor-pointer"><TwitterIcon /></a>
            <a href="" className="cursor-pointer"> <LinkedInIcon /></a>
        </div>
        <div className="ml-5 flex items-center lg:hidden md:hidden cursor-pointer">
            {/* <MenuIcon /> */}
            <Menu />
        </div>
    )
};
import { slide as Menu } from 'react-burger-menu';

export default MobileMenu
