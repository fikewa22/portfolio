import React from 'react';
import services from '../../dist/services'

const Services = () => {
    return (
        <div>
            <h1 className='text-primary font-semibold text-3xl mt-14'>The Tools I work with</h1>
            <div className='grid md:grid-cols-6 gap-5 my-8 mx-16'>
                {
                    services.map(service=> <div key={service.id} className='service-card flex flex-col justify-center items-center p-6 text-center text-black bg-tertiary'>
                        <img src={service.image} alt="" className='mb-3'/>
                        <h6 className='text-sm mb-4'>{service.name}</h6>
                        {/* <p className='text-base'>{service.description}</p> */}
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;