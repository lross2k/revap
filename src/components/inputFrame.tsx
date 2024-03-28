import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';

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
    heightSv: number;
    albedoSv: number;
    solarSv: number;
    meassureHeightSv: number;
    highestPointSv: number;
    caloricCapacitySv: number;
    soilDepthSv: number;
    pressureSv: number;
    psicrometricSv: number;
    setHeightSv: React.Dispatch<React.SetStateAction<number>>;
    setAlbedoSv: React.Dispatch<React.SetStateAction<number>>;
    setSolarSv: React.Dispatch<React.SetStateAction<number>>;
    setMeassureHeightSv: React.Dispatch<React.SetStateAction<number>>;
    setHighestPointSv: React.Dispatch<React.SetStateAction<number>>;
    setCaloricCapacitySv: React.Dispatch<React.SetStateAction<number>>;
    setSoilDepthSv: React.Dispatch<React.SetStateAction<number>>;
    setPressureSv: React.Dispatch<React.SetStateAction<number>>;
    setPsicrometricSv: React.Dispatch<React.SetStateAction<number>>;
    startDate: Dayjs | null;
    setStartDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
    endDate: Dayjs | null;
    setEndDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
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
    centerLongRadsSv, setCenterLongRadsSv,
    heightSv, setHeightSv,
    albedoSv, setAlbedoSv,
    solarSv, setSolarSv,
    meassureHeightSv, setMeassureHeightSv,
    highestPointSv, setHighestPointSv,
    caloricCapacitySv, setCaloricCapacitySv,
    soilDepthSv, setSoilDepthSv,
    pressureSv, setPressureSv,
    psicrometricSv, setPsicrometricSv,
    startDate, setStartDate,
    endDate, setEndDate,
}: Readonly<InputFrameProps> ) {

    return(
        <>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div>
                {/* height_sv */}
                <Cell label='Altura' units='msnm' value={String(heightSv)} />
                {/* albedo_sv */}
                <Cell label='Albedo' units='-' value={String(albedoSv)} />
                {/* solar_sv */}
                <Cell label='Constante Solar' units='MJ/m^2 min' value={String(solarSv)} />
            </div>
            <div>
                {/* meassure_height_sv */}
                <Cell label='Altura de medición' units='m' value={String(meassureHeightSv)} />
                {/* highest_point_sv */}
                <Cell label='t=punto máximo' units='-' value={String(highestPointSv)} />
                {/* caloric_capacity_sv */}
                <Cell label='Capacidad calorífica' units='MJ m-3 °C-1' value={String(caloricCapacitySv)} />
                {/* soil_depth_sv */}
                <Cell label='Δz=profundida del suelo' units='m' value={String(soilDepthSv)} />
            </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {/* pressure_sv */}
            <Cell label='Presión Atmosférica' units='kPa' disabled value={String(pressureSv)} />
            {/* psicrometric_sv */}
            <Cell label='Constante psicrométrica (ϒ)' units='kPa /°C' disabled value={String(psicrometricSv)} />
        </div>

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

        <div style={{display: 'flex', flexDirection: 'row'}}>
            Inicio
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={startDate}
                onChange={(newValue) => {if (newValue !== null) setStartDate(newValue)}}
              />
            </LocalizationProvider>

            Fin
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={endDate}
                onChange={(newValue) => {if (newValue !== null) setEndDate(newValue)}}
              />
            </LocalizationProvider>
        </div>
        </>
    )
}
