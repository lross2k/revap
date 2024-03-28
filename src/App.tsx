import './App.css';
import InputFrame from './components/inputFrame';
import UI from './components/ui';
import { useState } from 'react';

function calculateDecimalDegrees(degrees: number, minutes: number, seconds: number): number {
    return degrees + (minutes / 60) + (seconds / 3600);
}

function deg2Rad(degrees: number): number {
    return degrees * Math.PI / 180.0;
}

function App() {
    const [heightSv, setHeightSv]               = useState(2129);
    const [albedoSv, setAlbedoSv]               = useState(0.23);
    const [solarSv, setSolarSv]                = useState(0.082);
    const [meassureHeightSv, setMeassureHeightSv]      = useState(6.5);
    const [pressureSv, setPressureSv]             = useState(78.4);
    const [psicrometricSv, setPsicrometricSv]         = useState(0.05);
    const [soilDepthSv, setSoilDepthSv]           = useState(0.1);
    const [caloricCapacitySv, setCaloricCapacitySv]     = useState(2.1);
    const [highestPointSv, setHighestPointSv]        = useState(12);
    const [latDegreesSv, setLatDegreesSv]          = useState(9);
    const [latMinSv, setLatMinSv]              = useState(55);
    const [latSecondsSv, setLatSecondsSv]          = useState(26);
    const [latDecimalsSv, setLatDecimalsSv]         = useState(calculateDecimalDegrees(latDegreesSv, latMinSv, latSecondsSv));
    const [latRadsSv, setLatRadsSv]             = useState(deg2Rad(latDecimalsSv));
    const [longDegreesSv, setLongDegreesSv]         = useState(83);
    const [longMinSv, setLongMinSv]             = useState(53);
    const [longSecondsSv, setLongSecondsSv]         = useState(48);
    const [longDecimalsSv, setLongDecimalsSv]        = useState(calculateDecimalDegrees(longDegreesSv, longMinSv, longSecondsSv));
    const [longRadsSv, setLongRadsSv]            = useState(deg2Rad(longDecimalsSv));
    const [centerLongDecimalsSv, setCenterLongDecimalsSv] = useState(90);
    const [centerLongRadsSv, setCenterLongRadsSv]     = useState(deg2Rad(centerLongDecimalsSv));
    const [startDateYearSv, setStartDateYearSv]      = useState(2019);
    const [startDateMonthSv, setStartDateMonthSv]     = useState(12);
    const [startDateDaySv, setStartDateDaySv]       = useState(1);
    const [endDateYearSv, setEndDateYearSv]        = useState(2019);
    const [endDateMonthSv, setEndDateMonthSv]       = useState(12);
    const [endDateDaySv, setEndDateDaySv]         = useState(3);

  return (
    <div className="App">
      <header className="App-header">
          <InputFrame 
            latDegreesSv={latDegreesSv} 
            setLatDegreesSv={setLatDegreesSv} 
            latMinSv={latMinSv} 
            setLatMinSv={setLatMinSv} 
            latSecondsSv={latSecondsSv} 
            setLatSecondsSv={setLatSecondsSv} 
            latRadsSv={latRadsSv} 
            setLatRadsSv={setLatRadsSv} 
            setLatDecimalsSv={setLatDecimalsSv} 
            latDecimalsSv={latDecimalsSv} 
            longDegreesSv={longDegreesSv} 
            setLongDegreesSv={setLongDegreesSv} 
            longMinSv={longMinSv} 
            setLongMinSv={setLongMinSv} 
            longSecondsSv={longSecondsSv} 
            setLongSecondsSv={setLongSecondsSv} 
            longRadsSv={longRadsSv} 
            setLongRadsSv={setLongRadsSv} 
            setLongDecimalsSv={setLongDecimalsSv} 
            longDecimalsSv={longDecimalsSv} 
            centerLongRadsSv={centerLongRadsSv} 
            setCenterLongRadsSv={setCenterLongRadsSv} 
            centerLongDecimalsSv={centerLongDecimalsSv} 
            setCenterLongDecimalsSv={setCenterLongDecimalsSv} 
          />
          <UI 
            meassureHeightSv={meassureHeightSv} 
            latRadsSv={latRadsSv} 
            highestPointSv={highestPointSv} 
            centerLongDecimalsSv={centerLongDecimalsSv} 
            longDecimalsSv={longDecimalsSv} 
            solarSv={solarSv} 
            heightSv={heightSv} 
            albedoSv={albedoSv} 
            caloricCapacitySv={caloricCapacitySv} 
            soilDepthSv={soilDepthSv} 
            psicrometricSv={psicrometricSv} 
            startDateMonthSv={startDateMonthSv} 
            startDateDaySv={startDateDaySv} 
            startDateYearSv={startDateYearSv} 
            endDateMonthSv={endDateMonthSv} 
            endDateDaySv={endDateDaySv} 
            endDateYearSv={endDateYearSv}
          />
      </header>
    </div>
  );
}

export default App;
