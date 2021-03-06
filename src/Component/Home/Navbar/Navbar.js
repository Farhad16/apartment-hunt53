import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from "../../../images/Logo.png"
import "./Navbar.css"


const Navbar = () => {
    const [signInUser, setSignInUser] = useContext(UserContext);


    return (
        <div className="sticky-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} height="55" alt="" loading="lazy" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/concerns">Concerns</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#event">Event</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                            {
                                signInUser.email ? <li className="nav-item">
                                    <Link className="nav-link active" onClick={() => { setSignInUser({}); sessionStorage.clear() }} to="/">Logout</Link>
                                </li>

                                    : <li className="nav-item">
                                        <Link className="nav-link active" to="/login">Login</Link>
                                    </li>
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;