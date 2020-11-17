import React, { useContext, useEffect, useState } from 'react';
import "./HouserentDetails.css";

import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../../App';


const HouserentDetails = () => { 
    const {id}= useParams();
    const [apartment , setApartment] = useState([]);
        
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);

    useEffect(()=>{
        fetch(`http://localhost:5000/findApartment/${id}`)
        .then(res=> res.json())
        .then(data=>setApartment(data))
    }, [])
   console.log(apartment);
   const { register, handleSubmit, errors, control } = useForm();
   const onSubmit = data => {
       const rentDetails= {...data, ...apartment, status: 'pending', color: 'red' }

       console.log(rentDetails)
       fetch('http://localhost:5000/addRentDetails',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'Accept': 'application/json' },
        body: JSON.stringify(rentDetails)
        })
        .then(res=>res.json())
        .then(data=>{
            
            data? alert("order success full"): console.log(data)
        
            
        })
   }
    
    
    

    return (
        <div>
            <div className="apartment-banner">
                <h2 className="text-center text-white banner-text">
                    Apartment
                </h2>
            </div>
            <div className="container">
                <div className="row" style={{marginTop:"48px"}}>
                    
                            <div className="col-md-9 house-detail">
                       
                        <div style={{marginTop:"24px",marginBottom:'48px'}}>
                            <img src={apartment.img} alt="" height="300" width="100%" style={{marginRight:'30px'}}/>
                        </div>                        
                        <div className="banner-thumb" style={{marginTop:"24px",marginBottom:'48px'}}>
                            <img src={apartment.img1} alt=""/>
                            <img src={apartment.img2} alt=""/>
                            <img src={apartment.img3} alt=""/>
                            <img src={apartment.img4} alt=""/>
                        </div>
                        
                        <p style={{color:'#16322E', fontSize:'28px', fontWeight:'bold'}}>
                        {apartment.title}
                        </p>
                        <p style={{color:'#747474', fontSize:'24px'}}>
                        {apartment.titleDetails}
                        </p>
                        <p style={{color:'#16322E', fontSize:'28px', fontWeight:'bold'}}>
                        Price Details-
                       
                      
                        </p>
                        <p style={{color:'#16322E', fontSize:'20px'}}>  {apartment.priceDetails}</p>

                       
                        <p style={{color:'#16322E', fontSize:'28px', fontWeight:'bold'}}>
                            Property Details-
                        </p>
                        <p style={{color:'#747474', fontSize:'24px'}}>
                            {apartment.propertyDetails}
                        </p>

                    </div>
                            
                     
                    <div className="col-md-3" style={{backgroundColor: '#F4F4F4', minHeight:"505px"}}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input className="form-control"name="name" type="text" defaultValue={loggedInUser.name} placeholder="Full Name" style={{marginTop:'49px'}} ref={register({ required: true })}/>

                        <input className="form-control" type="number" name="phoneNumber" placeholder="Phone No." style={{marginTop:'16px'}} ref={register({ required: true })}/>

                        <input className="form-control" type="email" name="email" defaultValue={loggedInUser.email} placeholder="Email Address" style={{marginTop:'16px'}} ref={register({ required: true })}/>
                        
                        <textarea className="form-control" name="message" id="" cols="30" rows="5" placeholder="Message" style={{marginTop:'16px'}} ref={register({ required: true })}></textarea>

                        <input className="btn-brand" type="submit"  style={{marginTop:'24px',width: '100%'}}/>
    
  
                    </form>
                       
                        
                        
                       
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HouserentDetails;