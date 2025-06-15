import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import "./App.css";
// import "remisicon/fonts/remixicon.css";
// import tailwindConfig from '../tailwind.config';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/UI/Hero';
import Services from './components/UI/Services';
import Portfolio from './components/UI/Portfolio';
import Contact from './components/UI/Contact';

function App() {
  useEffect(()=>{
    Aos.init({
      duration:1500,
      once:true,
      debug:true,
    });
  },[])

  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Services/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </main>
      
    </>
   )
}

export default App
