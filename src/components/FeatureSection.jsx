// import React from 'react'
import { features } from "../constants"

const FeatureSection = () => {
  return (
    <div className='relative mt-20  min-h-[800px]  border-b border-neutral-800'>
 <div className="text-center">
    <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
Feature
    </span>
    <h2 className="text-3xl sm:text-5xl lg:6xl mt-10 lg:mt-20 tracking-wide">
        Easily build 
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
        {' '}your code
        </span>
    </h2>

 </div>
 <div className="flex flex-wrap mt-10 lg:mt-20">
{features.map((feature, index)=>(
    <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
        <div className="flex ">

            <div className="flex mx-6 h-10 w-10 p-2 justify-center items-center rounded-full text-orange-700 bg-neutral-900">
        {feature.icon}
            </div>
            <div>
            <h5 className="mt-1 mb-6 text-xl ">
                {feature.text}

            </h5>
            <p className="text-md mb-20 text-neutral-500 p-2">{feature.description}</p>

            </div>
          
        </div>

    </div>
))}
 </div>
  </div>
  )
}

export default FeatureSection
