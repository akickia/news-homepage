import { useState, useEffect } from 'react';
import web3Mobile from '../assets copy/images/web3_mobile.jpg';
import web3Desktop from '../assets copy/images/web3_desktop.jpg';
import '../style/hero.css';

export default function HeroSection() {
  const [isMobile, setMobile] = useState(window.innerWidth < 650);

  const updateMedia = () => {
    setMobile(window.innerWidth < 650);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <section className='hero'>
      {isMobile ? <img src={web3Mobile} /> : <img src={web3Desktop} />}
      <div className='hero_content'>
        <h1 className='hero_title'>The Bright Future of Web 3.0?</h1>
        <div className='hero_text'>
          <p>
            We dive into the next evolution of the web that claims to put the power of the platforms
            back into the hands of the people. But is it really fulfilling its promise?
          </p>
          <button>Read More</button>
        </div>
      </div>
    </section>
  );
}
