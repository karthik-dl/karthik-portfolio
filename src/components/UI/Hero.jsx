import React from 'react'
import { IoMailOpenOutline } from "react-icons/io5";
import me from "../../assets/me.jpg";
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <section className='pt-0' id='about'>
      <div className='container pt-14'>
        <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
          {/* hero left content */}
          <div className='w-full md:basis-1/2'>
            <h5 
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-indigo-950 font-[600] text-[16px]">Hello Welcome
            </h5>
            <h1 data-aos="fade-up"
              data-aos-duration="1500" className='text-indigo-900 font-[700] text-[1.4rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'>I am Karthik D L <br/>Software Developer
            </h1>
            <div data-aos="fade-up"
            data-aos-duration="1800" data-aos-delay="200" className='flex items-center gap-6 mt-7'>
              <a href="#contact" className='flex items-center gap-2 bg-blue-400 text-white font-[500] hover:bg-indigo-950 ease-in duration-300 py-2 px-4 rounded-[4px]'>
                {/* <button className='flex items-center gap-2 bg-blue-400 text-white font-[500] hover:bg-indigo-950 ease-in duration-300 py-2 px-10 rounded-[4px]'><IoMailOpenOutline />Hire Me</button> */}
                <IoMailOpenOutline />Hire Me
              </a>
              <a href="#portfolio" className='text-indigo-950 font-[600] text-[18px] border-b border-solid border-blue-600'>See Portfolio</a>
            </div>
            <p data-aos="fade-left"
              data-aos-duration="1800" className='flex gap-2 mt-14 text-indigo-950 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
              Non iste ut eius voluptatem molestias iure odio unde delectus aut nisi,<br/> deleniti a magni sed, 
              neque culpa natus explicabo saepe animi.
            </p>
            <div className='flex items-center gap-9 m1-14'>
              <span className='text-blue-400 text-[15px] font-[600]'>Follow Me:</span>
            </div>
          </div>

          <div className='basis-1/3 mt-10 sm:mt-0'>
              <figure className='flex items-center justify-center h-[200px] w-[200px] '>
                <img src={me} alt="not visible" className='rounded-[50%]'/>
              </figure>
          </div>

          <div className='md-basis-1/5 flex justify-between text-center mt-110 flex-wrap gap-3 md:mt-0
            md:flex-col md:justify-end md:text-end'>
              <div className='mb-10'>
                <h2 className='text-indigo-950 font-[500] text-[16px]'>
                  <CountUp start={0} end={0} duration={2} suffix="+"/>
                </h2>

                <h4 className='text-indigo-950 font-[500] text-[16px]'>Year of Experience</h4>
              </div>

              <div className='mb-10'>
                <h2 className='text-indigo-950 font-[500] text-[16px]'>
                  <CountUp start={0} end={100} duration={2} suffix="+"/>
                </h2>

                <h4 className='text-indigo-950 font-[500] text-[16px]'>Success Rate</h4>
              </div>

              <div className='mb-10'>
                <h2 className='text-indigo-950 font-[500] text-[16px]'>
                  <CountUp start={0} end={150} duration={2} suffix="+"/>
                </h2>

                <h4 className='text-indigo-950 font-[500] text-[16px]'>Happey clients</h4>
              </div>

              <div className='mb-10'>
                <h2 className='text-indigo-950 font-[500] text-[16px]'>
                  <CountUp start={0} end={5} duration={2} suffix="+"/>
                </h2>

                <h4 className='text-indigo-950 font-[500] text-[16px]'>Projects completed</h4>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero