import React from 'react'
import ProjectCard from '../components/ProjectCard'
import example from '../assets/example.jpg'

const Projects = () => {
  return (
    <div className='py-6 px-2 font-inter'>
      <div className="flex items-center justify-center gap-3">
        <h1 className='text-2xl'>My Projects</h1>
        <div className="w-4 h-4 bg-[#cbe957] rounded-full"></div>
        <hr className='flex-grow border-[#9c9c9c] hidden sm:block' />
      </div>
      <div className="">
        <ProjectCard />
      </div>
    </div>
  )
}

export default Projects