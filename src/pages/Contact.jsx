import React, { useState } from 'react';
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // clear error as user types
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    // show first error via toast
    const firstError = Object.values(validationErrors)[0];
    toast.error(firstError);
  } else {
    toast.success("Message sent successfully!");
    console.log("Submitted:", form);
    setForm({ name: '', email: '', subject: '', message: '' });
  }
};


  return (
    <div className='py-12 px-2 font-inter'>
      <div className="flex items-center justify-center gap-3">
        <h1 className='text-2xl'>Contact Me</h1>
        <div className="w-4 h-4 bg-[#cbe957] rounded-full"></div>
        <hr className='flex-grow border-[#9c9c9c] hidden sm:block' />
      </div>

      <form onSubmit={handleSubmit} className="w-[80%] mx-auto mt-8">
        <div className="flex flex-col items-center sm:flex-row gap-4">
          <div className="w-full sm:w-1/2 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold w-full ">Let's talk about everything!</h2>
            <p className="text-base text-white text-center">
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className='text-lg flex items-center gap-3 text-white pb-4 justify-center mt-8'>
              <a href="">
                <IoMdMail className='mr-2' size={24}/>
              </a>
              <a href="https://github.com/vehlocity2">
                <FaGithub className='mr-2 ' size={24}/>
              </a>
              <a href="">
                <IoLogoLinkedin className='mr-2' size={24}/>
              </a>
              <a href="">
                <FaTwitter className='mr-2' size={24}/>
              </a>
            </div>
          </div>

          <div className="w-full sm:w-1/2 flex flex-col gap-4">
            <div className="flex gap-2 flex-col sm:flex-row">
              <div className="w-full">
                <label>
                  Full Name:
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-[#9c9c9c] bg-[#374151] outline-none p-2 rounded-3xl mt-1"
                  />
                </label>
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div className="w-full">
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-[#9c9c9c] bg-[#374151] outline-none p-2 rounded-3xl mt-1"
                  />
                </label>
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label>
                Subject:
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full border border-[#9c9c9c] bg-[#374151] p-2 outline-none rounded-3xl mt-1"
                />
              </label>
              {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
            </div>

            <div>
              <label>
                Message:
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full border border-[#9c9c9c] bg-[#374151] p-2 outline-none rounded-md mt-1"
                  rows="4"
                ></textarea>
              </label>
              {errors.message && <p className="text-red-500  text-sm">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-[#cbe957] text-[#313743] font-semibold py-2 px-4 outline-none rounded-md hover:shadow-lg hover:text-white transition"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
       <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Contact;
