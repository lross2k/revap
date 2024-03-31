import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import { Dispatch, SetStateAction } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { FormHelperText } from '@mui/material';

interface CellProps {
    label?:     string;
    units?:     string;
    disabled?:  boolean;
    value?:     string;
    onChange?:  Dispatch<SetStateAction<number>> | undefined;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function CellV2( {label = '', units = '', value = '', disabled = false, onChange}: Readonly<CellProps> ) {
    return (
        <FormControl disabled={disabled} sx={{ m: 1 }} variant="outlined">
            <OutlinedInput
            id="outlined-adornment-weight"
            value={value}
            endAdornment={<InputAdornment position="end">{units}</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': label,
            }}
            onChange={(event) => {
                if (onChange) {
                    onChange(parseFloat(event.target.value));
                }
            }}
            />
            <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
        </FormControl>
    );
}

function Cell( {label = '', units = '', value = '', disabled = false, onChange}: Readonly<CellProps> ) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <p>{label}</p>
            <FormControl disabled={disabled} sx={{ m: 1, width: '15ch' }} style={{color: 'white'}} variant="outlined">
                <OutlinedInput
                id="outlined-adornment-weight"
                value={value}
                endAdornment={<InputAdornment position="end">{units}</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                onChange={(event) => {
                    if (onChange) {
                        onChange(parseFloat(event.target.value));
                    }
                }}
                inputProps={{
                    'aria-label': 'weight',
                    color: 'white',
                }}
                />
            </FormControl>
        </div>
    );
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
    setCol1?: Dispatch<SetStateAction<number>>;
    setCol2?: Dispatch<SetStateAction<number>>;
    setCol3?: Dispatch<SetStateAction<number>>;
    setCol4?: Dispatch<SetStateAction<number>>;
    setCol5?: Dispatch<SetStateAction<number>>;
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
            <Cell disabled={disableCol1} value={col1 ? String(col1) : ''} onChange={setCol1} />
            <Cell disabled={disableCol2} value={col2 ? String(col2) : ''} onChange={setCol2} />
            <Cell disabled={disableCol3} value={col3 ? String(col3) : ''} onChange={setCol3} />
            <Cell disabled={disableCol4} value={col4 ? String(col4) : ''} onChange={setCol4} />
            <Cell disabled={disableCol5} value={col5 ? String(col5) : ''} onChange={setCol5} />
        </div>
    )
}

interface InputFrameProps {
    latDegreesSv: number;
    setLatDegreesSv: Dispatch<SetStateAction<number>>;
    latMinSv: number;
    setLatMinSv: Dispatch<SetStateAction<number>>;
    latSecondsSv: number;
    setLatSecondsSv: Dispatch<SetStateAction<number>>;
    latDecimalsSv: number;
    setLatDecimalsSv: Dispatch<SetStateAction<number>>;
    latRadsSv: number;
    setLatRadsSv: Dispatch<SetStateAction<number>>;
    longDegreesSv: number;
    setLongDegreesSv: Dispatch<SetStateAction<number>>;
    longMinSv: number;
    setLongMinSv: Dispatch<SetStateAction<number>>;
    longSecondsSv: number;
    setLongSecondsSv: Dispatch<SetStateAction<number>>;
    longDecimalsSv: number;
    setLongDecimalsSv: Dispatch<SetStateAction<number>>;
    longRadsSv: number;
    setLongRadsSv: Dispatch<SetStateAction<number>>;
    centerLongDecimalsSv: number;
    setCenterLongDecimalsSv: Dispatch<SetStateAction<number>>;
    centerLongRadsSv: number;
    setCenterLongRadsSv: Dispatch<SetStateAction<number>>;
    heightSv: number;
    albedoSv: number;
    solarSv: number;
    meassureHeightSv: number;
    highestPointSv: number;
    caloricCapacitySv: number;
    soilDepthSv: number;
    pressureSv: number;
    psicrometricSv: number;
    setHeightSv: Dispatch<SetStateAction<number>>;
    setAlbedoSv: Dispatch<SetStateAction<number>>;
    setSolarSv: Dispatch<SetStateAction<number>>;
    setMeassureHeightSv: Dispatch<SetStateAction<number>>;
    setHighestPointSv: Dispatch<SetStateAction<number>>;
    setCaloricCapacitySv: Dispatch<SetStateAction<number>>;
    setSoilDepthSv: Dispatch<SetStateAction<number>>;
    startDate: Dayjs;
    setStartDate: Dispatch<SetStateAction<Dayjs>>;
    endDate: Dayjs;
    setEndDate: Dispatch<SetStateAction<Dayjs>>;
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
    pressureSv,
    psicrometricSv,
    startDate, setStartDate,
    endDate, setEndDate,
}: Readonly<InputFrameProps> ) {

    return(
        <>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} >
        <Grid xs={3}>
          <Item>Altura</Item>
        </Grid>
        <Grid xs={3}>
            <CellV2 label='Altura' units='msnm' value={String(heightSv)} onChange={setHeightSv} />
        </Grid>
        <Grid xs={3}>
          <Item>Albedo</Item>
        </Grid>
        <Grid xs={3}>
            <CellV2 label='Albedo' units='-' value={String(albedoSv)} onChange={setAlbedoSv} />
        </Grid>
        <Grid xs={3}>
          <Item>xs=8</Item>
        </Grid>
        <Grid xs={3}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                {/* height_sv */}
                <Cell label='Altura' units='msnm' value={String(heightSv)} onChange={setHeightSv} />
                {/* albedo_sv */}
                <Cell label='Albedo' units='-' value={String(albedoSv)} onChange={setAlbedoSv} />
                {/* solar_sv */}
                <Cell label='Constante Solar' units='MJ/m^2 min' value={String(solarSv)} onChange={setSolarSv} />
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                {/* meassure_height_sv */}
                <Cell label='Altura de medición' units='m' value={String(meassureHeightSv)} onChange={setMeassureHeightSv} />
                {/* highest_point_sv */}
                <Cell label='t=punto máximo' units='-' value={String(highestPointSv)} onChange={setHighestPointSv} />
                {/* caloric_capacity_sv */}
                <Cell label='Capacidad calorífica' units='MJ m-3 °C-1' value={String(caloricCapacitySv)} onChange={setCaloricCapacitySv} />
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                {/* soil_depth_sv */}
                <Cell label='Δz=profundida del suelo' units='m' value={String(soilDepthSv)} onChange={setSoilDepthSv} />
                {/* pressure_sv */}
                <Cell label='Presión Atmosférica' units='kPa' disabled value={pressureSv.toFixed(2)} />
                {/* psicrometric_sv */}
                <Cell label='Constante psicrométrica (ϒ)' units='kPa /°C' disabled value={psicrometricSv.toFixed(2)} />
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
    );
}
