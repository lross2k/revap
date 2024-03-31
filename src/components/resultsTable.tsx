import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ResultsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>Valores promedios</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>Valores mínimos</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>Valores máximos</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>Velocidad</TableCell>
            <TableCell>Vapor de Saturación</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>Pendiente</TableCell>
            <TableCell>Presión real de vapor derivada de la humedad realtiva</TableCell>
            <TableCell>Déficit de </TableCell>
            <TableCell>RS (Rs )</TableCell>
            <TableCell>Dia</TableCell>
            <TableCell>Distancia </TableCell>
            <TableCell>Declinación </TableCell>
            <TableCell>Ángulo de radición horario</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>Radiación extraterrestre</TableCell>
            <TableCell>Duración máxima</TableCell>
            <TableCell>R so</TableCell>
            <TableCell>Radiación </TableCell>
            <TableCell>Radiación</TableCell>
            <TableCell>Radiación </TableCell>
            <TableCell>Radiación</TableCell>
            <TableCell>Flujo de calor del suelo</TableCell>
            <TableCell>Cálculo de ET</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Día;</TableCell>
            <TableCell>Número de días</TableCell>
            <TableCell>TA</TableCell>
            <TableCell>HR</TableCell>
            <TableCell>VV</TableCell>
            <TableCell>RS (Rs )</TableCell>
            <TableCell>PR</TableCell>
            <TableCell>TA</TableCell>
            <TableCell>HR</TableCell>
            <TableCell>VV</TableCell>
            <TableCell>RS (Rs )</TableCell>
            <TableCell>PR</TableCell>
            <TableCell>TA</TableCell>
            <TableCell>HR</TableCell>
            <TableCell>VV</TableCell>
            <TableCell>RS (Rs )</TableCell>
            <TableCell>PR</TableCell>
            <TableCell>Viento a 2 m</TableCell>
            <TableCell>e°(Tmax)</TableCell>
            <TableCell>e°(Tmin)</TableCell>
            <TableCell>Presión media</TableCell>
            <TableCell>Curva de sarturación</TableCell>
            <TableCell>presión real</TableCell>
            <TableCell>presión de vapor</TableCell>
            <TableCell>Radiación solar </TableCell>
            <TableCell>juliano</TableCell>
            <TableCell>relativa</TableCell>
            <TableCell>solar</TableCell>
            <TableCell>Valor </TableCell>
            <TableCell>Correción seccional</TableCell>
            <TableCell>puesta de sol</TableCell>
            <TableCell>sol punto medio</TableCell>
            <TableCell>inicio</TableCell>
            <TableCell>final</TableCell>
            <TableCell>Ra</TableCell>
            <TableCell>Insolación</TableCell>
            <TableCell>día despejado</TableCell>
            <TableCell>onda corta (Rns)</TableCell>
            <TableCell>relativa</TableCell>
            <TableCell>onda larga (Rnl)</TableCell>
            <TableCell>neta (Rn)</TableCell>
            <TableCell>G</TableCell>
            <TableCell>ET</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>grados C</TableCell>
            <TableCell>%</TableCell>
            <TableCell>m/s</TableCell>
            <TableCell>W/m2</TableCell>
            <TableCell>grados C</TableCell>
            <TableCell>grados C</TableCell>
            <TableCell>%</TableCell>
            <TableCell>m/s</TableCell>
            <TableCell>W/m2</TableCell>
            <TableCell>grados C</TableCell>
            <TableCell>grados C</TableCell>
            <TableCell>%</TableCell>
            <TableCell>m/s</TableCell>
            <TableCell>W/m2</TableCell>
            <TableCell>grados C</TableCell>
            <TableCell>u2 (m/2)</TableCell>
            <TableCell>kPa</TableCell>
            <TableCell>kPa</TableCell>
            <TableCell>es (kPa)</TableCell>
            <TableCell>Δ (kPa/ C°1)</TableCell>
            <TableCell>ea (kPa)</TableCell>
            <TableCell>es - ea (kPa)</TableCell>
            <TableCell>MJ/ m^(2)* dia</TableCell>
            <TableCell>J</TableCell>
            <TableCell>dr</TableCell>
            <TableCell>δ</TableCell>
            <TableCell>b</TableCell>
            <TableCell>Sc</TableCell>
            <TableCell>ωs </TableCell>
            <TableCell>ω</TableCell>
            <TableCell>ω1</TableCell>
            <TableCell>ω2</TableCell>
            <TableCell>MJ /m^(2) *dia</TableCell>
            <TableCell>N</TableCell>
            <TableCell>MJ/ m^(2)* dia</TableCell>
            <TableCell>MJ/ m^(2)*día</TableCell>
            <TableCell>Rs/Rso</TableCell>
            <TableCell>MJ/ m^(2) *día</TableCell>
            <TableCell>MJ/ m^(2) *dia</TableCell>
            <TableCell>MJ/ m^(2)*diamm/dia"</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
