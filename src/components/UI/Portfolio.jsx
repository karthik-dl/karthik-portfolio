
import React, { useEffect, useState } from 'react';
import data from "../../assets/data/portfolioData";
import Modal from './Modal';

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMoreHandler = () => {
    setNextItems(prev => prev + 3);
  };

  const showModalHandler = id => {
    setShowModal(true);
    setActiveID(id);
  };

  useEffect(() => {
    if (selectTab === 'all') {
      setPortfolios(data);
    }

    if (selectTab === 'Web Design') {
      const filteredData = data.filter(item => item.category === 'Web Design');
      setPortfolios(filteredData);
    }

    if (selectTab.toLowerCase() === 'python') {
      const filteredData = data.filter(item => item.category === 'Python');
      setPortfolios(filteredData);
    }
  }, [selectTab]);

  return (
    <section id='portfolio'>
      <div className='container p-10 my-16'>
        <div className='flex items-center justify-between flex-wrap p-6 rounded-lg'>
          <div className='mb-7 sm:mb-0'>
            <h3 className='text-indigo-950 text-[2rem] font-[700]'>My recent projects</h3>
          </div>

          <div className='flex gap-8'>
            <button
              onClick={() => setSelectTab('all')}
              className='text-blue-400 border-2 border-solid border-indigo-950  hover:bg-indigo-950 ease-in duration-300  py-2 px-4 rounded-[8px] w-30'
            >
              All
            </button>

            <button
              onClick={() => setSelectTab('Web Design')}
              className='text-blue-400 border-2 border-solid border-indigo-950  hover:bg-indigo-950 ease-in duration-300 py-2 px-2 rounded-[8px]  w-30'
            >
              Web Design
            </button>

            <button
              onClick={() => setSelectTab('Python')}
              className='text-blue-400 border-2 border-solid border-indigo-950  hover:bg-indigo-950 ease-in duration-300 py-2 px-4 rounded-[8px] w-30'
            >
              Python
            </button>
          </div>

          <div className='flex items-center gap-4 flex-wrap mt-12'>
            {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
              <div
                key={portfolio.id}
                className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'
              >
                <figure>
                  <img className='rounded-[8px]' src={portfolio.imgUrl} alt='' />
                </figure>

                <div className='w-full h-full bg-indigo-950 bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                  <div className='w-full h-full flex items-center justify-center'>
                    <button
                      onClick={() => showModalHandler(portfolio.id)}
                      className='text-white bg-blue-950 hover:bg-red-500 py-2 px-4 rounded-[4px] font-[500] ease-in duration-200'
                    >
                      See Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='text-center mt-20'>
          {nextItems < portfolios.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className='text-white bg-blue-950 hover:bg-red-500 py-2 px-4 rounded-[4px] font-[500] ease-in duration-200'
            >
              Load More
            </button>
          )}
        </div>
      </div>

      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  );
};

export default Portfolio;
