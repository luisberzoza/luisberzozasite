import React, { useState } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    return (
        <header className="flex justify-between mx-auto p-8 max-w-7xl ease-in">
                <div className="hidden md:inline-flex space-x-2 items-center ">
                    <h3>Portfolio</h3>
                    <h3>About Me</h3>
                    <h3>Contact</h3>
                </div>

                <a href="/" className="font-Cedarville text-3xl object-left md:place-content-center cursor-pointer">Luis Berzoza</a>      

                <div className="hidden md:inline-flex space-x-5 items-center ">
                    <a href="" className="cursor-pointer"> <FacebookIcon /> </a>
                    <a href="" className="cursor-pointer"><TwitterIcon /></a>
                    <a href="" className="cursor-pointer"> <LinkedInIcon /></a>
                </div>
                <div className="ml-5 flex items-center lg:hidden md:hidden cursor-pointer">
                    <MenuIcon />
                </div>
        </header>
    )
}

export
 default Header
