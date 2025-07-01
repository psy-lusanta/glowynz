import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../css/Navbar.css";
import Logo from "../images/Glowynz-Logo.png";
import { Button } from "bootstrap";

function Navbar() {
    return (
        <nav className="navbar custom-navbar navbar-expand-lg bg-body-tertiary fixed-top shadow">
            <div className="container">
                {/*------LOGO----- */}
                <Link to="/"><img src={Logo} alt="Glowynz Logo" className="logo" /> </Link>
                {/*------BUTTON----- */}
                <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/*------SIDERBAR----- */}
                <div className="sidebar offcanvas offcanvas-top" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    {/*------SIDERBAR HEADER----- */}
                    <div className="offcanvas-header text-white border-bottom">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Glowynz</h5>
                        <button type="button" className="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    {/*------SIDERBAR BODY----- */}
                    <div className="offcanvas-body">
                        <ul className="navbar-nav custom-navbar d-flex flex-column flex-lg-row 
                                        align-items-center align-items-lg-end 
                                        justify-content-center justify-content-lg-end 
                                        w-100 gap-lg-3 ">

                            <li className="nav-item">
                                <Link to="/" className="nav-link navs">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a href="#services" className="nav-link navs">Services</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link navs">About Us</a>
                            </li>
                            <li className="nav-item login">
                                <Link to="/login" className="nav-link navs">Log In</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;