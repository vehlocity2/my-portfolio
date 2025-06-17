import React from 'react'


const ProjectCard = ({title, detail, info, roleDetails, image}) => {
  return (
    <div className='rounded-lg shadow-2xl mx-2 bg-[#3f3a3a] pb-4 font-inter overflow-hidden'>
        <img src={image} alt="" className='w-full' />
        <div className="px-2">
            <div className="mt-4 mb-8">
                <h1 className='text-lg '>{title}</h1>
                <p className='text-xs text-white mt-3'>{detail}</p>
            </div>
            <h3 className='text-base mt-5'>Technologies: <span className='text-sm text-white'>{info}</span></h3>
            <p className='text-base'>Role: <span className='text-xs text-white'>{roleDetails}</span></p>
        </div>
    </div>
  )
}

export default ProjectCard