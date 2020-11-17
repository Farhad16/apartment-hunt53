import React, { useEffect, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import House from '../House/House';
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
                        apartment.map((house, i) => <House key={i} house={house}></House>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HouseRent;