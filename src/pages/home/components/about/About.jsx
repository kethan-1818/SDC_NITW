import "./about.css";
import Title from "../../../../components/title/title";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './about.css';

// Import local images
import image1 from '../../../events/images/tech_memers2.png';
import image2 from '../../../events/images/codemaze.png';
import image3 from '../../../events/images/aiverse2.png';
import image4 from '../../../events/images/apectf.png';
import image5 from '../../../events/images/dbms.png';
import image6 from '../../../events/images/fac_ad_sdc.png';

function About() {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="slider-container">
      <AwesomeSlider>
        {images.map((src, index) => (
          <div key={index} data-src={src} />
        ))}
      </AwesomeSlider>
    </div>
  );
}

export default About;
