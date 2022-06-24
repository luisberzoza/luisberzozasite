import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const MenuLinks = () => {
    return (
        <ul className="flex-column">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/#portfolio">Portfolio</a>
            </li>
            <li>
                <a href="/#contact">Get in touch</a>
            </li>
        </ul>
        <ul className="flex position-absolute:center">
            <li>
                <a href="https://www.facebook.com/luisberzoza" className="cursor-pointer"> <FacebookIcon /></a>
            </li>
            <li>
                <a href="https://twitter.com/berzoza_luis" className="cursor-pointer"><TwitterIcon /></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/luis-berzoza-ab285558" className="cursor-pointer"> <LinkedInIcon /></a>
            </li>
            <li>
                <a href="https://www.instagram.com/luisberzoza/" className="cursor-pointer"> <InstagramIcon /></a>
            </li>
        </ul>
    );
}

export default MenuLinks;
