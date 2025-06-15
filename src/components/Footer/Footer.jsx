import React from 'react'
import { IoMailOpenOutline } from 'react-icons/io5'
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className='bg-blue-950 pt-12'>
        <div className='container'>
            <div className='sm:flex items-center justify-between md:gap-8'>
                <div className='w-full sm:w-1/2'>
                    <h2 className='text-[26px] leading-10 text-white fonr-[600] mb-5 md:text-[2rem]'>Do you want to make beautifull projects?</h2>
                    <a href="#contact" className='w-30 flex items-center gap-2 bg-blue-400 text-white font-[500] hover:bg-indigo-950 ease-in duration-300 py-2 px-4 rounded-[4px]'>
                    {/* <button className='flex items-center gap-2 bg-blue-400 text-white font-[500] hover:bg-indigo-950 ease-in duration-300 py-2 px-10 rounded-[4px]'><IoMailOpenOutline />Hire Me</button> */}
                    <IoMailOpenOutline />Hire Me
                    </a>
                </div>

               <div className='w-full sm:w-1/2'>
                    <p className='text-gray-300 leading-7 mt-4 sm:mt-0'>I'm open to working on exciting projects! Feel free to reach out and let's create something impactful together.
                    </p>


                    <div className='flex item-center gap-4 fex-wrap md:gap-8 mt-8'>
                        <span className='text-gray-300 font-[600] text-[15px]'>Follow Me</span>

                    <span className='w-[35px] h-[35px] p-0.5 rounded-[50px] cursor-pointer text-ceenter'>
                        <a href='' className='text-gray-300 font-[500] text-[18px]'><FaGithub/>
                        </a>
                    </span>
                    <span className='w-[35px] h-[35px] p-0.5 rounded-[50px] cursor-pointer text-ceenter'>
                        <a href='' className='text-gray-300 font-[500] text-[18px]'><FaYoutube/>
                        </a>
                    </span>
                    <span className='w-[35px] h-[35px] p-0.5 rounded-[50px] cursor-pointer text-ceenter'>
                        <a href='' className='text-gray-300 font-[500] text-[18px]'><FaInstagram/>
                        </a>
                    </span>
                    <span className='w-[35px] h-[35px] p-0.5 rounded-[50px] cursor-pointer text-ceenter'>
                        <a href='' className='text-gray-300 font-[500] text-[18px]'><FaFacebook/>
                        </a>
                    </span>
                    </div>
               </div>

               <div>
                    <ul className="flex items-center justify-center gap-10 mt-10">
                        <li><a className='text-gray-400 font-[600]' href='#about'>About</a></li>
                        <li><a className='text-gray-400 font-[600]' href='#services'>Services</a></li>
                        <li><a className='text-gray-400 font-[600]' href='#portfolio'>Portfolio</a></li>
                        <li><a className='text-gray-400 font-[600]' href='#contact'>contact</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='bg-blue-700 py-3 mt-14'>
            <div className="container">
                <div className='flex items-center justify-center sm:justify-between'>
                    <div className='hidden sm:block'>
                        <div className='flex items-center gap-[10px]'>
                            <span className='w-[35px] h-[35px] rounded-full bg-blue-500 text-white
                            font-[500] text-[18px] flex items-center justify-center'>K</span>

                            <div className='leading-[20px]'>
                                <h2 className='text-gray-100 fonr-[500] text-[18px]'>Karthik D L<Link:manifest></Link:manifest></h2>
                                <p className='text-gray-100 text-[14px] fonr-[500]'>Personal</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-gray-100 text-[14px]'>
                            Copyright {year} devoloped by Karthik D L - All right reserved.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </footer>
  )
}
export default Footer