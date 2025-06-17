import React from 'react'
import ProjectCard from '../components/ProjectCard'
import example from '../assets/example.jpg'

const Projects = () => {
  return (
    <div className='py-12 px-2 font-inter'>
      <div className="flex items-center justify-center gap-3">
        <h1 className='text-2xl'>Contact Me</h1>
        <div className="w-4 h-4 bg-[#cbe957] rounded-full"></div>
        <hr className='flex-grow border-[#9c9c9c] hidden sm:block' />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-8">
        <ProjectCard image={example} title={"Ticket List"} detail={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut facere explicabo officiis animi tempore? Commodi obcaecati consequatur, qui ad deleniti sed suscipit ipsum facilis minima dolorum natus nihil voluptatem similique.'} info={'Lorem ipsum dolor sit amet, consectetur adipisicing'} roleDetails={'Lorem ipsum, dolor sit amet consectetur '} />
        <ProjectCard image={example} title={"Ticket List"} detail={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut facere explicabo officiis animi tempore? Commodi obcaecati consequatur, qui ad deleniti sed suscipit ipsum facilis minima dolorum natus nihil voluptatem similique.'} info={'Lorem ipsum dolor sit amet, consectetur adipisicing'} roleDetails={'Lorem ipsum, dolor sit amet consectetur '} />
        <ProjectCard image={example} title={"Ticket List"} detail={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut facere explicabo officiis animi tempore? Commodi obcaecati consequatur, qui ad deleniti sed suscipit ipsum facilis minima dolorum natus nihil voluptatem similique.'} info={'Lorem ipsum dolor sit amet, consectetur adipisicing'} roleDetails={'Lorem ipsum, dolor sit amet consectetur '} />
        <ProjectCard image={example} title={"Ticket List"} detail={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut facere explicabo officiis animi tempore? Commodi obcaecati consequatur, qui ad deleniti sed suscipit ipsum facilis minima dolorum natus nihil voluptatem similique.'} info={'Lorem ipsum dolor sit amet, consectetur adipisicing'} roleDetails={'Lorem ipsum, dolor sit amet consectetur '} />
      </div>
    </div>
  )
}

export default Projects