// import React from 'react'
// import { IoMailOpenOutline } from 'react-icons/io5'
// import { FaGithub } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";


// const Footer = () => {
//     const year = new Date().getFullYear()
//   return (
//     <footer className='bg-blue-950 pt-12'>
//         <div className='container'>
//             <div className='sm:flex items-center justify-between md:gap-8'>
//                 <div className='w-full sm:w-1/2'>
//                     <h2 className='text-[26px] leading-10 text-white fonr-[600] mb-5 md:text-[2rem]'>Do you want to make beautifull projects?</h2>
//                     <a href="#contact" className='w-30 flex items-center gap-2 bg-blue-400 text-white font-[500] hover:bg-indigo-950 ease-in duration-300 py-2 px-4 rounded-[4px]'>
//                     {/* <button className='flex items-center gap-2 bg-blue-400 text-white font-[500] hover:bg-indigo-950 ease-in duration-300 py-2 px-10 rounded-[4px]'><IoMailOpenOutline />Hire Me</button> */}
//                     <IoMailOpenOutline />Hire Me
//                     </a>
//                 </div>

//                <div className='w-full sm:w-1/2'>
//                     <p className='text-gray-300 leading-7 mt-4 sm:mt-0'>I'm open to working on exciting projects! Feel free to reach out and let's create something impactful together.
//                     </p>


//                     <div className='flex item-center gap-4 fex-wrap md:gap-8 mt-8'>
//                         <span className='text-gray-300 font-[600] text-[15px]'>Follow Me</span>

//                     <span className='w-[35px] h-[35px] p-0.5 rounded-[50px] cursor-pointer text-ceenter'>
//                         <a href='' className='text-gray-300 font-[500] text-[18px]'><FaGithub/>
//                         </a>
//                     </span>
//                     <span className='w-[35px] h-[35px] p-0.5 rounded-[50px] cursor-pointer text-ceenter'>
//                         <a href='' className='text-gray-300 font-[500] text-[18px]'><FaYoutube/>
//                         </a>
//                     </span>
//                     <span className='w-[35px] h-[35px] p-0.5 rounded-[50px] cursor-pointer text-ceenter'>
//                         <a href='' className='text-gray-300 font-[500] text-[18px]'><FaInstagram/>
//                         </a>
//                     </span>
//                     <span className='w-[35px] h-[35px] p-0.5 rounded-[50px] cursor-pointer text-ceenter'>
//                         <a href='' className='text-gray-300 font-[500] text-[18px]'><FaFacebook/>
//                         </a>
//                     </span>
//                     </div>
//                </div>

//                <div>
//                     <ul className="flex items-center justify-center gap-10 mt-10">
//                         <li><a className='text-gray-400 font-[600]' href='#about'>About</a></li>
//                         <li><a className='text-gray-400 font-[600]' href='#services'>Services</a></li>
//                         <li><a className='text-gray-400 font-[600]' href='#portfolio'>Portfolio</a></li>
//                         <li><a className='text-gray-400 font-[600]' href='#contact'>contact</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </div>

//         <div className='bg-blue-700 py-3 mt-14'>
//             <div className="container">
//                 <div className='flex items-center justify-center sm:justify-between'>
//                     <div className='hidden sm:block'>
//                         <div className='flex items-center gap-[10px]'>
//                             <span className='w-[35px] h-[35px] rounded-full bg-blue-500 text-white
//                             font-[500] text-[18px] flex items-center justify-center'>K</span>

//                             <div className='leading-[20px]'>
//                                 <h2 className='text-gray-100 fonr-[500] text-[18px]'>Karthik D L<Link:manifest></Link:manifest></h2>
//                                 <p className='text-gray-100 text-[14px] fonr-[500]'>Personal</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <p className='text-gray-100 text-[14px]'>
//                             Copyright {year} devoloped by Karthik D L - All right reserved.
//                         </p>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     </footer>
//   )
// }
// export default Footer


import React from 'react';
import { Mail, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Ready to start a project?</h3>
            <p className="text-gray-300 mb-6">
              I'm open to working on exciting projects! Let's create something impactful together.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-all">
              <Mail size={20} />
              Hire Me
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold">
                K
              </div>
              <div>
                <h3 className="font-bold">Karthik D L</h3>
                <p className="text-sm text-gray-400">Software Developer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Karthik D L. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;