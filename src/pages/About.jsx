import React from 'react'
import MyExpertise from '../components/MyExpertise'
import AboutCard from '../components/AboutCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faGithub,faReact, faVuejs,  faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { SiNextdotjs } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { SiBootstrap } from 'react-icons/si'


const About = () => {
  return (
    <div className='py-12 px-4 '>
      <div className="flex items-center font-inter justify-center gap-3">
        <h1 className='text-2xl'>About Me</h1>
        <div className="w-4 h-4  bg-[#cbe957] rounded-full"></div>
        <hr className='flex-grow border-[#9c9c9c] hidden sm:block '/>
      </div>
      <MyExpertise />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-8">
        <AboutCard title={"Design"} icon={[ <FontAwesomeIcon icon={faHtml5} className="text-6xl text-orange-600" />,
            <FontAwesomeIcon icon={faCss3Alt} className="text-6xl text-blue-700" />,
            <SiTailwindcss className="text-6xl text-sky-400" />]} subHeading={'Creative and Detail-Oriented Front-End Design'} info={'I specialize in crafting visually appealing, responsive, and user-centric web interfaces using HTML5, CSS3, and Tailwind CSS. My design philosophy is centered on usability and accessibility, ensuring that every interface not only looks stunning but also delivers a seamless experience across all devices.'}/>
        <AboutCard title={"Development"} icon={[<FontAwesomeIcon icon={faGithub} className="text-6xl text-black" />, <FontAwesomeIcon icon={faReact} className="text-6xl text-blue-500" />, <FontAwesomeIcon icon={faJs} className="text-6xl text-yellow-500" />]} subHeading={'Robust and Scalable Front-End Development'} info={'As a skilled front-end developer, I build dynamic and maintainable web applications using JavaScript, React, and modern development practices. My expertise lies in writing clean, modular code and leveraging Git for version control to support agile and collaborative development workflows.'} />
        <AboutCard title={"UI/UX"} icon={[<SiTailwindcss className="text-6xl text-sky-400" />, <FontAwesomeIcon icon={faVuejs} className="text-6xl text-green-500" />, <SiBootstrap className="text-6xl text-purple-600" />]} subHeading={'User-First Experience Design'} info={'With a passion for intuitive user experiences, I design with empathy—prioritizing ease of use, interaction flow, and accessibility. Using tools like Figma and principles of modern UI/UX, I transform complex requirements into meaningful and engaging interfaces that users love.'}/>
        <AboutCard title={"Frameworks"} icon={[<SiNextdotjs className="text-6xl text-black" />, <FontAwesomeIcon icon={faReact} className="text-6xl text-blue-500" />, <FontAwesomeIcon icon={faVuejs} className="text-6xl text-green-500" />]} subHeading={'Modern Web Framework Proficiency'} info={'Proficient in leveraging powerful frameworks such as React, Next.js, and Vue.js to develop performant and scalable web applications. I focus on best practices, reusability, and maintainability to ensure efficient development cycles and long-term success.'}/>
      </div>
    </div>
  )
}

export default About