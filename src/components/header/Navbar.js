import '../../Navbar.css';
function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="title">
                    Zephyr Solutions
                </div>                

                <ul className="nav-list" id="navlistId">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Career</a>
                        <ul className="dropdown">
                            <li><a href="#">Sub-1</a></li>
                            <li><a href="#">Sub-2</a></li>
                            <li><a href="#">Sub-3</a></li>
                        </ul>
                    </li>                    
                    <li><a href="#">Contact</a></li>
                </ul>

                <div className="menu" id="toggleMenu">
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                    <div className="menu-line"></div>
                </div>
                
            </nav>
        </div>        
    );
}

export default Navbar;