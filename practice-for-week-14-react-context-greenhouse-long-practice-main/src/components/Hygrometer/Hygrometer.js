import ReactSlider from "react-slider";
import "./Hygrometer.css";
import { useClimateContext } from "../../context/ClimateContext";
import { useEffect, useState } from "react";

function Hygrometer() {

  const {humidity, setHumidity} = useClimateContext();
  const [goalHumidity, setGoalHumidity] = useState(humidity);

  useEffect(() => {
    let x;
    if (goalHumidity > humidity) x = 1
    else if (goalHumidity < humidity) x =  -1
    else x = 0
    setTimeout(()=> setHumidity(humidity => humidity + x), 2000);
  }, [goalHumidity, humidity])

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={goalHumidity}
        onAfterChange={setGoalHumidity}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
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

export default Hygrometer;