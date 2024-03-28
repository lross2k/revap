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
            <Cell disabled value='' />
            <Cell disabled value='Grados' />
            <Cell disabled value='Minutos' />
            <Cell disabled value='Segundos' />
            <Cell disabled value='Grados decimales' />
            <Cell disabled value='Radianes' />
        </div>
    )
}

interface LocationInputRowProps {
    title: string;
    col1?: number | undefined;
    col2?: number | undefined;
    col3?: number | undefined;
    col4?: number | undefined;
    col5?: number | undefined;
    setCol1?: React.Dispatch<React.SetStateAction<number>>;
    setCol2?: React.Dispatch<React.SetStateAction<number>>;
    setCol3?: React.Dispatch<React.SetStateAction<number>>;
    setCol4?: React.Dispatch<React.SetStateAction<number>>;
    setCol5?: React.Dispatch<React.SetStateAction<number>>;
    disableCol1?: boolean;
    disableCol2?: boolean;
    disableCol3?: boolean;
    disableCol4?: boolean;
    disableCol5?: boolean;
}

function LocationInputRow( {title, col1, col2=undefined, col3=undefined, col4=undefined, col5=undefined, setCol1, setCol2, setCol3, setCol4, setCol5, disableCol1, disableCol2, disableCol3, disableCol4, disableCol5}: Readonly<LocationInputRowProps> ) {
    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <Cell disabled value={title} />
            <Cell disabled={disableCol1} value={col1 ? String(col1) : ''} />
            <Cell disabled={disableCol2} value={col2 ? String(col2) : ''} />
            <Cell disabled={disableCol3} value={col3 ? String(col3) : ''} />
            <Cell disabled={disableCol4} value={col4 ? String(col4) : ''} />
            <Cell disabled={disableCol5} value={col5 ? String(col5) : ''} />
        </div>
    )
}

interface InputFrameProps {
    latDegreesSv: number;
    setLatDegreesSv: React.Dispatch<React.SetStateAction<number>>;
    latMinSv: number;
    setLatMinSv: React.Dispatch<React.SetStateAction<number>>;
    latSecondsSv: number;
    setLatSecondsSv: React.Dispatch<React.SetStateAction<number>>;
    latDecimalsSv: number;
    setLatDecimalsSv: React.Dispatch<React.SetStateAction<number>>;
    latRadsSv: number;
    setLatRadsSv: React.Dispatch<React.SetStateAction<number>>;
    longDegreesSv: number;
    setLongDegreesSv: React.Dispatch<React.SetStateAction<number>>;
    longMinSv: number;
    setLongMinSv: React.Dispatch<React.SetStateAction<number>>;
    longSecondsSv: number;
    setLongSecondsSv: React.Dispatch<React.SetStateAction<number>>;
    longDecimalsSv: number;
    setLongDecimalsSv: React.Dispatch<React.SetStateAction<number>>;
    longRadsSv: number;
    setLongRadsSv: React.Dispatch<React.SetStateAction<number>>;
    centerLongDecimalsSv: number;
    setCenterLongDecimalsSv: React.Dispatch<React.SetStateAction<number>>;
    centerLongRadsSv: number;
    setCenterLongRadsSv: React.Dispatch<React.SetStateAction<number>>;
}

export default function InputFrame( {
    latDegreesSv, setLatDegreesSv, 
    latMinSv, setLatMinSv, 
    latSecondsSv, setLatSecondsSv, 
    latRadsSv, setLatRadsSv, 
    latDecimalsSv, setLatDecimalsSv,
    longDegreesSv, setLongDegreesSv, 
    longMinSv, setLongMinSv, 
    longSecondsSv, setLongSecondsSv, 
    longRadsSv, setLongRadsSv, 
    longDecimalsSv, setLongDecimalsSv,
    centerLongDecimalsSv, setCenterLongDecimalsSv,
    centerLongRadsSv, setCenterLongRadsSv
}: Readonly<InputFrameProps> ) {

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
        <LocationInputRow 
            title='Latitud (φ)' 
            col1={latDegreesSv} 
            setCol1={setLatDegreesSv} 
            col2={latMinSv} 
            setCol2={setLatMinSv} 
            col3={latSecondsSv} 
            setCol3={setLatSecondsSv} 
            col4={latDecimalsSv} 
            setCol4={setLatDecimalsSv} 
            col5={latRadsSv} 
            setCol5={setLatRadsSv}
            disableCol4
            disableCol5
        />
        <LocationInputRow 
            title='Longitud (Lm)' 
            col1={longDegreesSv} 
            setCol1={setLongDegreesSv} 
            col2={longMinSv} 
            setCol2={setLongMinSv} 
            col3={longSecondsSv} 
            setCol3={setLongSecondsSv} 
            col4={longDecimalsSv} 
            setCol4={setLongDecimalsSv} 
            col5={longRadsSv} 
            setCol5={setLongRadsSv}
            disableCol4
            disableCol5
        />
        <LocationInputRow 
            title='Longitud centro (Lz)' 
            col4={centerLongDecimalsSv} 
            setCol4={setCenterLongDecimalsSv} 
            col5={centerLongRadsSv} 
            setCol5={setCenterLongRadsSv}
            disableCol1
            disableCol2
            disableCol3
        />

    {/* '', self.dummy_sv, self.dummy_sv, self.dummy_sv, self.center_long_decimals_sv, self.center_long_rads_sv, self.center_long_callback, True, True, True, False, True) */}

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
