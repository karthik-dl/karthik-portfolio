
// import React, { useEffect, useState } from 'react';
// import data from "../../assets/data/portfolioData";
// import Modal from './Modal';

// const Portfolio = () => {
//   const [nextItems, setNextItems] = useState(6);
//   const [portfolios, setPortfolios] = useState(data);
//   const [selectTab, setSelectTab] = useState('all');
//   const [showModal, setShowModal] = useState(false);
//   const [activeID, setActiveID] = useState(null);

//   const loadMoreHandler = () => {
//     setNextItems(prev => prev + 3);
//   };

//   const showModalHandler = id => {
//     setShowModal(true);
//     setActiveID(id);
//   };

//   useEffect(() => {
//     if (selectTab === 'all') {
//       setPortfolios(data);
//     }

//     if (selectTab === 'Web Design') {
//       const filteredData = data.filter(item => item.category === 'Web Design');
//       setPortfolios(filteredData);
//     }

//     if (selectTab.toLowerCase() === 'python') {
//       const filteredData = data.filter(item => item.category === 'Python');
//       setPortfolios(filteredData);
//     }
//   }, [selectTab]);

//   return (
//     <section id='portfolio'>
//       <div className='container p-10 my-16'>
//         <div className='flex items-center justify-between flex-wrap p-6 rounded-lg'>
//           <div className='mb-7 sm:mb-0'>
//             <h3 className='text-indigo-950 text-[2rem] font-[700]'>My recent projects</h3>
//           </div>

//           <div className='flex gap-8'>
//             <button
//               onClick={() => setSelectTab('all')}
//               className='text-blue-400 border-2 border-solid border-indigo-950  hover:bg-indigo-950 ease-in duration-300  py-2 px-4 rounded-[8px] w-30'
//             >
//               All
//             </button>

//             <button
//               onClick={() => setSelectTab('Web Design')}
//               className='text-blue-400 border-2 border-solid border-indigo-950  hover:bg-indigo-950 ease-in duration-300 py-2 px-2 rounded-[8px]  w-30'
//             >
//               Web Design
//             </button>

//             <button
//               onClick={() => setSelectTab('Python')}
//               className='text-blue-400 border-2 border-solid border-indigo-950  hover:bg-indigo-950 ease-in duration-300 py-2 px-4 rounded-[8px] w-30'
//             >
//               Python
//             </button>
//           </div>

//           <div className='flex items-center gap-4 flex-wrap mt-12'>
//             {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
//               <div
//                 key={portfolio.id}
//                 className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'
//               >
//                 <figure>
//                   <img className='rounded-[8px]' src={portfolio.imgUrl} alt='' />
//                 </figure>

//                 <div className='w-full h-full bg-indigo-950 bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
//                   <div className='w-full h-full flex items-center justify-center'>
//                     <button
//                       onClick={() => showModalHandler(portfolio.id)}
//                       className='text-white bg-blue-950 hover:bg-red-500 py-2 px-4 rounded-[4px] font-[500] ease-in duration-200'
//                     >
//                       See Details
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className='text-center mt-20'>
//           {nextItems < portfolios.length && data.length > 6 && (
//             <button
//               onClick={loadMoreHandler}
//               className='text-white bg-blue-950 hover:bg-red-500 py-2 px-4 rounded-[4px] font-[500] ease-in duration-200'
//             >
//               Load More
//             </button>
//           )}
//         </div>
//       </div>

//       {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
//     </section>
//   );
// };

// export default Portfolio;

import React, { useState } from 'react';

import { X, ExternalLink } from 'lucide-react';
import portfolioData    from '../../assets/data/portfolioData';



const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const filteredData =
    filter === 'all'
      ? portfolioData
      : portfolioData.filter(item => item.category === filter);

  const openModal = (project) => {
    setActiveProject(project);
    setShowModal(true);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-gray-600">
            Showcasing my latest work and achievements
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['all', 'Web Design', 'Python'].map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map(project => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 flex items-end transition-opacity">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                    View Details <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={activeProject.imgUrl}
                alt={activeProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 bg-white rounded-full p-2"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">
                {activeProject.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {activeProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full"
              >
                Visit Live Site <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
