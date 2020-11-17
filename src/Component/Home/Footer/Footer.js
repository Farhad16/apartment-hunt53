import React from 'react';
import './Footer.css';
import facebook from '../../../images/facebook.png';
import instagram from '../../../images/instagram.png';
import linkedIn from '../../../images/linkedIn.png';
import utube from '../../../images/utube.png';
import mapmarker from '../../../images/mapmarker.png';
import { Link } from 'react-router-dom';


const Footer = () => {

    return (
        <footer className="footer-area" style={{ color: 'white' }}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4" style={{ display: 'flex' }}>
                        <img src={mapmarker} alt="" height="24" width="24" style={{ color: 'white' }} />
                        <p style={{ marginLeft: "14px" }}>H#340 (4th Floor), Road #24, <br />
                            New DOHS, Mohakhali, Dhaka, Bangladesh <br />
                            Phone: 018XXXXXXXX <br />
                            E-mail: info@company.com</p>
                    </div>
                    <div className="col-sm-6 col-md-2">

                        <ul>
                        <h6 className="footer-title">Company</h6>
                            <li className="company-info"><Link to="">About</Link></li>
                            <li className="company-info"><Link to="">Site Map</Link></li>
                            <li className="company-info"><Link to="">Support Center</Link></li>
                            <li className="company-info"><Link to="">Terms Conditions</Link></li>
                            <li className="company-info"><Link to="">Submit Listing</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-2">

                        <ul>
                            <h6 className="footer-title">Quick Links</h6>
                            <li className="company-info"><Link to="">Quick Links</Link></li>
                            <li className="company-info"><Link to="">Rentals</Link></li>
                            <li className="company-info"><Link to="">Sales</Link></li>
                            <li className="company-info"><Link to="">contact</Link></li>
                            <li className="company-info"><Link to="">Terms Conditions</Link></li>
                            <li className="company-info"><Link to="">Our blog</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3" style={{ marginLeft: '57px' }}>
                    <h6 className="footer-title">About Us</h6>
                        <p >We are the top real estate agency in Sydney, with agents available to answer any question 24/7.</p>
                        <div style={{ marginTop: "36px" }} className="social-icon">
                            <Link to="#"><img src={facebook} alt="" height="23" width="23" style={{ marginRight: '30px' }} /></Link>
                            <Link to="#"><img src={instagram} alt="" height="23" width="23" style={{ marginRight: '30px' }} /></Link>
                            <Link to="#"><img src={linkedIn} alt="" height="23" width="23" style={{ marginRight: '30px' }} /></Link>
                            <Link to="#"><img src={utube} alt="" height="23" width="23" /></Link>
                        </div>
                    </div>
                </div>
                <div className="text-center copyright">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved by: Team-53</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;