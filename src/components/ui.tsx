import { useState } from 'react'
import { FileUploader } from "react-drag-drop-files";
import Button from '@mui/material/Button';
import XLSX from 'xlsx'
import { Dispatch, SetStateAction } from 'react';

type IndexDate = { [year: number]: { [month: number]: { [day: number]: number[] } } };

function excelDateToJS(excelDate: number): Date {
    const excelEpoch = new Date(1899, 11, 30);
    const daysToAdd = excelDate - 0; // Subtract 1 day because Excel erroneously considers 1900 as a leap year // dont subtract!!!
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
    const totalMilliseconds = daysToAdd * millisecondsPerDay; // Calculate the number of milliseconds since Excel's epoch
    const newDate = new Date(excelEpoch.getTime() + totalMilliseconds);
    return newDate;
}

function indexByDate(data: Date[]): IndexDate {
    const indexDate: IndexDate = {};

    data.forEach((date, index) => {
        const year = date.getUTCFullYear();
        const month = date.getUTCMonth() + 1; // JavaScript months are zero-based
        const day = date.getUTCDate();

        if (!indexDate[year]) {
            indexDate[year] = {};
        }
        if (!indexDate[year][month]) {
            indexDate[year][month] = {};
        }
        if (!indexDate[year][month][day]) {
            indexDate[year][month][day] = [];
        }

        indexDate[year][month][day].push(index);
    });

    return indexDate;
}

function getDataAt(data: SoilData, indexes: number[]): SoilData {
    const new_data: SoilData = { date: [], H: [], TA: [], HR: [], VV: [], RS: [], PR: [] };

    indexes.forEach(index => {
        new_data.date.push(data.date[index]);
        new_data.H.push(data.H[index]);
        new_data.TA.push(data.TA[index]);
        new_data.HR.push(data.HR[index]);
        new_data.VV.push(data.VV[index]);
        new_data.RS.push(data.RS[index]); new_data.PR.push(data.PR[index]);
    });

    return new_data;
}

function valuesForVariable(variable_data: number[]): { [key: string]: number } {
    const values: { [key: string]: number } = {
        'avg': variable_data.reduce((acc, val) => acc + val, 0) / variable_data.length,
        'min': Math.min(...variable_data),
        'max': Math.max(...variable_data)
    };
    return values;
}

interface SoilData {
    date: Date[];
    H: number[];
    TA: number[];
    HR: number[];
    VV: number[];
    RS: number[];
    PR: number[];
}

function file_to_wb(file: any, callback: any) {
  var reader = new FileReader();
  reader.onload = function(e) {
    if (e.target)
        callback(XLSX.read(e.target.result));
  };
  reader.readAsArrayBuffer(file);
}

interface RowData {
    H: number;
    HR: number;
    PR: string;
    RS: number;
    TA: string;
    VV: string;
    date: number;
};

type TestData = RowData[];

function calculateWindVelocity(vv_avg: number, constants: SolarRadiationConstants): number {
    const velocity = vv_avg * (4.87 / (Math.log((67.8 * constants.measure_height_c) - 5.42)));
    return velocity;
}

function calculateSaturateSteam(ta_max: number, ta_min: number): { [key: string]: number } {
    const e_t_max = 0.6108 * Math.exp((17.27 * ta_max) / (ta_max + 237.3));
    const e_t_min = 0.6108 * Math.exp((17.27 * ta_min) / (ta_min + 237.3));
    const avg_p = (e_t_max + e_t_min) / 2.0;
    return { 'e_t_max': e_t_max, 'e_t_min': e_t_min, 'avg_p': avg_p };
}

function calculateSaturateSlope(ta_avg: number): number {
    const slope = (4098 * (0.6108 * Math.exp((17.27 * ta_avg) / (ta_avg + 237.3)))) / Math.pow((ta_avg + 237.3), 2);
    return slope;
}

function calculateRealSteamPressure(ta_min: number, ta_max: number, hr_min: number, hr_max: number): number {
    const first_factor = (0.6108 * Math.exp((17.27 * ta_min) / (ta_min + 237.3))) * (hr_max / 100);
    const second_factor = (0.6108 * Math.exp((17.27 * ta_max) / (ta_max + 237.3))) * (hr_min / 100);
    const real_pressure = (first_factor + second_factor) / 2.0;
    return real_pressure;
}

function calculateSteamPressureDeficit(avg_pressure: number, real_pressure: number): number {
    const pressure_deficit = avg_pressure - real_pressure;
    return pressure_deficit;
}

function calculateSolarRadiation(rs_avg: number): number {
    const solar_radiation = rs_avg * 0.0864;
    return solar_radiation;
}

function calculateJulianDay(month: number, day: number): number {
    const julian_day = ((275 * (month / 9)) - 30 + day) - 2;
    return julian_day;
}

function calculateRelativeDistance(julian_day: number): number {
    const relative_distance = 1 + (0.033 * Math.cos((2 * Math.PI * julian_day) / 365));
    return relative_distance;
}

interface SolarRadiationConstants {
    measure_height_c: number;
    latitude_rad_c: number;
    solar_c: number;
    max_point_c: number;
    centre_logitude_deg_c: number;
    longitude_deg_c: number;
    height_c: number;
    steffan_c: number;
    albedo_c: number;
    psicrometric_c: number;
    caloric_capacity_c: number;
    soil_depth_c: number;
}

function calculateSolarDeclination(julian_day: number): number {
    return 0.409 * (Math.sin((((2 * Math.PI) * (julian_day / 365)) - 1.39)));
}

function calculateHourlyRadicionAngle(julian_day: number, solar_declination: number, constants: SolarRadiationConstants): { [key: string]: number } {
    const value_b = (2 * Math.PI * (julian_day - 81)) / 364;
    const seccional_correction = (0.1645 * Math.sin(2 * value_b)) - (0.1255 * Math.cos(value_b)) - (0.025 * Math.sin(value_b));
    const sunset = Math.acos(-Math.tan(constants.latitude_rad_c) * Math.tan(solar_declination));
    const sun_middle_point = (Math.PI / 12) * ((constants.max_point_c + 0.06667 * (constants.centre_logitude_deg_c - constants.longitude_deg_c) + seccional_correction) - 12);
    const start = sun_middle_point - (Math.PI / 24);
    const end = sun_middle_point + (Math.PI / 24);
    return { value_b, seccional_correction, sunset, sun_middle_point, start, end };
}

function calculateExtraterrestrialRadiation(constants: SolarRadiationConstants, relative_distance: number, solar_declination: number, sunset: number, sun_middle_point: number): number {
    const ra = ((24 * 60) / Math.PI) * (constants.solar_c * relative_distance) * ((sunset * Math.sin(constants.latitude_rad_c) * Math.sin(solar_declination)) + (Math.cos(constants.latitude_rad_c) * Math.cos(solar_declination) * Math.sin(sun_middle_point)));
    return ra;
}

function calculateMaxDuration(sunset: number): number {
    const max_duration = (24 / Math.PI) * sunset;
    return max_duration;
}

function calculateRSo(constants: SolarRadiationConstants, extraterrestrial_radiation: number): number {
    const r_so = (0.75 + 2 * Math.pow(10, -5) * constants.height_c) * extraterrestrial_radiation;
    return r_so;
}

function calculateRadiations(constants: SolarRadiationConstants, solar_radiation: number, r_so: number,
    ta_max: number, ta_min: number, p_real: number): { [key: string]: number } {
    const short_wave_radiation = (1 - constants.albedo_c) * solar_radiation;
    const relative_radiation = solar_radiation / r_so;
    const long_wave_radiation = constants.steffan_c * (((ta_max + 273.16) + (ta_min + 273.16)) / 2) * (0.34 - 0.14 * Math.sqrt(p_real)) * ((1.35 * relative_radiation) - 0.35);
    const net_radiation = short_wave_radiation - long_wave_radiation;
    return { short_wave: short_wave_radiation, relative: relative_radiation, long_wave: long_wave_radiation, net: net_radiation };
}

function calculateSoilHeatFlux(constants: SolarRadiationConstants, ta_avg: number, prev_ta_avg: number, amount_of_days: number): number {
    const heat_flux = constants.caloric_capacity_c * ((ta_avg - prev_ta_avg) / amount_of_days) * constants.soil_depth_c;
    return heat_flux;
}

function calculateEvapotranspiration(saturation_slope: number, net_radiation: number, soil_heat_flux: number,
    wind_velocity: number, ta_avg: number, steam_pressure_deficit: number,
    constants: SolarRadiationConstants): number {
    const numerator_1 = 0.408 * saturation_slope * (net_radiation - soil_heat_flux);
    const numerator_2 = constants.psicrometric_c * (900 / (ta_avg + 273)) * wind_velocity * (steam_pressure_deficit);
    const denominator = saturation_slope + (constants.psicrometric_c * (1 + 0.34 * wind_velocity));
    const evapotranspiration = (numerator_1 + numerator_2) / denominator;
    return evapotranspiration;
}

function appendWithSeparator(source: string, destination: string): string {
    let transformed: string = destination;
    transformed = transformed + ";" + source;
    return transformed;
}

function stringifyIteration(
    taValues: Record<string, number>,
    hrValues: Record<string, number>,
    vvValues: Record<string, number>,
    rsValues: Record<string, number>,
    prValues: Record<string, number>,
    windVelocity: number,
    saturationSlope: number,
    satSteam: Record<string, number>,
    pReal: number,
    steamPressureDeficit: number,
    solarRadiation: number,
    julianDay: number,
    relativeDistance: number,
    solarDeclination: number,
    hourlyRadicionAngle: Record<string, number>,
    extraterrestrialRadiation: number,
    maxDuration: number,
    rSo: number,
    radiations: Record<string, number>,
    soilHeatFlux: number,
    evapotranspiration: number,
    year: number,
    month: number,
    day: number,
    amountOfDays: number
): string {
    let finalString: string = `${month}/${day}/${year}`;
    finalString = appendWithSeparator(String(amountOfDays), finalString);
    finalString = appendWithSeparator((taValues['avg']).toFixed(3), finalString);
    finalString = appendWithSeparator((hrValues['avg']).toFixed(3), finalString);
    finalString = appendWithSeparator((vvValues['avg']).toFixed(3), finalString);
    finalString = appendWithSeparator((rsValues['avg']).toFixed(3), finalString);
    finalString = appendWithSeparator((prValues['avg']).toFixed(3), finalString);
    finalString = appendWithSeparator((taValues['min']).toFixed(3), finalString);
    finalString = appendWithSeparator((hrValues['min']).toFixed(3), finalString);
    finalString = appendWithSeparator((vvValues['min']).toFixed(3), finalString);
    finalString = appendWithSeparator((rsValues['min']).toFixed(3), finalString);
    finalString = appendWithSeparator((prValues['min']).toFixed(3), finalString);
    finalString = appendWithSeparator((taValues['max']).toFixed(3), finalString);
    finalString = appendWithSeparator((hrValues['max']).toFixed(3), finalString);
    finalString = appendWithSeparator((vvValues['max']).toFixed(3), finalString);
    finalString = appendWithSeparator((rsValues['max']).toFixed(3), finalString);
    finalString = appendWithSeparator((prValues['max']).toFixed(3), finalString);
    finalString = appendWithSeparator(windVelocity.toFixed(3), finalString);
    finalString = appendWithSeparator((satSteam['e_t_max']).toFixed(3), finalString);
    finalString = appendWithSeparator((satSteam['e_t_min']).toFixed(3), finalString);
    finalString = appendWithSeparator((satSteam['avg_p']).toFixed(3), finalString);
    finalString = appendWithSeparator(saturationSlope.toFixed(3), finalString);
    finalString = appendWithSeparator(pReal.toFixed(3), finalString);
    finalString = appendWithSeparator(steamPressureDeficit.toFixed(3), finalString);
    finalString = appendWithSeparator(solarRadiation.toFixed(3), finalString);
    finalString = appendWithSeparator(julianDay.toFixed(3), finalString);
    finalString = appendWithSeparator(relativeDistance.toFixed(3), finalString);
    finalString = appendWithSeparator(solarDeclination.toFixed(3), finalString);
    finalString = appendWithSeparator((hourlyRadicionAngle['value_b']).toFixed(3), finalString);
    finalString = appendWithSeparator((hourlyRadicionAngle['seccional_correction']).toFixed(3), finalString);
    finalString = appendWithSeparator((hourlyRadicionAngle['sunset']).toFixed(3), finalString);
    finalString = appendWithSeparator((hourlyRadicionAngle['sun_middle_point']).toFixed(3), finalString);
    finalString = appendWithSeparator((hourlyRadicionAngle['start']).toFixed(3), finalString);
    finalString = appendWithSeparator((hourlyRadicionAngle['end']).toFixed(3), finalString);
    finalString = appendWithSeparator(extraterrestrialRadiation.toFixed(3), finalString);
    finalString = appendWithSeparator(maxDuration.toFixed(3), finalString);
    finalString = appendWithSeparator(rSo.toFixed(3), finalString);
    finalString = appendWithSeparator((radiations['short_wave']).toFixed(3), finalString);
    finalString = appendWithSeparator((radiations['relative']).toFixed(3), finalString);
    finalString = appendWithSeparator((radiations['long_wave']).toFixed(3), finalString);
    finalString = appendWithSeparator((radiations['net']).toFixed(3), finalString);
    finalString = appendWithSeparator(soilHeatFlux.toFixed(3), finalString);
    finalString = appendWithSeparator(evapotranspiration.toFixed(3), finalString);
    return finalString;
}

function runScenario(
    inputStartDate: Record<string, string>,
    inputEndDate: Record<string, string>,
    data: SoilData,
    constants: SolarRadiationConstants,
    resultsData: string[],
    setResultsData: Dispatch<SetStateAction<Array<string>>>
): boolean {
    const indexedData = indexByDate(data.date);

    // For start date
    const startDate: { year: number; month: number; day: number } = {
        year: inputStartDate.year === "" ? data.date[0].getUTCFullYear() : parseInt(inputStartDate.year),
        month: inputStartDate.month === "" ? data.date[0].getUTCMonth() + 1 : parseInt(inputStartDate.month),
        day: inputStartDate.day === "" ? data.date[0].getUTCDate() : parseInt(inputStartDate.day)
    };
    
    // For end date
    const endDate: { year: number; month: number; day: number } = {
        year: inputEndDate.year === "" ? data.date[data.date.length - 1].getUTCFullYear() : parseInt(inputEndDate.year),
        month: inputEndDate.month === "" ? data.date[data.date.length - 1].getUTCMonth() + 1 : parseInt(inputEndDate.month),
        day: inputEndDate.day === "" ? data.date[data.date.length - 1].getUTCDate() : parseInt(inputEndDate.day)
    };


    if (data.date.length <= 0) {
        console.log('No base data');
        return false;
    }

    console.log(startDate, data.date[0], endDate, data.date[data.date.length-1])
    if (
        startDate.year < data.date[0].getUTCFullYear() ||
        (startDate.month < data.date[0].getUTCFullYear()) ||
        (startDate.day < data.date[0].getUTCDate() && startDate.year === data.date[0].getUTCFullYear() && startDate.month === (data.date[0].getUTCMonth() + 1))
    ) {
        console.log('adjusting start date');
        startDate.year = data.date[0].getUTCFullYear();
        startDate.month = data.date[0].getUTCMonth() + 1;
        startDate.day = data.date[0].getUTCDate();
    }

    if (
        endDate.year > data.date[data.date.length - 1].getUTCFullYear() ||
        (endDate.month > data.date[data.date.length - 1].getUTCFullYear()) ||
        (endDate.day > data.date[data.date.length - 1].getUTCDate() && endDate.year === data.date[data.date.length - 1].getUTCFullYear() && endDate.month === (data.date[data.date.length - 1].getUTCMonth() + 1))
    ) {
        console.log('adjusting end date');
        endDate.year = data.date[data.date.length - 1].getUTCFullYear();
        endDate.month = data.date[data.date.length - 1].getUTCMonth() + 1;
        endDate.day = data.date[data.date.length - 1].getUTCDate();
    }

    const csvResults: string[] = resultsData;

    let amountOfDays = 0;
    let prevTaAvg = 0;

    for (let year = startDate.year; year <= endDate.year; year++) {
        for (let month = startDate.month; month <= endDate.month; month++) {
            for (let day = startDate.day; day <= (month == endDate.month ? endDate.day : 30); day++) {
                amountOfDays++;
                const dayData = getDataAt(data, indexedData[year][month][day]);

                const taValues = valuesForVariable(dayData.TA);
                const hrValues = valuesForVariable(dayData.HR);
                const vvValues = valuesForVariable(dayData.VV);
                const rsValues = valuesForVariable(dayData.RS);
                const prValues = valuesForVariable(dayData.PR); // Never used for calculations

                const windVelocity = calculateWindVelocity(vvValues.avg, constants);
                const satSteam = calculateSaturateSteam(taValues.max, taValues.min);
                const saturationSlope = calculateSaturateSlope(taValues.avg);
                const pReal = calculateRealSteamPressure(taValues.min, taValues.max, hrValues.min, hrValues.max);
                const steamPressureDeficit = calculateSteamPressureDeficit(satSteam.avg_p, pReal);
                const solarRadiation = calculateSolarRadiation(rsValues.avg);
                const julianDay = calculateJulianDay(month, day);
                const relativeDistance = calculateRelativeDistance(julianDay);
                const solarDeclination = calculateSolarDeclination(julianDay);
                const hourlyRadicionAngle = calculateHourlyRadicionAngle(julianDay, solarDeclination, constants);
                const extraterrestrialRadiation = calculateExtraterrestrialRadiation(constants, relativeDistance, solarDeclination, hourlyRadicionAngle.sunset, hourlyRadicionAngle.sun_middle_point);
                const maxDuration = calculateMaxDuration(hourlyRadicionAngle.sunset); // Never used for calculations
                const rSo = calculateRSo(constants, extraterrestrialRadiation); 
                const radiations = calculateRadiations(constants, solarRadiation, rSo, taValues.max, taValues.min, pReal);
                const soilHeatFlux = calculateSoilHeatFlux(constants, taValues.avg, prevTaAvg, amountOfDays);
                const evapotranspiration = calculateEvapotranspiration(saturationSlope, radiations.net, soilHeatFlux, windVelocity, taValues.avg, steamPressureDeficit, constants);

                csvResults.push(stringifyIteration(taValues, hrValues, vvValues, rsValues, prValues, windVelocity, saturationSlope, satSteam, pReal, steamPressureDeficit, solarRadiation, julianDay, relativeDistance, solarDeclination, hourlyRadicionAngle, extraterrestrialRadiation, maxDuration, rSo, radiations, soilHeatFlux, evapotranspiration, year, month, day, amountOfDays));

                prevTaAvg = taValues.avg;
            }
        }
    }
    setResultsData(csvResults);
    return true;
}

interface UIProps {
    meassureHeightSv: number;
    latRadsSv: number;
    highestPointSv: number;
    centerLongDecimalsSv: number;
    longDecimalsSv: number;
    solarSv: number;
    heightSv: number;
    albedoSv: number;
    caloricCapacitySv: number;
    soilDepthSv: number;
    startDateMonthSv: number;
    startDateDaySv: number;
    startDateYearSv: number;
    endDateMonthSv: number;
    endDateDaySv: number;
    endDateYearSv: number;
    psicrometricSv: number;
    resultsData: string[];
    setResultsData: Dispatch<SetStateAction<Array<string>>>;
}
 
export default function UI( {meassureHeightSv, latRadsSv, highestPointSv, centerLongDecimalsSv, longDecimalsSv, solarSv, heightSv, albedoSv, caloricCapacitySv, soilDepthSv, startDateMonthSv, startDateDaySv, startDateYearSv, endDateMonthSv, endDateDaySv, endDateYearSv, psicrometricSv, resultsData, setResultsData}: Readonly<UIProps> ) {
    const [spreadsheetData, setSpreadsheetData] = useState<SoilData>({'date': [], 'H': [], 'TA': [], 'HR': [], 'VV': [], 'RS': [], 'PR': []});
    const [file, setFile] = useState(null);

    const fileTypes = ["XLSX"];

    const handleChange = (file:any) => {
        console.log(file);
        setFile(file);
    };

    function load_data(wb: XLSX.WorkBook): void {
        let spreadsheet_data: SoilData = { date: [], H: [], TA: [], HR: [], VV: [], RS: [], PR: [] };
        let ws = wb.Sheets[wb.SheetNames[0]];
        let data: TestData = XLSX.utils.sheet_to_json(ws);
        if (data) {
            data.forEach((row) => {
                if (excelDateToJS(row.date).getUTCMonth() < 12) {
                    console.log(excelDateToJS(row.date).toUTCString(), row.date);
                }
                spreadsheet_data.date.push(excelDateToJS(row.date));
                spreadsheet_data.H.push(row.H);
                spreadsheet_data.TA.push(parseFloat(row.TA));
                spreadsheet_data.HR.push(row.HR as number);
                spreadsheet_data.VV.push(parseFloat(row.VV as string));
                spreadsheet_data.RS.push(row.RS as number);
                spreadsheet_data.PR.push(parseFloat(row.PR as string));
            });
        }
        setSpreadsheetData(spreadsheet_data);
    }

    function runScenarioExample(): void {
        const constants: SolarRadiationConstants = {
            measure_height_c: meassureHeightSv,
            latitude_rad_c: latRadsSv,
            max_point_c: highestPointSv,
            centre_logitude_deg_c: centerLongDecimalsSv,
            longitude_deg_c: longDecimalsSv,
            solar_c: solarSv,
            height_c: heightSv,
            albedo_c: albedoSv,
            steffan_c: (4.903 * Math.pow(10, -9)) / 24,
            caloric_capacity_c: caloricCapacitySv,
            soil_depth_c: soilDepthSv,
            psicrometric_c: psicrometricSv
        };

        const start_date: Record<string, string> = {
            month: String(startDateMonthSv),
            day: String(startDateDaySv),
            year: String(startDateYearSv)
        };

        const end_date: Record<string, string> = {
            month: String(endDateMonthSv),
            day: String(endDateDaySv),
            year: String(endDateYearSv)
        };
        runScenario(start_date, end_date, spreadsheetData, constants, resultsData, setResultsData);
    }

    return(
        <>
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
            <Button onClick={() => file_to_wb(file, load_data)}>Process File</Button>
            <Button onClick={() => console.log(spreadsheetData)}>Print</Button>
            <Button onClick={() => runScenarioExample()}>Calculate</Button>
            <Button onClick={() => {console.log(resultsData)}}>Results</Button>
        </>
    )
}
