import React from 'react'
import example from '../assets/example.jpg'
import eroDesign from '../assets/front-view-woman-wearing-hat.jpg'

const ProjectCard = () => {

  const projects = [
    { title: "Ero Design World", 
      detail: "Your one-stop fashion hub for stylish dresses, from elegant gowns and sharp suits to trendy casuals and cultural attires for both men and women. Dress to impress, anytime, anywhere!", 
      infos: [
          {
            techStack: "NextJs, Express, MongoDB, TailwindCSS",
            features: "Product listings, image uploads, shopping cart, authentication, responsive design, and more."
          }
        ], 
      roleDetails: "Developed the entire application end-to-end, including UI design, backend APIs, database modeling, and deployment.", 
      image: eroDesign,
      bg: "bg-[#c2f9fe]", 
      button: "bg-[#1784c5] text-white hover:bg-[#195a80] transition ease-in-out duration-300", 
      titleColor: "text-[#195a80]",
      detailColor: "text-[#628c9c]",
      link : "https://erosdesignworld-git-staging-olola-jacos-projects.vercel.app"
    },
    { title: "Project 2", 
      detail: "Detail about project 2", 
      infos: [
          {
            techStack: "Info about project 2",
            features: "info about project 2.1"
          }
        ], 
      roleDetails: "Role details for project 2", 
      image: example,
      bg: "bg-[#feeaa1]", 
      button: "bg-[#655e41] text-white hover:bg-[#4a4b3d] transition ease-in-out duration-300",
      titleColor: "text-[#74623a]",
      detailColor: "text-[#623a00]",
      link : "https://project2.com"
    },
    { title: "Project 3", 
      detail: "Detail about project 3", 
      infos: [
          {
            techStack: "Info about project 2",
            features: "info about project 2.1"
          }
        ], 
      roleDetails: "Role details for project 3", 
      image: example,
      bg: "bg-[#fec087]", 
      button: "bg-[#644e37] text-white hover:bg-[#4a4a4d] transition ease-in-out duration-300", 
      titleColor: "text-[#67523d]",
      detailColor: "text-[#793d09]",
      link : "https://project3.com"
    },
    {
      title: "Project 4",
      detail: "Detail about project 4",
     infos: [
          {
            techStack: "Info about project 4",
            features: "info about project 4.1"
          }
        ], 
      roleDetails: "Role details for project 4",
      image: example,
      bg: "bg-[#b9fea1]",
      button: "bg-[#4b6540] text-white hover:bg-[#417058] transition ease-in-out duration-300",
      titleColor: "text-[#4a6737]",
      detailColor: "text-[#6c732d]",
      link : "https://project4.com"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
      { projects.map(( project, index)=>(
         <div key={index} className={`group flex flex-col rounded-lg shadow-2xl mx-2 pb-4 font-inter overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg ${project.bg}`}>
          <img src={project.image} alt="" className='w-44 h-44 rounded-full mx-auto object-cover  mt-2 group-hover:mt-0 transition-all duration-300 ease-in-out group-hover:w-full group-hover:h-auto group-hover:rounded-none group-hover:shadow-none' />
          <div className="px-2">
              <div className="mt-2 mb-2">
                  <h1 className={`text-xl font-semibold text-center ${project.titleColor}`}>{project.title}</h1>
                  <p className={`text-xs text-center ${project.detailColor} mt-2`}>{project.detail}</p>
              </div>
              <h3 className={`text-xl font-semibold mb-2 text-center ${project.titleColor}`}>Technologies</h3>
              <p className={`text-xs ${project.detailColor}`}>{project.infos?.map((info, index)=>(
                    <li key={index} className={`list-none ${project.detailColor}`}>
                      <span className="font-semibold">Tech Stack:</span> {info.techStack} <br />
                      <span className="font-semibold">Features:</span> {info.features}
                    </li>
                  ))}
              </p>
              <p className={`text-lg font-semibold  text-center ${project.titleColor}`}>Role</p>
              <span className={`text-xs ${project.detailColor}`}>{project.roleDetails}</span>
          </div>
          <a href={project.link} target='_blank' rel="noopener noreferrer" className={`mt-2 mx-auto py-[6px] px-4 rounded-3xl ${project.button}`}>
            visit page
          </a>
      </div>
      ))}
    </div>
  )
}

export default ProjectCard