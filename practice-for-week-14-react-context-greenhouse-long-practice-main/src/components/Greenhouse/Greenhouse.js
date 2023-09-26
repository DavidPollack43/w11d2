import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { useTheme } from '../../context/ThemeContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
  const {themeName, setThemeName} = useTheme();

  let imageName = themeName === "day" ? dayImage : nightImage
  return (
    <section>
      <img  className='greenhouse-img'
            src={imageName} //`${themeName}Image`
            alt='greenhouse' 
      />
      {console.log(`${themeName}Image`)}
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;