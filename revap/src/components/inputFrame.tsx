import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';

interface CellProps {
    units: string;
}

function Cell( {units}: Readonly<CellProps> ) {
    return (<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <OutlinedInput
        id="outlined-adornment-weight"
        endAdornment={<InputAdornment position="end">{units}</InputAdornment>}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
            'aria-label': 'weight',
        }}
        />
    </FormControl>);
}

function InputRow() {

    return(
        <div>
            <Cell units='msnm' />
        </div>
    )
}

export default function InputFrame() {

    return(
        <>
        <Cell units='hh' />
        <Cell units='pp' />

    #customtkinter.CTkLabel(input_frame, text='Input Page').grid(row=2, column=0, columnspan=2)
    left_localization_data = customtkinter.CTkFrame(input_frame)
    self.new_input_row(left_localization_data, 1, 'Altura', 'msnm', self.height_sv, callback=self.height_callback)
    self.new_input_row(left_localization_data, 2, 'Albedo', '-', self.albedo_sv)
    self.new_input_row(left_localization_data, 3, 'Constante Solar', 'MJ/m^2 min', self.solar_sv)
    self.new_input_row(left_localization_data, 4, 'Altura de medición', 'm', self.meassure_height_sv)
    left_localization_data.grid(row=1, column=0, sticky='nswe')

    right_localization_data = customtkinter.CTkFrame(input_frame)
    self.new_input_row(right_localization_data, 1, 't=punto máximo', '-', self.highest_point_sv)
    self.new_input_row(right_localization_data, 2, 'Capacidad calorífica', 'MJ m-3 °C-1', self.caloric_capacity_sv)
    self.new_input_row(right_localization_data, 3, 'Δz=profundida del suelo', 'm', self.soil_depth_sv)
    right_localization_data.grid(row=1, column=1, sticky='nswe')

    # Values defined from other values
    customtkinter.CTkLabel(input_frame, text='Valores calculados').grid(row=2, column=0, columnspan=1, sticky='w')

    calculated_data = customtkinter.CTkFrame(input_frame)
    self.new_input_row(calculated_data, 0, 'Presión Atmosférica', 'kPa', self.pressure_sv, disabled=True)
    self.new_input_row(calculated_data, 1, 'Constante psicrométrica (ϒ)', 'kPa /°C', self.psicrometric_sv, disabled=True)
    calculated_data.grid(row=3, column=0, sticky='nswe')

    # Values related to location
    customtkinter.CTkLabel(input_frame, text='Ubicación').grid(row=4, column=0, columnspan=1)
    location_data = customtkinter.CTkFrame(input_frame, width=800, height=150)
    customtkinter.CTkLabel(location_data, text='Grados',            padx=10, pady=10).grid(row=0, column=1)
    customtkinter.CTkLabel(location_data, text='Minutos',           padx=10, pady=10).grid(row=0, column=2)
    customtkinter.CTkLabel(location_data, text='Segundos',          padx=10, pady=10).grid(row=0, column=3)
    customtkinter.CTkLabel(location_data, text='Grados decimales',  padx=0, pady=10).grid(row=0, column=4)
    customtkinter.CTkLabel(location_data, text='Radianes',          padx=10, pady=10).grid(row=0, column=5)

    self.new_location_input_row(location_data, 1, 'Latitud (φ)', self.lat_degrees_sv, self.lat_min_sv, self.lat_seconds_sv,
                                self.lat_decimals_sv, self.lat_rads_sv, self.location_lat_callback, False, False, False,
                                True, True)
    self.new_location_input_row(location_data, 2, 'Longitud (Lm)', self.long_degrees_sv, self.long_min_sv, self.long_seconds_sv,
                                self.long_decimals_sv, self.long_rads_sv, self.location_long_callback, False, False, False,
                                True, True)
    self.new_location_input_row(location_data, 3, 'Longitud centro (Lz)', self.dummy_sv, self.dummy_sv, self.dummy_sv,
                                self.center_long_decimals_sv, self.center_long_rads_sv,
                                self.center_long_callback, True, True, True,
                                False, True)
    location_data.grid(row=5, column=0, columnspan=2, sticky='nswe')

    # Date data frame
    date_data = customtkinter.CTkFrame(input_frame)
    customtkinter.CTkLabel(date_data, text="Día", padx=10, pady=10).grid(row=0, column=1)
    customtkinter.CTkLabel(date_data, text="Mes", padx=10, pady=10).grid(row=0, column=2)
    customtkinter.CTkLabel(date_data, text="Año", padx=10, pady=10).grid(row=0, column=3)
    customtkinter.CTkLabel(date_data, text="Inicio", padx=10, pady=10).grid(row=1, column=0)
    customtkinter.CTkEntry(date_data, textvariable=self.start_date_day_sv, width=50).grid(row=1, column=1, columnspan=1)
    customtkinter.CTkEntry(date_data, textvariable=self.start_date_month_sv, width=50).grid(row=1, column=2, columnspan=1)
    customtkinter.CTkEntry(date_data, textvariable=self.start_date_year_sv, width=50).grid(row=1, column=3, columnspan=1)
    customtkinter.CTkLabel(date_data, text="Fin", padx=10, pady=10).grid(row=2, column=0)
    customtkinter.CTkEntry(date_data, textvariable=self.end_date_day_sv, width=50).grid(row=2, column=1, columnspan=1)
    customtkinter.CTkEntry(date_data, textvariable=self.end_date_month_sv, width=50).grid(row=2, column=2, columnspan=1)
    customtkinter.CTkEntry(date_data, textvariable=self.end_date_year_sv, width=50).grid(row=2, column=3, columnspan=1)
    date_data.grid(row=3, column=1, sticky='nswe')

    customtkinter.CTkButton(input_frame, text='Ir a calculos', command=self.raise_result_menu).grid(row=6, column=0, sticky='nswe')
    customtkinter.CTkButton(input_frame, text='Guardar resultados', command=self.save_results).grid(row=6, column=1, sticky='nswe')


        </>
    )

}
