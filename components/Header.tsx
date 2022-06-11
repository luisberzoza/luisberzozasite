import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Header() {
    return (
        <header className="">
                <div className="flex items-center space-x-5 object-left md:justify-evenly">
                    <div className="hidden md:inline-flex object-left space-x-5">
                        <h3>Portfolio</h3>
                        <h3>About Me</h3>
                        <h3>Let's Talk</h3>
                    </div>

                    <div className="font-Cedarville text-2xl content-center w-44 object-contain cursor-pointer">Luis Berzoza</div>      

                    <div className="hidden md:inline-flex object-right content-end space-x-5">
                        <a href="" className="cursor-pointer"> <FacebookIcon/> </a>
                        <a href="" className="cursor-pointer"><TwitterIcon/></a>
                        <a href="" className="cursor-pointer"> <LinkedInIcon/></a>
                    </div>
                </div>
        </header>
    )
}

export
 default Header
