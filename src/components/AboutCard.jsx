import React from 'react'


const AboutCard = ({icon, title, info, subHeading}) => {

  return (
    <div className='flex flex-col items-center justify-center gap-4 font-inter mt-10'>
        <h1 className='text-2xl'>{title}</h1>
        <div className="flex items-center gap-6">
          {icon} 
        </div>
        <h2 className='text-xl text-white text-center'>{subHeading}</h2>
        <p className='text-base text-white text-center'>{info}</p>
    </div>
  )
}

export default AboutCard