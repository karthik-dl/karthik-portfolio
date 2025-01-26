import { useEffect } from 'react';
import Aos from 'aos';

// import tailwindConfig from '../tailwind.config';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(()=>{
    Aos.init();
  })

  return (
    <>
      <Header/>
      <Footer/>
    </>
   )
}

export default App
