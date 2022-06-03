
function Header() {
    return (
        <header className="">
            <div className="flex">
                <div className="flex items-center space-x-5">
                    <div className="hidden md:inline-flex object-left">
                        <h3>Portfolio</h3>
                        <h3>About Me</h3>
                        <h3>Let's Talk</h3>
                    </div>

                    <div className="font-Cedarville w-44 object-contain cursor-pointer md:object-top md:text-center">Luis Berzoza</div>      

                    <div className="hidden md:inline-flex object-right">
                        <h3>Facebook</h3>
                        <h3>Twitter</h3>
                        <h3>Linkedin</h3>
                    </div>
                </div>    
            </div>         
            <div>
            </div>
        </header>
    )
}

export
 default Header
