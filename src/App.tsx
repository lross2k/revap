import './App.css';
import InputFrame from './components/inputFrame';
import UI from './components/ui';
import { useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';

function calculateDecimalDegrees(degrees: number, minutes: number, seconds: number): number {
  return degrees + (minutes / 60) + (seconds / 3600);
}

function deg2Rad(degrees: number): number {
  return degrees * Math.PI / 180.0;
}

function App() {
  const [heightSv, setHeightSv]                          = useState(2129);
  const [albedoSv, setAlbedoSv]                          = useState(0.23);
  const [solarSv, setSolarSv]                            = useState(0.082);
  const [meassureHeightSv, setMeassureHeightSv]          = useState(6.5);
  const [pressureSv, setPressureSv]                      = useState(101.3*(((293-0.0065*Math.trunc(heightSv))/293)**5.26));
  const [psicrometricSv, setPsicrometricSv]              = useState(0.05);
  const [soilDepthSv, setSoilDepthSv]                    = useState(0.1);
  const [caloricCapacitySv, setCaloricCapacitySv]        = useState(2.1);
  const [highestPointSv, setHighestPointSv]              = useState(12);
  const [latDegreesSv, setLatDegreesSv]                  = useState(9);
  const [latMinSv, setLatMinSv]                          = useState(55);
  const [latSecondsSv, setLatSecondsSv]                  = useState(26);
  const [latDecimalsSv, setLatDecimalsSv]                = useState(calculateDecimalDegrees(latDegreesSv, latMinSv, latSecondsSv));
  const [latRadsSv, setLatRadsSv]                        = useState(deg2Rad(latDecimalsSv));
  const [longDegreesSv, setLongDegreesSv]                = useState(83);
  const [longMinSv, setLongMinSv]                        = useState(53);
  const [longSecondsSv, setLongSecondsSv]                = useState(48);
  const [longDecimalsSv, setLongDecimalsSv]              = useState(calculateDecimalDegrees(longDegreesSv, longMinSv, longSecondsSv));
  const [longRadsSv, setLongRadsSv]                      = useState(deg2Rad(longDecimalsSv));
  const [centerLongDecimalsSv, setCenterLongDecimalsSv]  = useState(90);
  const [centerLongRadsSv, setCenterLongRadsSv]          = useState(deg2Rad(centerLongDecimalsSv));
  const [startDate, setStartDate]                        = useState<Dayjs>(dayjs('2022-04-17'));
  const [endDate, setEndDate]                            = useState<Dayjs>(dayjs('2022-04-17'));
  const [startDateYearSv, setStartDateYearSv]            = useState(startDate?.year());
  const [startDateMonthSv, setStartDateMonthSv]          = useState(startDate?.month());
  const [startDateDaySv, setStartDateDaySv]              = useState(startDate?.day());
  const [endDateYearSv, setEndDateYearSv]                = useState(endDate?.year());
  const [endDateMonthSv, setEndDateMonthSv]              = useState(endDate?.month());
  const [endDateDaySv, setEndDateDaySv]                  = useState(endDate?.day());

  useEffect(() => {
    if (startDate) {
      setStartDateDaySv(startDate.day());
      setStartDateMonthSv(startDate.month());
      setStartDateYearSv(startDate.year());
    }
  }, [startDate]);

  useEffect(() => {
    if (endDate) {
      setEndDateDaySv(endDate.day());
      setEndDateMonthSv(endDate.month());
      setEndDateYearSv(endDate.year());
    }
  }, [endDate]);

  useEffect(() => {
    const calculated_value = 101.3*(Math.pow((293-0.0065*Math.trunc(heightSv))/293,5.26));
    setPressureSv(calculated_value);
    setPsicrometricSv(0.665*Math.pow(10,-3)*calculated_value);
  }, [heightSv]);

  useEffect(() => {
    const decimal_degrees = calculateDecimalDegrees(Math.trunc(latDegreesSv), Math.trunc(latMinSv), Math.trunc(latSecondsSv));
    setLatDecimalsSv(decimal_degrees);
    setLatRadsSv(deg2Rad(decimal_degrees));
  }, [latDegreesSv, latMinSv, latSecondsSv]);

  useEffect(() => {
    const decimal_degrees = calculateDecimalDegrees(Math.trunc(longDegreesSv), Math.trunc(longMinSv), Math.trunc(longSecondsSv));
    setLongDecimalsSv(decimal_degrees);
    setLongRadsSv(deg2Rad(decimal_degrees));
  }, [longDegreesSv, longMinSv, longSecondsSv]);

  useEffect(() => {
    setCenterLongRadsSv(deg2Rad(centerLongDecimalsSv));
  }, [centerLongDecimalsSv]);

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
            heightSv={heightSv}
            setHeightSv={setHeightSv}
            albedoSv={albedoSv}
            setAlbedoSv={setAlbedoSv}
            solarSv={solarSv}
            setSolarSv={setSolarSv}
            meassureHeightSv={meassureHeightSv}
            setMeassureHeightSv={setMeassureHeightSv}
            highestPointSv={highestPointSv}
            setHighestPointSv={setHighestPointSv}
            caloricCapacitySv={caloricCapacitySv}
            setCaloricCapacitySv={setCaloricCapacitySv}
            soilDepthSv={soilDepthSv}
            setSoilDepthSv={setSoilDepthSv}
            pressureSv={pressureSv}
            psicrometricSv={psicrometricSv}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
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
