import ReactSlider from "react-slider";
import './Thermometer.css';
import {useClimateContext} from "../../context/ClimateContext.js"
import { useEffect, useState } from "react";

function Thermometer() {
  const {temp, setTemp} = useClimateContext(); //actual temperature
  const [goalTemp, setGoalTemp] = useState(temp); //goal temperature
  useEffect(() => {
    let x;
    if (goalTemp > temp) {
      x = 1
    } else if (goalTemp < temp) {
      x =  -1
    } else {
      x = 0
    }
    setTimeout(()=> setTemp(temp => temp + x), 1000)
    console.log(temp)
  }, [temp])

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temp}°F</div>
      <ReactSlider
        value={goalTemp} //value in slider is actual temp
        onAfterChange={setGoalTemp} //user is setting the goal temp
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;