import React from 'react'
import { FiSend } from "react-icons/fi";
// import { IoMenu } from "react-icons/io5";
const Header=()=>{
    return <header className="w-full h-[80px] leading-[80px] flex items-center">
        <div className='container w-[80%] mx-auto'>
            <div className='flex items-center justify-between'>
                {/* logo */}
                <div className='flex items-center gap-[10px]'>
                    <span className='w-[35px] h-[35px] bg-blue-500 text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>K</span>
                    {/* <span className="bg-yellow-300 text-red">hello</span> */}
                    <div className="leading-[20px]">
                        <h2 className="text-xl text-blue-500 font-[800]">Karthik</h2>
                        <p className="text-blue-400 text-[15px] font-[500]">Personal</p>
                    </div>
                </div>

                {/* logo end */}
                {/* menu start */}
                <div className='menu'>
                    <ul className="flex items-center gap-10">
                        <li><a className='text-blue-400 font-[600]' href='#about'>About</a></li>
                        <li><a className='text-blue-400 font-[600]' href='#services'>Services</a></li>
                        <li><a className='text-blue-400 font-[600]' href='#portfolio'>Portfolio</a></li>
                        <li><a className='text-blue-400 font-[600]' href='#contact'>contact</a></li>
                    </ul>
                </div>
                {/* menu end */}

                {/* menu right */}
                <div className="flex items-center gap-4">
                    <button className='flex items-center  gap-2 text-blue-400 font-[600] border border-solid border-blue-400 py-2 px-4 rounded-[5px] mx-h-[18px]  h-[35px] w-[100px]
                    hover:bg-blue-400 hover:text-white hover:font-[500] ease-in duration-700'>
                    <FiSend />
                        Let's Talk
                    </button>

                    {/* <span className="text-2xl text-blue-400 md:hidden cursor-pointer">
                    <IoMenu />
                    </span> */}
                </div>

            </div>
        </div>
    </header>
};

export default Header