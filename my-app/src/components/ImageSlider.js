import '../styles/ImageSlider.css';
import { aptoList } from '../datas/aptoList';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import vectorleft from '../images/vectorleft.png';
import vectorright from '../images/vectorright.png';

function Slider({ apto }) {
    const idinlist = useParams('id').id;
    const idnow = aptoList.filter((data) => data.id === idinlist);
    const [current, setCurrent] = useState(0);
    const length = idnow[0].pictures.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    return (
      <div className="slider">
        {idnow.map((apto) => (
          <div key={apto.id} className="apto-list">
            <img
              src={vectorright}
              alt="Kasa Logo"
              className="right-arrow"
              onClick={prevSlide}
            />
            <img
              src={vectorleft}
              alt="Kasa Logo"
              className="left-arrow"
              onClick={nextSlide}
            />
            <img
              src={apto.pictures[current]}
              alt="Apartment"
              className="image"
            />
          </div>
        ))}
      </div>
    );
  }
  

export default Slider;
