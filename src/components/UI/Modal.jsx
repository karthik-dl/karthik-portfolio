import React from 'react';
import item from '../../assets/data/portfolioData';

const Modal = ({setShowModal,activeID}) => {

    const  portfolio =item.find((item)=>item.id === activeID)
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
                </div>
            </div>
        </div>
    )
    }

export default Modal

// import React from 'react';
// import portfolios from '../../assets/data/portfolioData';

// const Modal = ({ setShowModal, activeID }) => {
//   // Use the correct parameter name in the find method
//   const portfolio = portfolios.find((item) => item.id === activeID);

//   // Handle the case where portfolio is not found
//   if (!portfolio) {
//     return (
//       <div className="w-full h-full fixed top-0 left-0 z-10 bg-indigo-950 bg-opacity-40 flex items-center justify-center">
//         <div className="max-w-[400px] bg-white rounded-[8px] p-5 text-center">
//           <h2 className="text-2xl text-red-600 font-bold mb-4">Project Not Found</h2>
//           <button
//             onClick={() => setShowModal(false)}
//             className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full h-full fixed top-0 left-0 z-10 bg-indigo-950 bg-opacity-40 flex items-center justify-center">
//       <div className="max-w-[600px] bg-white rounded-[8px] p-5 relative">
//         <button
//           onClick={() => setShowModal(false)}
//           className="absolute top-3 right-3 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
//         >
//           ✕
//         </button>
//         <div>
//           <figure>
//             <img className="rounded-[8px] w-full" src={portfolio.imgUrl} alt={portfolio.title} />
//           </figure>
//         </div>
//         <div>
//           <h2 className="text-2xl text-indigo-950 font-bold my-5">{portfolio.title}</h2>
//           <p className="text-[15px] leading-7 text-gray-700">{portfolio.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
