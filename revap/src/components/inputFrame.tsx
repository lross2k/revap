import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import { InputLabel } from '@mui/material';

interface CellProps {
    label?: string;
    units?: string;
    disabled?: boolean;
    value?: string;
}

function Cell( {label = '', units = '', value = '', disabled = false}: Readonly<CellProps> ) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <p>{label}</p>
            <FormControl disabled={disabled} sx={{ m: 1, width: '15ch' }} style={{color: 'white'}} variant="outlined">
                <OutlinedInput
                id="outlined-adornment-weight"
                defaultValue={value}
                endAdornment={<InputAdornment position="end">{units}</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                    'aria-label': 'weight',
                    color: 'white',
                }}
                />
            </FormControl>
        </div>);
}

function HeaderRow() {

    return(
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Cell disabled value='Grados' />
            <Cell disabled value='Minutos' />
            <Cell disabled value='Segundos' />
            <Cell disabled value='Grados decimales' />
            <Cell disabled value='Radianes' />
        </div>
    )
}

export default function InputFrame() {

    return(
        <>
        {/* height_sv */}
        <Cell label='Altura' units='msnm' />
        {/* albedo_sv */}
        <Cell label='Albedo' units='-' />
        {/* solar_sv */}
        <Cell label='Constante Solar' units='MJ/m^2 min' />
        {/* meassure_height_sv */}
        <Cell label='Altura de medición' units='m' />
        {/* highest_point_sv */}
        <Cell label='t=punto máximo' units='-' />
        {/* caloric_capacity_sv */}
        <Cell label='Capacidad calorífica' units='MJ m-3 °C-1' />
        {/* soil_depth_sv */}
        <Cell label='Δz=profundida del suelo' units='m' />
        {/* pressure_sv */}
        <Cell label='Presión Atmosférica' units='kPa' disabled />
        {/* psicrometric_sv */}
        <Cell label='Constante psicrométrica (ϒ)' units='kPa /°C' disabled />

        <HeaderRow />

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
