import '../../Navbar.css';
function Navbar() {
    return (
        <div className="navbar">
            <nav className="nav">
                <h2>Zephyr Solutions</h2>

                <ul>
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">Members</a></li>
                    <li><a href="#">Write</a></li>
                    <li><a href="#">Sign in</a></li>
                </ul>
            </nav>
        </div>        
    );
}

export default Navbar;