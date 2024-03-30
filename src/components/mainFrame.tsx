/*
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
*/

export default function mainFrame() {
    return(
        <>
        customtkinter.CTkButton(main_frame, text='Calcular', command=self.run_scenario_example).grid(row=3, column=1, columnspan=1)
        </>
    );
}
