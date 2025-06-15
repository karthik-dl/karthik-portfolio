import React from 'react';
import item from '../../assets/data/portfolioData';


const Modal = ({setShowModal,activeID}) => {
    
    const  portfolio =item.find((item)=>item.id === activeID)
    // console.log(portfolio)
        // Handle the case where portfolio is not found
    if (!portfolio) {
        return (
            <div className="w-full h-full fixed top-0 left-0 z-10 bg-indigo-950 bg-opacity-40 flex items-center justify-center">
                <div className="max-w-[400px] bg-white rounded-[8px] p-5 text-center">
                <h2 className="text-2xl text-red-600 font-bold mb-4">Project Not Found</h2>
                <button
                    onClick={() => setShowModal(false)}
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                    Close
                </button>
                </div>
            </div>
        );
    }
    return (
        <div className='w-full h-full fixed top-0 left-0 z-10 bg-indigo-950 bg-opacity-40 flex items-center justify-center'>
            <div className='max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[10px] transform-translate-x-1/2 -translate-y-1/2 p-[5px]'>
                <div>
                    <figure>
                        <img className='rounded-[8px]' src={portfolio.imgUrl} alt=""/>
                    </figure>
                </div>

                <div>
                    <h2 className='text-2xl text-indigo-950 font-[700] my-5'>{portfolio.title}</h2>
                    <p className='text-[15px] leading-7 text-blue-950'>{portfolio.description}</p>

                    <div className='mt-5 flex items-center gap-3 flex-wrap'>
                        <h4 className='text-[18px] text-[600]'>Technologies :</h4>

                        {portfolio?.technologies.map((tech,index)=>{
                            return(
                                <span key={index} className='bg-gray-200 px-2 rounded-[5px] block text-[14px] leading-0.5'>
                                {tech}
                              
                            </span>
                            )
                        })}
                    </div>
                
                <a href='#'>
                    <button className='bg-purple-500 text-white py-2 px-4 my-8 rounded-[8px] font-[500]
                    hover:bg-indigo-950 ease-in-duration-300'>Live Site</button>
                </a>
                </div>

            <button onClick={()=> setShowModal(false)}className='w-[1.8rem] h-[1.8rem] bg-[white] absolute top-[1.7rem] right-[1.7rem] text-[25px]
            flex itmes-center justify-center rounded-[3px] leading-0 cursor-pointer'>X</button>
            </div>
        </div>
    )
    }

export default Modal

