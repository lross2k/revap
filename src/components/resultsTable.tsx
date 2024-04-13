import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export interface ResultsTableRow {
  col1: string;
  col2: number;
  col3: number;
  col4: number;
  col5: number;
  col6: number;
  col7: number;
  col8: number;
  col9: number;
  col10: number;
  col11: number;
  col12: number;
  col13: number;
  col14: number;
  col15: number;
  col16: number;
  col17: number;
  col18: number;
  col19: number;
  col20: number;
  col21: number;
  col22: number;
  col23: number;
  col24: number;
  col25: number;
  col26: number;
  col27: number;
  col28: number;
  col29: number;
  col30: number;
  col31: number;
  col32: number;
  col33: number;
  col34: number;
  col35: number;
  col36: number;
  col37: number;
  col38: number;
  col39: number;
  col40: number;
  col41: number;
  col42: number;
  col43: number;
};

export type ResultsTableData = Array<ResultsTableRow>;

interface ResultsTableProps {
  resultsData: ResultsTableData;
};

export default function ResultsTable( { resultsData }: Readonly<ResultsTableProps> ) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} style={{ width: '90vw' }} aria-label="simple table">
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
            <TableCell>Día</TableCell>
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
            <TableCell>MJ/ m^(2)*diamm/dia</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resultsData.map((row) => (
            <TableRow
              key={row.col1}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.col1}
              </TableCell>
              <TableCell align="right">{row.col2}</TableCell>
              <TableCell align="right">{row.col3}</TableCell>
              <TableCell align="right">{row.col5}</TableCell>
              <TableCell align="right">{row.col6}</TableCell>
              <TableCell align="right">{row.col7}</TableCell>
              <TableCell align="right">{row.col8}</TableCell>
              <TableCell align="right">{row.col9}</TableCell>
              <TableCell align="right">{row.col10}</TableCell>
              <TableCell align="right">{row.col11}</TableCell>
              <TableCell align="right">{row.col12}</TableCell>
              <TableCell align="right">{row.col13}</TableCell>
              <TableCell align="right">{row.col14}</TableCell>
              <TableCell align="right">{row.col15}</TableCell>
              <TableCell align="right">{row.col16}</TableCell>
              <TableCell align="right">{row.col17}</TableCell>
              <TableCell align="right">{row.col18}</TableCell>
              <TableCell align="right">{row.col19}</TableCell>
              <TableCell align="right">{row.col20}</TableCell>
              <TableCell align="right">{row.col21}</TableCell>
              <TableCell align="right">{row.col22}</TableCell>
              <TableCell align="right">{row.col23}</TableCell>
              <TableCell align="right">{row.col24}</TableCell>
              <TableCell align="right">{row.col25}</TableCell>
              <TableCell align="right">{row.col26}</TableCell>
              <TableCell align="right">{row.col27}</TableCell>
              <TableCell align="right">{row.col28}</TableCell>
              <TableCell align="right">{row.col29}</TableCell>
              <TableCell align="right">{row.col30}</TableCell>
              <TableCell align="right">{row.col31}</TableCell>
              <TableCell align="right">{row.col32}</TableCell>
              <TableCell align="right">{row.col33}</TableCell>
              <TableCell align="right">{row.col34}</TableCell>
              <TableCell align="right">{row.col35}</TableCell>
              <TableCell align="right">{row.col36}</TableCell>
              <TableCell align="right">{row.col37}</TableCell>
              <TableCell align="right">{row.col38}</TableCell>
              <TableCell align="right">{row.col39}</TableCell>
              <TableCell align="right">{row.col40}</TableCell>
              <TableCell align="right">{row.col41}</TableCell>
              <TableCell align="right">{row.col42}</TableCell>
              <TableCell align="right">{row.col43}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
