import './ClimateStats.css';
import { useClimateContext } from '../../context/ClimateContext';

function ClimateStats() {
  const {temp, humidity} = useClimateContext();

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temp}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;