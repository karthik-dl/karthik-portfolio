// import React from 'react';
// import item from '../../assets/data/portfolioData';


// const Modal = ({setShowModal,activeID}) => {
    
//     const  portfolio =item.find((item)=>item.id === activeID)
//     // console.log(portfolio)
//         // Handle the case where portfolio is not found
//     if (!portfolio) {
//         return (
//             <div className="w-full h-full fixed top-0 left-0 z-10 bg-indigo-950 bg-opacity-40 flex items-center justify-center">
//                 <div className="max-w-[400px] bg-white rounded-[8px] p-5 text-center">
//                 <h2 className="text-2xl text-red-600 font-bold mb-4">Project Not Found</h2>
//                 <button
//                     onClick={() => setShowModal(false)}
//                     className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
//                     Close
//                 </button>
//                 </div>
//             </div>
//         );
//     }
//     return (
//         <div className='w-full h-full fixed top-0 left-0 z-10 bg-indigo-950 bg-opacity-40 flex items-center justify-center'>
//             <div className='max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[10px] transform-translate-x-1/2 -translate-y-1/2 p-[5px]'>
//                 <div>
//                     <figure>
//                         <img className='rounded-[8px]' src={portfolio.imgUrl} alt=""/>
//                     </figure>
//                 </div>

//                 <div>
//                     <h2 className='text-2xl text-indigo-950 font-[700] my-5'>{portfolio.title}</h2>
//                     <p className='text-[15px] leading-7 text-blue-950'>{portfolio.description}</p>

//                     <div className='mt-5 flex items-center gap-3 flex-wrap'>
//                         <h4 className='text-[18px] text-[600]'>Technologies :</h4>

//                         {portfolio?.technologies.map((tech,index)=>{
//                             return(
//                                 <span key={index} className='bg-gray-200 px-2 rounded-[5px] block text-[14px] leading-0.5'>
//                                 {tech}
                              
//                             </span>
//                             )
//                         })}
//                     </div>
                
//                 <a href='#'>
//                     <button className='bg-purple-500 text-white py-2 px-4 my-8 rounded-[8px] font-[500]
//                     hover:bg-indigo-950 ease-in-duration-300'>Live Site</button>
//                 </a>
//                 </div>

//             <button onClick={()=> setShowModal(false)}className='w-[1.8rem] h-[1.8rem] bg-[white] absolute top-[1.7rem] right-[1.7rem] text-[25px]
//             flex itmes-center justify-center rounded-[3px] leading-0 cursor-pointer'>X</button>
//             </div>
//         </div>
//     )
//     }

// export default Modal

import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import portfolioData from '../../assets/data/portfolioData';

const Modal = ({ setShowModal, activeID }) => {
    const portfolio = portfolioData.find((item) => item.id === activeID);

    // Close modal on Escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setShowModal(false);
            }
        };
        window.addEventListener('keydown', handleEscape);
        
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
        
        return () => {
            window.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [setShowModal]);

    // Handle backdrop click
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            setShowModal(false);
        }
    };

    // Handle the case where portfolio is not found
    if (!portfolio) {
        return (
            <div 
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={handleBackdropClick}
            >
                <div className="bg-white rounded-lg p-8 text-center max-w-md w-full shadow-2xl">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">⚠️</span>
                    </div>
                    <h2 className="text-2xl text-gray-900 font-bold mb-2">Project Not Found</h2>
                    <p className="text-gray-600 mb-6">The requested project could not be found.</p>
                    <button
                        onClick={() => setShowModal(false)}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 px-6 rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105"
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all animate-slideUp">
                {/* Image Section */}
                <div className="relative">
                    <figure className="w-full h-64 md:h-80 overflow-hidden rounded-t-2xl">
                        <img 
                            className="w-full h-full object-cover" 
                            src={portfolio.imgUrl} 
                            alt={portfolio.title}
                        />
                    </figure>
                    
                    {/* Close Button */}
                    <button
                        onClick={() => setShowModal(false)}
                        className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all hover:scale-110 shadow-lg"
                        aria-label="Close modal"
                    >
                        <X size={20} className="text-gray-700" />
                    </button>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8">
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {portfolio.title}
                    </h2>

                    {/* Description */}
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                        {portfolio.description}
                    </p>

                    {/* Technologies Section */}
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {portfolio.technologies.map((tech, index) => (
                                <span 
                                    key={index} 
                                    className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                        <a 
                            href={portfolio.liveUrl || '#'} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105"
                        >
                            <ExternalLink size={18} />
                            Visit Live Site
                        </a>
                        
                        {portfolio.githubUrl && (
                            <a 
                                href={portfolio.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                View Code
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { 
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }
                .animate-slideUp {
                    animation: slideUp 0.3s ease-out;
                }
            `}</style>
        </div>
    );
};

export default Modal;