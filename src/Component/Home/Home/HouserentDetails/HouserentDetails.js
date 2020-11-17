import React from 'react';
import "./HouserentDetails.css";
import img1 from '../../../../images/rent/house2.png';
import img2 from '../../../../images/rent/house3.png';
import img3 from '../../../../images/rent/house4.png';
import img4 from '../../../../images/rent/house5.png';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';


const HouserentDetails = () => { 

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="apartment-banner">
                <h2 className="text-center text-white banner-text">
                    Apartment
                </h2>
            </div>
            <div className="container">
                <div className="row" style={{marginTop:"48px"}}>
                    <div className="col-md-9 house-detail">
                       
                        <div style={{marginTop:"24px",marginBottom:'48px'}}>
                            <img src={img1} alt="" height="300" width="100%" style={{marginRight:'30px'}}/>
                        </div>                        
                        <div className="banner-thumb" style={{marginTop:"24px",marginBottom:'48px'}}>
                            <img src={img1} alt=""/>
                            <img src={img2} alt=""/>
                            <img src={img3} alt=""/>
                            <img src={img4} alt=""/>
                        </div>
                        
                        <p style={{color:'#747474', fontSize:'24px'}}>
                        3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.
                        </p>
                        <p style={{color:'#16322E', fontSize:'28px', fontWeight:'bold'}}>
                        Price Details-
                        </p>
                        <p style={{color:'#747474', fontSize:'24px'}}>
                            Rent/Month: $550 (negotiable) <br/>
                            Service Charge : 8,000/= Tk per month, subject to change <br/>
                            Security Deposit : 3 month’s rent <br/>
                            Flat Release Policy : 3 months earlier notice required 
                        </p>
                        <p style={{color:'#16322E', fontSize:'28px', fontWeight:'bold'}}>
                            Property Details-
                        </p>
                        <p style={{color:'#747474', fontSize:'24px'}}>
                            Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
                            Flat Size : 3000 Sq Feet.
                            Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
                            Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
                            Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
                            Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
                        </p>

                    </div>
                    <div className="col-md-3" style={{backgroundColor: '#F4F4F4', minHeight:"505px"}}>
                        <input className="form-control" type="text" placeholder="Full Name" style={{marginTop:'49px'}}/>
                        <input className="form-control" type="number" placeholder="Phone No." style={{marginTop:'16px'}}/>
                        <input className="form-control" type="email" placeholder="Email Address" style={{marginTop:'16px'}}/>
                        <textarea className="form-control" name="" id="" cols="30" rows="5" placeholder="Message" style={{marginTop:'16px'}}></textarea>
                        <input className="btn-brand" type="submit" value="Request Booking" style={{marginTop:'24px',width: '100%'}}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HouserentDetails;