import FacebookIcon from '@mui/icons-material/Facebook';

function Header() {
    return (
        <header className="">
                <div className="flex items-center space-x-5 md:justify-evenly">
                    <div className="hidden md:inline-flex object-left space-x-5">
                        <h3>Portfolio</h3>
                        <h3>About Me</h3>
                        <h3>Let's Talk</h3>
                    </div>

                    <div className="font-Cedarville text-2xl w-44 object-contain cursor-pointer">Luis Berzoza</div>      

                    <div className="hidden md:inline-flex object-right content-end space-x-5">
                        <a> <Facebook /> </a>
                        <h3>Twitter</h3>
                        <h3>Linkedin</h3>
                    </div>
                </div>
        </header>
    )
}

export
 default Header
