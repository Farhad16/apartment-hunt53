import React from 'react';
import place from '../../../images/location.png';
import bath from '../../../images/bath.png';
import bed from '../../../images/bed.png';
import { Link } from 'react-router-dom';

const House = ({ house }) => {
    const { img, title, location, bedRoom, bathRoom, _id } = house;
    return (
        <div className="col-md-4 rooms">
            <div className="card card_shadow" style={{ marginBottom: "29px", border: "none" }}>
                <img src={img} className="card-img-top rentimg" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{ color: '#16322E', fontSize: '24px', fontWeight: 'bold' }}>{title}</h5>
                    <div className="card-text">
                        <img src={place} alt="" height="20" width="15" />
                        <span style={{ color: '#747474', marginBottom: '8px' }}> {location}</span>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '42px' }}>
                        <div>
                            <img src={bed} alt="" height="20" width="15" />
                            <span style={{ color: '#747474' }}> {bedRoom} </span>
                        </div>
                        <div style={{ marginLeft: '60px' }}>
                            <img src={bath} alt="" height="20" width="15" />
                            <span style={{ color: '#747474' }}> {bathRoom} </span>
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <h2 style={{ marginRight: '60px', color: '#275A53', fontSize: '36px', fontWeight: 'bold' }}>${house.price}</h2>
                        <Link to={"/houserentdetails/" + _id}>
                            <button className="btn-brand" style={{ padding: "13px 20px" }}>View Details</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default House;