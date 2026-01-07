// import React from 'react'
// import { FiSend } from "react-icons/fi";
// // import { IoMenu } from "react-icons/io5";
// const Header=()=>{
//     return <header className="w-full h-[80px] leading-[80px] flex items-center">
//         <div className='container w-[80%] mx-auto'>
//             <div className='flex items-center justify-between'>
//                 {/* logo */}
//                 <div className='flex items-center gap-[10px]'>
//                     <span className='w-[35px] h-[35px] bg-blue-500 text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>K</span>
//                     {/* <span className="bg-yellow-300 text-red">hello</span> */}
//                     <div className="leading-[20px]">
//                         <h2 className="text-xl text-blue-500 font-[800]">Karthik D L</h2>
//                         <p className="text-blue-400 text-[15px] font-[500]">Personal</p>
//                     </div>
//                 </div>

//                 {/* logo end */}
//                 {/* menu start */}
//                 <div className='menu'>
//                     <ul className="flex items-center gap-10">
//                         <li><a className='text-blue-400 font-[600]' href='#about'>About</a></li>
//                         <li><a className='text-blue-400 font-[600]' href='#services'>Services</a></li>
//                         <li><a className='text-blue-400 font-[600]' href='#portfolio'>Portfolio</a></li>
//                         <li><a className='text-blue-400 font-[600]' href='#contact'>contact</a></li>
//                     </ul>
//                 </div>
//                 {/* menu end */}

//                 {/* menu right */}
//                 <div className="flex items-center gap-4">
//                     <button className='flex items-center  gap-2 text-blue-400 font-[600] border border-solid border-blue-400 py-2 px-4 rounded-[5px] mx-h-[18px]  h-[35px] w-[130px]
//                     hover:bg-blue-400 hover:text-white hover:font-[500] ease-in duration-700'>
//                     <FiSend />Let's Talk
//                     </button>

//                     {/* <span className="text-2xl text-blue-400 md:hidden cursor-pointer">
//                     <IoMenu />
//                     </span> */}
//                 </div>

//             </div>
//         </div>
//     </header>
// };

// export default Header

import React, { useState, useEffect } from 'react';
import { Send, Menu, X } from 'lucide-react';

const Header = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['about', 'services', 'portfolio', 'contact'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
              K
            </div>
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Karthik D L
              </h2>
              <p className="text-sm text-gray-600">Software Developer</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link}`}
                className={`font-medium capitalize transition-colors hover:text-blue-600 ${
                  activeSection === link ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {link}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg transition-all hover:scale-105">
            <Send size={18} />
            Let's Talk
          </a>

          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link}`}
                className="font-medium capitalize text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;