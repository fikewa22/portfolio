import React from 'react';
import tools from '../../dist/tools'

const Tools = () => {
    return (
        <div>
            <h1 className='text-primary font-semibold text-3xl mt-14'>The Tools I work with</h1>
            <div className='grid grid-cols-3 gap-5 sm:grid-cols-3 md:grid-cols-6 my-8 md:mx-16'>
                {
                    tools.map(tool=> <div key={tool.id} className='tool-card flex flex-col w-24 h-28 justify-center items-center p-6 text-center text-black bg-tertiary'>
                        <img src={tool.image} alt="" className='mb-3'/>
                        <h6 className='text-white text-sm mb-2'>{tool.name}</h6>
                        {/* <p className='text-base'>{tool.description}</p> */}
                    </div>)
                }
            </div>
        </div>
    );
};

export default Tools;