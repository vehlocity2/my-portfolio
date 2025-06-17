import React from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { GoFileSubmodule } from "react-icons/go";
import { MdContactMail } from "react-icons/md";
import { GrBlog } from "react-icons/gr";

const Navbar = () => {
    const linkClasses = "w-36 h-28 border-2 border-[#cbe957] text-white rounded-md flex flex-col items-center justify-center transition duration-300 hover:bg-[#cbe957] hover:text-[#313743]  hover:shadow-md"
  return (
    <div className='grid grid-cols-2 gap-x-7 gap-y-5 mt-4 w-fit mx-auto '>
        <Link to="about" className={linkClasses}>
            <CgProfile />
            About
        </Link>
        <Link to="contact" className={linkClasses}> 
            <MdContactMail />
            Contact
        </Link>
        <Link to="projects" className={linkClasses}>
            <GoFileSubmodule />
            My Projects
        </Link>

        <Link to="blog" className={linkClasses}>
            <GrBlog />
            My Blog
        </Link>
    </div>
  )
}

export default Navbar