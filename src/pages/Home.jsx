import React from 'react'
import SubText from '../components/SubText'
import MainBody from '../components/MainBody'
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";


const Home = () => {
  return (
    <div className='bg-[#313743] h-screen text-[#cbe957] pb-5 sm:px-28'>
     <SubText />
     <MainBody />
     <div className='text-lg flex items-center gap-3 text-white pb-4 justify-center mt-8'>
       <a href="mailto:oshiokeboss@gmail.com">
         <IoMdMail className='mr-2' size={24}/>
       </a>
       <a href="https://github.com/vehlocity2">
         <FaGithub className='mr-2 ' size={24}/>
       </a>
       <a href="">
         <IoLogoLinkedin className='mr-2' size={24}/>
       </a>
       <a href="https://x.com/iam_velocity2">
         <FaTwitter className='mr-2' size={24}/>
       </a>
     </div>
     </div>
  )
}

export default Home