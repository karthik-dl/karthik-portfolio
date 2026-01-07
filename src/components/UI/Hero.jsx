// import React from 'react'
// import { IoMailOpenOutline } from "react-icons/io5";
// import me from "../../assets/me.jpg";
// import CountUp from 'react-countup';

// const Hero = () => {
//   return (
//     <section className='pt-0' id='about'>
//       <div className='container pt-14'>
//         <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
//           {/* hero left content */}
//           <div className='w-full md:basis-1/2'>
//             <h5 
//               data-aos="fade-right"
//               data-aos-duration="1500"
//               className="text-indigo-950 font-[600] text-[16px]">Hello Welcome
//             </h5>
//             <h1 data-aos="fade-up"
//               data-aos-duration="1500" className='text-indigo-900 font-[700] text-[1.4rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>I am Karthik D L <br/>Software Developer
//             </h1>
//             <div data-aos="fade-up"
//             data-aos-duration="1800" data-aos-delay="200" className='flex items-center gap-6 mt-7'>
//               <a href="#contact" className='flex items-center gap-2 bg-blue-400 text-white font-[500] hover:bg-indigo-950 ease-in duration-300 py-2 px-4 rounded-[4px]'>
//                 {/* <button className='flex items-center gap-2 bg-blue-400 text-white font-[500] hover:bg-indigo-950 ease-in duration-300 py-2 px-10 rounded-[4px]'><IoMailOpenOutline />Hire Me</button> */}
//                 <IoMailOpenOutline />Hire Me
//               </a>
//               <a href="#portfolio" className='text-indigo-950 font-[600] text-[18px] border-b border-solid border-blue-600'>See Portfolio</a>
//             </div>
//             <p data-aos="fade-left"
//               data-aos-duration="1800" className='flex gap-2 mt-5 text-indigo-950 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'>To be associated with an organization which provides challenging work environment 
//               and proving my excellence at every step is my long-term 
// career goal. Highly efficient and passionate for learning new concepts, ideas, techniques.
//             </p>
//             <div className='flex items-center gap-9 m1-14'>
//               <span className='text-blue-400 text-[15px] font-[600]'>Follow Me:</span>
//             </div>
//           </div>

//           <div className='basis-1/3 mt-10 sm:mt-0'>
//               <figure className='flex items-center justify-center h-[200px] w-[200px] '>
//                 <img src={me} alt="not visible" className='rounded-[50%]'/>
//               </figure>
//           </div>

//           <div className='md-basis-1/5 flex justify-between text-center mt-110 flex-wrap gap-3 md:mt-0
//             md:flex-col md:justify-end md:text-end'>
//               <div className='mb-10'>
//                 <h2 className='text-indigo-950 font-[500] text-[16px]'>
//                   <CountUp start={0} end={0} duration={2} suffix="+"/>
//                 </h2>

//                 <h4 className='text-indigo-950 font-[500] text-[16px]'>Year of Experience</h4>
//               </div>

//               <div className='mb-10'>
//                 <h2 className='text-indigo-950 font-[500] text-[16px]'>
//                   <CountUp start={0} end={100} duration={2} suffix="+"/>
//                 </h2>

//                 <h4 className='text-indigo-950 font-[500] text-[16px]'>Success Rate</h4>
//               </div>

//               <div className='mb-10'>
//                 <h2 className='text-indigo-950 font-[500] text-[16px]'>
//                   <CountUp start={0} end={150} duration={2} suffix="+"/>
//                 </h2>

//                 <h4 className='text-indigo-950 font-[500] text-[16px]'>Happey clients</h4>
//               </div>

//               <div className='mb-10'>
//                 <h2 className='text-indigo-950 font-[500] text-[16px]'>
//                   <CountUp start={0} end={5} duration={2} suffix="+"/>
//                 </h2>

//                 <h4 className='text-indigo-950 font-[500] text-[16px]'>Projects completed</h4>
//               </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero
import React from 'react';  
import me from "../../assets/me.jpg";
import { Mail, Github, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              👋 Welcome
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Karthik D L</span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-700">Software Developer</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Passionate about creating innovative web applications and Python solutions. 
              I transform ideas into reality with clean code and modern technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all hover:scale-105">
                <Mail size={20} />
                Hire Me
              </a>
              <a href="#portfolio" className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all">
                See Portfolio
                <ExternalLink size={18} />
              </a>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <span className="text-gray-600 font-medium">Follow Me:</span>
              {[Github,].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src={me} 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 grid grid-cols-2 gap-4">
                {[
                  { label: 'Projects', value: '5+' },
                  { label: 'Clients', value: '150+' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-4 shadow-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;