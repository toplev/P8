import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import banner1 from '../images/banner1.png';
import banner2 from '../images/banner2.png';
import banner3 from '../images/banner3.png';

import '../styles/Banner.css';

function Banner() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/about') {
      console.log('About page is open');
    } else if (location.pathname === '/home') {
      console.log('Home page is open');
    }
  }, [location.pathname]);

  const bannerImage = location.pathname === '/about' ? banner2 : banner1;
  const Text = location.pathname === '/about' ? '' : 'Chez vous, partout et ailleurs';

  return (
    <header>
      <img src={banner3} alt='Logo Kasa' className={location.pathname === '/about' ? 'Banner3' : 'Banner4'} />
      <div className={location.pathname === '/about' ? 'Banner2' : 'Banner'}>
        <img src={bannerImage} alt='Logo Kasa' className={location.pathname === '/about' ? 'img2' : 'img'} />
		<p className='text'>{Text}</p>
      </div>
    </header>
  );
}

export default Banner;

