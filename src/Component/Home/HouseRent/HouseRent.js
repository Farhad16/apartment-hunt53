import React, { useEffect, useState } from 'react';
import place from '../../../images/location.png';
import bath from '../../../images/bath.png';
import bed from '../../../images/bed.png';

import { Link, useHistory } from 'react-router-dom';
import "./HouseRent.css"

const HouseRent = () => {

    const history = useHistory();
    const [apartment, setApartment] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allApartment')
            .then(res => res.json())
            .then(data =>
                setApartment(data)
            )
    }, [])

    console.log(apartment);
    return (
        <div style={{ backgroundColor: "#F1F6F4" }}>
            <div>
                <p className="text-center " style={{ paddingTop: "28px", marginBottom: "55px" }}>
                    <small className="color-brand" style={{ fontSize: "16px", height: "24px" }}>House Rent <br /> </small>
                    <span style={{ color: "#16322E", fontWeight: "bold", fontFamily: "poppins", fontSize: "34px" }}>Discover the latest Rent <br /> available today</span>
                </p>
            </div>

            <div className="container">
                <div className="row">
                    {
                        apartment.map(house =>
                            <div className="col-md-4 rooms" key={house._id}>
                                <div className="card card_shadow" style={{ marginBottom: "29px", border: "none" }}>
                                    <img src={house.img} className="card-img-top rentimg" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: '#16322E', fontSize: '24px', fontWeight: 'bold' }}>{house.title}</h5>
                                        <div className="card-text">
                                            <img src={place} alt="" height="20" width="15" />
                                            <span style={{ color: '#747474', marginBottom: '8px' }}> {house.location}</span>
                                        </div>
                                        <div style={{ display: 'flex', marginBottom: '42px' }}>
                                            <div>
                                                <img src={bed} alt="" height="20" width="15" />
                                                <span style={{ color: '#747474' }}> {house.bedRoom} </span>
                                            </div>
                                            <div style={{ marginLeft: '60px' }}>
                                                <img src={bath} alt="" height="20" width="15" />
                                                <span style={{ color: '#747474' }}> {house.bathRoom} </span>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <h2 style={{ marginRight: '60px', color: '#275A53', fontSize: '36px', fontWeight: 'bold' }}>${house.price}</h2>
                                            <Link to={"/houserentdetails/" + house._id}>
                                                <button className="btn-brand" style={{ padding: "13px 20px" }}>View Details</button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default HouseRent;