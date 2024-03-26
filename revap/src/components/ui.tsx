import { useState } from 'react'
//from evapotranspiration import load_data, SoilData, calculateDecimalDegrees
//from common import save_result_to_system, get_cache_file_path
//from calculations import run_scenario, deg2Rad
//from customtkinter import StringVar
//from typing import Callable, Any

//from math import fsum, log, exp, cos, pi, sin, acos, tan, sqrt
//from typing import TypedDict, Sequence, Any, cast
//from collections import defaultdict
//from datetime import datetime, time
//import openpyxl

//from common import save_temp_to_system
//from evapotranspiration import *
//from math import pi

function append_with_separator(source: string, destination: string): string {
    let transformed: string = destination;
    transformed = transformed + ";" + source;
    return transformed;
}

function stringify_iteration(ta_values: Record<string, number>, hr_values: Record<string, number>,
    vv_values: Record<string, number>, rs_values: Record<string, number>,
    pr_values: Record<string, number>, wind_velocity: number,
    saturation_slope: number, sat_steam: Record<string, number>,
    p_real: number, steam_pressure_deficit: number,
    solar_radiation: number, julian_day: number,
    relative_distance: number, solar_declination: number,
    hourly_radicion_angle: Record<string, number>,
    extraterrestrial_radiation: number, max_duration: number,
    r_so: number, radiations: Record<string, number>,
    soil_heat_flux: number, evapotranspiration: number,
    year: number, month: number, day: number, amount_of_days: number): string {

    let final_string: string = `${month}/${day}/${year}`;
    final_string = append_with_separator(amount_of_days.toString(), final_string);
    final_string = append_with_separator(ta_values['avg'].toFixed(3), final_string);
    final_string = append_with_separator(hr_values['avg'].toFixed(3), final_string);
    final_string = append_with_separator(vv_values['avg'].toFixed(3), final_string);
    final_string = append_with_separator(rs_values['avg'].toFixed(3), final_string);
    final_string = append_with_separator(pr_values['avg'].toFixed(3), final_string);
    final_string = append_with_separator(ta_values['min'].toFixed(3), final_string);
    final_string = append_with_separator(hr_values['min'].toFixed(3), final_string);
    final_string = append_with_separator(vv_values['min'].toFixed(3), final_string);
    final_string = append_with_separator(rs_values['min'].toFixed(3), final_string);
    final_string = append_with_separator(pr_values['min'].toFixed(3), final_string);
    final_string = append_with_separator(ta_values['max'].toFixed(3), final_string);
    final_string = append_with_separator(hr_values['max'].toFixed(3), final_string);
    final_string = append_with_separator(vv_values['max'].toFixed(3), final_string);
    final_string = append_with_separator(rs_values['max'].toFixed(3), final_string);
    final_string = append_with_separator(pr_values['max'].toFixed(3), final_string);
    final_string = append_with_separator(wind_velocity.toFixed(3), final_string);
    final_string = append_with_separator(sat_steam['e_t_max'].toFixed(3), final_string);
    final_string = append_with_separator(sat_steam['e_t_min'].toFixed(3), final_string);
    final_string = append_with_separator(sat_steam['avg_p'].toFixed(3), final_string);
    final_string = append_with_separator(saturation_slope.toFixed(3), final_string);
    final_string = append_with_separator(p_real.toFixed(3), final_string);
    final_string = append_with_separator(steam_pressure_deficit.toFixed(3), final_string);
    final_string = append_with_separator(solar_radiation.toFixed(3), final_string);
    final_string = append_with_separator(julian_day.toFixed(3), final_string);
    final_string = append_with_separator(relative_distance.toFixed(3), final_string);
    final_string = append_with_separator(solar_declination.toFixed(3), final_string);
    final_string = append_with_separator(hourly_radicion_angle['value_b'].toFixed(3), final_string);
    final_string = append_with_separator(hourly_radicion_angle['seccional_correction'].toFixed(3), final_string);
    final_string = append_with_separator(hourly_radicion_angle['sunset'].toFixed(3), final_string);
    final_string = append_with_separator(hourly_radicion_angle['sun_middle_point'].toFixed(3), final_string);
    final_string = append_with_separator(hourly_radicion_angle['start'].toFixed(3), final_string);
    final_string = append_with_separator(hourly_radicion_angle['end'].toFixed(3), final_string);
    final_string = append_with_separator(extraterrestrial_radiation.toFixed(3), final_string);
    final_string = append_with_separator(max_duration.toFixed(3), final_string);
    final_string = append_with_separator(r_so.toFixed(3), final_string);
    final_string = append_with_separator(radiations['short_wave'].toFixed(3), final_string);
    final_string = append_with_separator(radiations['relative'].toFixed(3), final_string);
    final_string = append_with_separator(radiations['long_wave'].toFixed(3), final_string);
    final_string = append_with_separator(radiations['net'].toFixed(3), final_string);
    final_string = append_with_separator(soil_heat_flux.toFixed(3), final_string);
    final_string = append_with_separator(evapotranspiration.toFixed(3), final_string);
    return final_string;
}

function deg2Rad(degrees: number): number {
    return degrees * Math.PI / 180.0;
}


// DONE WITH CHATGPT
interface SoilData {
    date: Date[];
    H: Date[];
    TA: number[];
    HR: number[];
    VV: number[];
    RS: number[];
    PR: number[];
}
// ** DONE WITH CHATGPT

// DONE WITH CHATGPT
type IndexDate = { [year: number]: { [month: number]: { [day: number]: number[] } } };

function index_by_date(data: Date[]): IndexDate {
    const indexDate: IndexDate = {};

    data.forEach((date, index) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // JavaScript months are zero-based
        const day = date.getDate();

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
// ** DONE WITH CHATGPT

// DONE WITH CHATGPT
function get_data_at(data: SoilData, indexes: number[]): SoilData {
    const new_data: SoilData = { date: [], H: [], TA: [], HR: [], VV: [], RS: [], PR: [] };

    indexes.forEach(index => {
        new_data.date.push(data.date[index]);
        new_data.H.push(data.H[index]);
        new_data.TA.push(data.TA[index]);
        new_data.HR.push(data.HR[index]);
        new_data.VV.push(data.VV[index]);
        new_data.RS.push(data.RS[index]);
        new_data.PR.push(data.PR[index]);
    });

    return new_data;
}
// ** DONE WITH CHATGPT

function values_for_variable(variable_data: number[]): { [key: string]: number } {
    const values: { [key: string]: number } = {
        'avg': variable_data.reduce((acc, val) => acc + val, 0) / variable_data.length,
        'min': Math.min(...variable_data),
        'max': Math.max(...variable_data)
    };
    return values;
}

interface SoilData {
    date: Date[];
    H: Date[];
    TA: number[];
    HR: number[];
    VV: number[];
    RS: number[];
    PR: number[];
}

function load_data(file: string): SoilData {
    const wb = openpyxl.load_workbook(file);
    const ws = wb['Datos'];
    const spreadsheet_data: SoilData = { date: [], H: [], TA: [], HR: [], VV: [], RS: [], PR: [] };
    if (ws) {
        ws.iter_rows({ minRow: 2 }).forEach((row: any) => {
            spreadsheet_data.date.push(row[0].value as Date);
            spreadsheet_data.H.push(row[1].value as Date);
            spreadsheet_data.TA.push(parseFloat(row[2].value as string));
            spreadsheet_data.HR.push(row[3].value as number);
            spreadsheet_data.VV.push(parseFloat(row[4].value as string));
            spreadsheet_data.RS.push(row[5].value as number);
            spreadsheet_data.PR.push(parseFloat(row[6].value as string));
        });
    }
    return spreadsheet_data;
}

function calculateDecimalDegrees(degrees: number, minutes: number, seconds: number): number {
    return degrees + (minutes / 60) + (seconds / 3600);
}

function calculate_wind_velocity(vv_avg: number, constants: { [key: string]: number }): number {
    const velocity = vv_avg * (4.87 / (Math.log((67.8 * constants.measure_height_c) - 5.42)));
    return velocity;
}

function calculate_saturate_steam(ta_max: number, ta_min: number): { [key: string]: number } {
    const e_t_max = 0.6108 * Math.exp((17.27 * ta_max) / (ta_max + 237.3));
    const e_t_min = 0.6108 * Math.exp((17.27 * ta_min) / (ta_min + 237.3));
    const avg_p = (e_t_max + e_t_min) / 2.0;
    return { 'e_t_max': e_t_max, 'e_t_min': e_t_min, 'avg_p': avg_p };
}

function calculate_saturate_slope(ta_avg: number): number {
    const slope = (4098 * (0.6108 * Math.exp((17.27 * ta_avg) / (ta_avg + 237.3)))) / Math.pow((ta_avg + 237.3), 2);
    return slope;
}

function calculate_real_steam_pressure(ta_min: number, ta_max: number, hr_min: number, hr_max: number): number {
    const first_factor = (0.6108 * Math.exp((17.27 * ta_min) / (ta_min + 237.3))) * (hr_max / 100);
    const second_factor = (0.6108 * Math.exp((17.27 * ta_max) / (ta_max + 237.3))) * (hr_min / 100);
    const real_pressure = (first_factor + second_factor) / 2.0;
    return real_pressure;
}

function calculate_steam_pressure_deficit(avg_pressure: number, real_pressure: number): number {
    const pressure_deficit = avg_pressure - real_pressure;
    return pressure_deficit;
}

function calculate_solar_radiation(rs_avg: number): number {
    const solar_radiation = rs_avg * 0.0864;
    return solar_radiation;
}

function calculate_julian_day(month: number, day: number): number {
    const julian_day = ((275 * (month / 9)) - 30 + day) - 2;
    return julian_day;
}

function calculate_relative_distance(julian_day: number): number {
    const relative_distance = 1 + (0.033 * Math.cos((2 * Math.PI * julian_day) / 365));
    return relative_distance;
}


interface SolarRadiationConstants {
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

function calculate_solar_declination(julian_day: number): number {
    return 0.409 * (Math.sin((((2 * Math.PI) * (julian_day / 365)) - 1.39)));
}

function calculate_hourly_radicion_angle(julian_day: number, solar_declination: number, constants: SolarRadiationConstants): { [key: string]: number } {
    const value_b = (2 * Math.PI * (julian_day - 81)) / 364;
    const seccional_correction = (0.1645 * Math.sin(2 * value_b)) - (0.1255 * Math.cos(value_b)) - (0.025 * Math.sin(value_b));
    const sunset = Math.acos(-Math.tan(constants.latitude_rad_c) * Math.tan(solar_declination));
    const sun_middle_point = (Math.PI / 12) * ((constants.max_point_c + 0.06667 * (constants.centre_logitude_deg_c - constants.longitude_deg_c) + seccional_correction) - 12);
    const start = sun_middle_point - (Math.PI / 24);
    const end = sun_middle_point + (Math.PI / 24);
    return { value_b, seccional_correction, sunset, sun_middle_point, start, end };
}

function calculate_extraterrestrial_radiation(constants: SolarRadiationConstants, relative_distance: number, solar_declination: number, sunset: number, sun_middle_point: number): number {
    const ra = ((24 * 60) / Math.PI) * (constants.solar_c * relative_distance) * ((sunset * Math.sin(constants.latitude_rad_c) * Math.sin(solar_declination)) + (Math.cos(constants.latitude_rad_c) * Math.cos(solar_declination) * Math.sin(sun_middle_point)));
    return ra;
}

function calculate_max_duration(sunset: number): number {
    const max_duration = (24 / Math.PI) * sunset;
    return max_duration;
}

function calculate_r_so(constants: SolarRadiationConstants, extraterrestrial_radiation: number): number {
    const r_so = (0.75 + 2 * Math.pow(10, -5) * constants.height_c) * extraterrestrial_radiation;
    return r_so;
}

function calculate_radiations(constants: SolarRadiationConstants, solar_radiation: number, r_so: number,
    ta_max: number, ta_min: number, p_real: number): { [key: string]: number } {
    const short_wave_radiation = (1 - constants.albedo_c) * solar_radiation;
    const relative_radiation = solar_radiation / r_so;
    const long_wave_radiation = constants.steffan_c * (((ta_max + 273.16) + (ta_min + 273.16)) / 2) * (0.34 - 0.14 * Math.sqrt(p_real)) * ((1.35 * relative_radiation) - 0.35);
    const net_radiation = short_wave_radiation - long_wave_radiation;
    return { short_wave: short_wave_radiation, relative: relative_radiation, long_wave: long_wave_radiation, net: net_radiation };
}

function calculate_soil_heat_flux(constants: SolarRadiationConstants, ta_avg: number, prev_ta_avg: number, amount_of_days: number): number {
    const heat_flux = constants.caloric_capacity_c * ((ta_avg - prev_ta_avg) / amount_of_days) * constants.soil_depth_c;
    return heat_flux;
}

function calculate_evapotranspiration(saturation_slope: number, net_radiation: number, soil_heat_flux: number,
    wind_velocity: number, ta_avg: number, steam_pressure_deficit: number,
    constants: SolarRadiationConstants): number {
    const numerator_1 = 0.408 * saturation_slope * (net_radiation - soil_heat_flux);
    const numerator_2 = constants.psicrometric_c * (900 / (ta_avg + 273)) * wind_velocity * (steam_pressure_deficit);
    const denominator = saturation_slope + (constants.psicrometric_c * (1 + 0.34 * wind_velocity));
    const evapotranspiration = (numerator_1 + numerator_2) / denominator;
    return evapotranspiration;
}

export default function ui() {
    const [dummySv, setDummySv]                = useState("");
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
    const [latDecimalsSv, setLatDecimalsSv]         = useState(calculateDecimalDegrees(latDegreesSv, latMinSvg, latSecondsSv));
    const [latRadsSv, setLatRadsSv]             = useState(deg2Rad(latDecimalsSv));
    const [longDegreesSv, setLongDegreesSv]         = useState(83);
    const [longMinSv, setLongMinSv]             = useState(53);
    const [longSecondsSv, setLongSecondsSv]         = useState(48);
    const [longDecimalsSv, setLongDecimalsSv]        = useState(calculateDecimalDegrees(longDegreesSv, longMinSvg, longSecondsSv));
    const [longRadsSv, setLongRadsSv]            = useState(deg2Rad(longDecimalsSv));
    const [centerLongDecimalsSv, setCenterLongDecimalsSv] = useState(90);
    const [centerLongRadsSv, setCenterLongRadsSv]     = useState(deg2Rad(centerLongDecimalsSv));
    const [startDateYearSv, setStartDateYearSv]      = useState(2019);
    const [startDateMonthSv, setStartDateMonthSv]     = useState(12);
    const [startDateDaySv, setStartDateDaySv]       = useState(1);
    const [endDateYearSv, setEndDateYearSv]        = useState(2019);
    const [endDateMonthSv, setEndDateMonthSv]       = useState(12);
    const [endDateDaySv, setEndDateDaySv]         = useState(3);

    const [spreadsheet_data, setSpreadsheetData] = useState<SoilData>({'date': [], 'H': [], 'TA': [], 'HR': [], 'VV': [], 'RS': [], 'PR': []});



    def gen_main_frame(self) -> tuple[customtkinter.CTkFrame, customtkinter.CTkFrame, setCustomtkinter]:
        main_frame = customtkinter.CTkFrame(self.TKroot)
        #customtkinter.CTkLabel(main_frame, text='Main Page').grid(row=0, column=0)
        customtkinter.CTkButton(main_frame, text='Cambiar parametros', command=self.raise_input_menu).grid(row=1, column=1)
        #main_frame.rowconfigure(0, weight=1)
        #main_frame.rowconfigure(1, weight=1)
        #main_frame.columnconfigure(0, weight=1)
        customtkinter.CTkButton(main_frame, text='Seleccionar datos', command=self.get_test_data).grid(row=2, column=1, columnspan=1)
        customtkinter.CTkButton(main_frame, text='Calcular', command=self.run_scenario_example).grid(row=3, column=1, columnspan=1)
        result_frame = customtkinter.CTkScrollableFrame(main_frame, width=800, height=500, orientation='horizontal')
        result_frame.grid(row=4, column=0, columnspan=3)
        return main_frame, result_frame

    def run_scenario_example(self) -> None:
        constants = {
            'measure_height_c': float(self.meassure_height_sv.get()),
            'latitude_rad_c': float(self.lat_rads_sv.get()),
            'max_point_c': int(self.highest_point_sv.get()),
            'centre_logitude_deg_c': float(self.center_long_decimals_sv.get()),
            'longitude_deg_c': float(self.long_decimals_sv.get()),
            'solar_c': float(self.solar_sv.get()),
            'height_c': int(self.height_sv.get()),
            'albedo_c': float(self.albedo_sv.get()),
            'steffan_c': (4.903*10**(-9))/24,
            'caloric_capacity_c': float(self.caloric_capacity_sv.get()),
            'soil_depth_c': float(self.soil_depth_sv.get()),
            'psicrometric_c': float(self.psicrometric_sv.get())
        }

        start_date: dict[str, str] = {
            'month': self.start_date_month_sv.get(),
            'day': self.start_date_day_sv.get(),
            'year': self.start_date_year_sv.get()
        }

        end_date: dict[str, str] = {
            'month': self.end_date_month_sv.get(),
            'day': self.end_date_day_sv.get(),
            'year': self.end_date_year_sv.get()
        }

        data = self.spreadsheet_data

        result = run_scenario(start_date, end_date, data, constants)
        if result:
            self.get_data_from_cache()
        else:
            self.open_popup()

    def new_input_row(self, frame: customtkinter.CTkFrame, row: int, variable: str, units: str,
                      text_var: customtkinter.StringVar, callback: Callable[[], Any] | None = None,
                      disabled: bool = False) -> None:
        ''' Returns the handle to data entry that was created for the input row '''
        customtkinter.CTkLabel(frame, text=variable, padx=10, pady=10).grid(row=row, column=0)
        if callback:
            entry = customtkinter.CTkEntry(frame, textvariable=text_var, validate="key", validatecommand=callback, width=50)
        else:
            entry = customtkinter.CTkEntry(frame, textvariable=text_var, width=50)
        if disabled:
            entry.configure(state="disabled")
        entry.grid(row=row, column=1, columnspan=1)
        customtkinter.CTkLabel(frame, text=units, padx=10, pady=10).grid(row=row, column=2)

    def new_location_input_row(self, frame: customtkinter.CTkFrame, row: int, variable: str,
                               first_sv: StringVar, second_sv: StringVar, third_sv: StringVar, 
                               fourth_sv: StringVar, fifth_sv: StringVar, 
                               callback: Callable[[], Any] | None, first_status: bool, 
                               second_status: bool, third_status: bool, fourth_status: bool, 
                               fifth_status: bool) -> None:
        ''' Returns the handle to 5 data entries that were created for the input row '''
        customtkinter.CTkLabel(frame, text=variable, padx=5, pady=10).grid(row=row, column=0)
        if callback:
            entry1 = customtkinter.CTkEntry(frame, textvariable=first_sv, validate="key", validatecommand=callback, width=100)
            entry2 = customtkinter.CTkEntry(frame, textvariable=second_sv, validate="key", validatecommand=callback, width=100)
            entry3 = customtkinter.CTkEntry(frame, textvariable=third_sv, validate="key", validatecommand=callback, width=100)
            entry4 = customtkinter.CTkEntry(frame, textvariable=fourth_sv, validate="key", validatecommand=callback, width=100)
            entry5 = customtkinter.CTkEntry(frame, textvariable=fifth_sv, validate="key", validatecommand=callback, width=100)
        else:
            entry1 = customtkinter.CTkEntry(frame, textvariable=first_sv, width=100)
            entry2 = customtkinter.CTkEntry(frame, textvariable=second_sv, width=100)
            entry3 = customtkinter.CTkEntry(frame, textvariable=third_sv, width=100)
            entry4 = customtkinter.CTkEntry(frame, textvariable=fourth_sv, width=100)
            entry5 = customtkinter.CTkEntry(frame, textvariable=fifth_sv, width=100)
        entry1.grid(row=row, column=1)
        entry2.grid(row=row, column=2)
        entry3.grid(row=row, column=3)
        entry4.grid(row=row, column=4)
        entry5.grid(row=row, column=5)
        if first_status: entry1.configure(state="disabled")
        if second_status: entry2.configure(state="disabled")
        if third_status: entry3.configure(state="disabled")
        if fourth_status: entry4.configure(state="disabled")
        if fifth_status: entry5.configure(state="disabled")

    def raise_result_menu(self) -> None:
        self.main_frame.pack()
        self.input_frame.pack_forget()

    def raise_input_menu(self) -> None:
        self.main_frame.pack_forget()
        self.input_frame.pack()

    def get_test_data(self) -> None:
        ''' Obtains data from file selected by user in the openfiledialog '''
        file = customtkinter.filedialog.askopenfilename(title='Abrir archivo con datos', 
            filetypes=[('Excel', '*.xlsx'), ('Excel macros', '*.xlsm'), ('CSV', '*.csv')])
        if not file:
            print('Empty file handle')
            return
        self.spreadsheet_data = load_data(file)

    def check_saved_data(self) -> None:
        print(self.spreadsheet_data.keys())
        for index, item in self.spreadsheet_data.items():
            print(index, item)

    def height_callback(self) -> bool:
        height = self.height_sv.get()
        if height != '' and height.isdigit():
            calculated_value = 101.3*(((293-0.0065*int(height))/293)**5.26)
            self.pressure_sv.set("%.2f" % (calculated_value))
            self.psicrometric_sv.set("%.2f" % (0.665*10**(-3)*calculated_value))
        return True

    def location_lat_callback(self) -> bool:
        lat_degrees = self.lat_degrees_sv.get()
        lat_minutes = self.lat_min_sv.get()
        lat_seconds = self.lat_seconds_sv.get()
        if lat_degrees != '' and lat_degrees.isdigit() and lat_minutes != '' and lat_minutes.isdigit() and lat_seconds != '' and lat_seconds.isdigit():
            decimal_degrees = calculateDecimalDegrees(int(lat_degrees), int(lat_minutes), int(lat_seconds))
            self.lat_decimals_sv.set("%.2f" % (decimal_degrees))
            self.lat_rads_sv.set("%.2f" % (deg2Rad(decimal_degrees)))
        return True

    def location_long_callback(self) -> bool:
        long_degrees = self.long_degrees_sv.get()
        long_minutes = self.long_min_sv.get()
        long_seconds = self.long_seconds_sv.get()
        if long_degrees != '' and long_degrees.isdigit() and long_minutes != '' and long_minutes.isdigit() and long_seconds != '' and long_seconds.isdigit():
            decimal_degrees = calculateDecimalDegrees(int(long_degrees), int(long_minutes), int(long_seconds))
            self.long_decimals_sv.set("%.2f" % (decimal_degrees))
            self.long_rads_sv.set("%.2f" % (deg2Rad(decimal_degrees)))
        return True

    def center_long_callback(self) -> bool:
        center_long_decimals: str = self.center_long_decimals_sv.get()
        if center_long_decimals != '' and center_long_decimals.isdigit():
            self.center_long_rads_sv.set("%.2f" % (deg2Rad(float(center_long_decimals))))
        return True

    def get_data_from_cache(self) -> None:
        cache_path: str | None = get_cache_file_path()
        if not cache_path:
            print('Can\'t reach cache file, it may not exist')
            return
        with open(cache_path, newline='\n', encoding='utf-8') as csvfile:
            spamreader = csv.reader(csvfile, delimiter=';', quotechar='|')
            for row_index, row in enumerate(spamreader):
                row_frame = customtkinter.CTkFrame(self.result_frame)
                for col_index in range(len(row)):
                    entry = customtkinter.CTkEntry(row_frame, textvariable=customtkinter.StringVar(value=row[col_index]), width=100)
                    entry.grid(row=row_index+2, column=col_index)
                    entry.configure(state="disabled")
                row_frame.grid(row=row_index+2, column=2)
    
    def save_results(self) -> None:
        file = customtkinter.filedialog.asksaveasfilename(title='Seleccionar archivo', 
            filetypes=[('CSV', '*.csv')])
        if not file:
            print('Empty file handle')
            return
        save_result_to_system(file)
        
    def open_popup(self) -> None:
        top = customtkinter.CTkToplevel(self.TKroot)
        top.geometry("250x150")
        top.title("Error")
        customtkinter.CTkLabel(top, text= "No se han seleccionado datos!").place(x=40,y=55)

if __name__ == '__main__':
    app: Evap = Evap()
    app.run()

}
