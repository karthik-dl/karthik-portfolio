import React from 'react';
const Contact = () => {
  return <section id="contact" className='pb-16'>
    <div className="container">
      <h2 className='text caret-blue-900 font-[700] text-[1.5rem] mb-8'>Get in Touch</h2>
      
      <div className='flex  items-center'>
        <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
        <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089970882!2d77.46612549485897!3d12.953945613736225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1749708884091!5m2!1sen!2sin" 
         className='border-0 w-full h-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] flex items-center justify-center bg-indigo-100 px-4 lg:px-8 py-8'>
        <form className='w-full flex flex-col gap-y-5 ml-2'>
          <input
            type='text'
            placeholder='Enter your Name'
            className='w-full p-3 focus:outline-none rounded-[5px] bg-white text-gray-900'
            name='name'
          />

          <input
            type='email'
            placeholder='Enter your Email'
            className='w-full p-3 focus:outline-none rounded-[5px] bg-white text-gray-900'
            name='email'
          />

          <input
            type='text'
            placeholder='Subject'
            className='w-full p-3 focus:outline-none rounded-[5px] bg-white text-gray-900'
          />
          <textarea
            type='text'
            rows={3}
            placeholder='Write your message'
            className='w-full p-3 focus:outline-none rounded-[5px] bg-white text-gray-900'
          />
          <button type='submit' className='w-full p-3 bg-blue-600 hover:bg-blue-400'>Send message</button>
        </form>

        </div>
      </div>
    </div>
  </section>
}

export default Contact