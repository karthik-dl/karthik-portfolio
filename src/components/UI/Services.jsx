import React from 'react'
import front_end from "../../assets/front-end.png"
import back_end from "../../assets/backend.png"
import python from "../../assets/python.png"
import java from "../../assets/java.jpeg"
const Services = () => {
  return (
    <section id='services'>
        <div className="container lg:pt-5">
            <div className="text-center">
                <h2 className='text-indigo font-[600] text-[2.4rem] mb-5'>
                    What do I help
                </h2>
                <p className='lg:max-w-[600px] lg:mx-auto text-indigo-950 font-[500] text-[16px] leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum officia, dolores quaerat praesentium odio nisi asperiores 
                    recusandae modi animi voluptatem quibusdam mollitia, culpa tempora 
                    in voluptas eum non dolore magni!.
                </p>
            </div>

            <div className='flex flex-col justify-center sm:py-12'>
                <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                    <div className="relative text-gray-700 antialiased text-sm font-semibold">
                      {/* vertical line running through the middle  */}
                      <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-transalte-x-1/2'>
                      </div>

                      {/* left card */}
                      <div className='mt-6 sm:mt-0 sm:mb-12'>
                        <div className='flex items-center flex-col sm:flex-row'>
                            <div className='flex justify-start w-full mx-auto items-center'>
                                <div className='w-full sm:w-1/2 sm:pr-8'>
                                    <div className='bg-white p-4 rounded shadow group hover:bg-purple-600 cursor-pointer ease-in duration-150 border border-black'>
                                        <h3 className='text-purple-600 font-[700] mb-3 group-hover:text-white group-hover:font-[500]'>
                                            Frontend Development</h3>
                                        <p className='text-[15px] text-indigo-950 group-hover:text-white group-hover:font-[500] leading-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                             Aspernatur fugit similique quae nihil quo, nesciunt quidem 
                                             ad totam earum. 
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='rounded-full bg-blue-600 border-white border-4
                                w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                <figure>
                                    <img src={front_end} alt="not visible"/>
                                </figure>
                            </div>
                        </div>
                      </div>

                      {/* right card */}
                      <div className='mt-6 sm:mt-0 sm:mb-12'>
                        <div className='flex items-center flex-col sm:flex-row'>
                            <div className='flex justify-end w-full mx-auto items-center'>
                                <div className='w-full sm:w-1/2 sm:pl-8'>
                                    <div className='bg-white p-4 rounded shadow group hover:bg-purple-600 cursor-pointer ease-in duration-150 border border-black'>
                                        <h3 className='text-purple-600 font-[700] mb-3 group-hover:text-white group-hover:font-[500]'>
                                            Backend Development</h3>
                                        <p className='text-[15px] text-indigo-950 group-hover:text-white group-hover:font-[500] leading-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                             Aspernatur fugit similique quae nihil quo, nesciunt quidem 
                                             ad totam earum. 
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='rounded-full bg-blue-600 border-white border-4
                                w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                <figure>
                                    <img src={back_end} alt="not visible"/>
                                </figure>
                            </div>
                        </div>
                      </div>

                      <div className='mt-6 sm:mt-0 sm:mb-12'>
                        <div className='flex items-center flex-col sm:flex-row'>
                            <div className='flex justify-start w-full mx-auto items-center'>
                                <div className='w-full sm:w-1/2 sm:pr-20'>
                                    <div className='bg-white p-4 rounded shadow group hover:bg-purple-600 cursor-pointer ease-in duration-150 border border-black'>
                                        <h3 className='text-purple-600 font-[700] mb-3 group-hover:text-white group-hover:font-[500]'>
                                            Python</h3>
                                        <p className='text-[15px] text-indigo-950 group-hover:text-white group-hover:font-[500] leading-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                             Aspernatur fugit similique quae nihil quo, nesciunt quidem 
                                             ad totam earum. 
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='rounded-full bg-blue-600 border-white border-4
                                w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                <figure>
                                    <img src={python} alt="not visible"/>
                                </figure>
                            </div>
                        </div>
                      </div>

                      {/* right card */}
                      <div className='mt-6 sm:mt-0 sm:mb-12'>
                        <div className='flex items-center flex-col sm:flex-row'>
                            <div className='flex justify-end w-full mx-auto items-center'>
                                <div className='w-full sm:w-1/2 sm:pl-20'>
                                    <div className='bg-white p-4 rounded shadow group hover:bg-purple-600 cursor-pointer ease-in duration-150 border border-black'>
                                        <h3 className='text-purple-600 font-[700] mb-3 group-hover:text-white group-hover:font-[500]'>
                                            Java</h3>
                                        <p className='text-[15px] text-indigo-950 group-hover:text-white group-hover:font-[500] leading-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                             Aspernatur fugit similique quae nihil quo, nesciunt quidem 
                                             ad totam earum. 
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='rounded-full bg-blue-600 border-white border-4
                                w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                <figure>
                                    <img src={java} alt="not visible"/>
                                </figure>
                            </div>
                        </div>
                      </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services