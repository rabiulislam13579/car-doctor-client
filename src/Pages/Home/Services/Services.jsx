import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const[services,setServices]=useState([]);
    useEffect(()=>{
        fetch('https://car-doctor-server-sooty-five.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='mt-5'>
            <div className='text-center space-y-3'>
                <h3 className='text-xl font-semibold text-[#FF3811]'>Service</h3>
                <h1 className='text-3xl bold'>Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised
                    <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {services.map(service=><ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)}

            </div>
            
        </div>
    );
};

export default Services;