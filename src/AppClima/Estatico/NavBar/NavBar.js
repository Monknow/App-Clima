import logo from "./../../../logo-app.png";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="nav-top-navbar">
            <img src={logo} className="logo-image" alt="logo-app-clima" />
            <p className="logo-texto">
                <span>App</span> 
                <span>Clima</span>
            </p>
        </nav>
    );
}

export default NavBar;
