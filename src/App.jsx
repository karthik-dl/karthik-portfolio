// import { useEffect } from 'react';
// import Aos from 'aos';
// import 'aos/dist/aos.css'
// import "./App.css";
// // import "remisicon/fonts/remixicon.css";
// // import tailwindConfig from '../tailwind.config';

// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
// import Hero from './components/UI/Hero';
// import Services from './components/UI/Services';
// import Portfolio from './components/UI/Portfolio';
// import Contact from './components/UI/Contact';

// function App() {
//   useEffect(()=>{
//     Aos.init({
//       duration:1500,
//       once:true,
//       debug:true,
//     });
//   },[])

//   return (
//     <>
//       <Header/>
//       <main>
//         <Hero/>
//         <Services/>
//         <Portfolio/>
//         <Contact/>
//         <Footer/>
//       </main>
      
//     </>
//    )
// }

// export default App

import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/UI/Hero';
import Services from './components/UI/Services';
import Portfolio from './components/UI/Portfolio';
import Contact from './components/UI/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'services', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
