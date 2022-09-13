import React, { useState } from 'react'
import * as XLSX from 'xlsx/xlsx.mjs';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import './sheetjs.css'

const columns = [
	{
		name: 'fecha_tmk',
		selector: row => row.fecha_tmk,
		grow: 2,
		center: true
	},
	{
		name: 'IDENTIFICADOR',
		selector: row => row.IDENTIFICADOR,
	},
	{
		name: 'id_table',
		selector: row => row.id_table,
	},
	{
		name: 'IDEFECTO',
		selector: row => row.IDEFECTO,
	},
	{
		name: 'IDMOTIVO',
		selector: row => row.IDMOTIVO,
	},
	{
		name: 'IDCONTACTO',
		selector: row => row.IDCONTACTO,
	},
	{
		name: 'OBSERVACION',
		selector: row => row.OBSERVACION,
	},
	{
		name: 'IDTELEFONO',
		selector: row => row.IDTELEFONO,
	},
	{
		name: 'IDDIRECCION',
		selector: row => row.IDDIRECCION,
	},
	{
		name: 'IDPERSONAL',
		selector: row => row.IDPERSONAL,
	},
	{
		name: 'NOMCONTACTO',
		selector: row => row.NOMCONTACTO,
	},
	{
		name: 'PISOS',
		selector: row => row.PISOS,
	},
	{
		name: 'PUERTA',
		selector: row => row.PUERTA,
	},
	{
		name: 'FACHADA',
		selector: row => row.FACHADA,
	},
	{
		name: 'fecha_asignacion',
		selector: row => row.fecha_asignacion,
	},
	{
		name: 'fecha_analisis',
		selector: row => row.fecha_analisis,
	},
	{
		name: 'estado',
		selector: row => row.estado,
	},
	{
		name: 'id_registro',
		selector: row => row.id_registro,
	},
	{
		name: 'fecha_promesa',
		selector: row => row.fecha_promesa,
	},
	{
		name: 'monto_promesa',
		selector: row => row.monto_promesa,
		right: true,
	},
	{
		name: 'fecha_programacion',
		selector: row => row.fecha_programacion,
	},
];

export const SheetJS = () => {

    const [registers, setRegisters] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    const handleFile = () => {
        setisLoading(true);
        axios.post('http://localhost:4000/api/v1/gestions', registers)
        .then(res => {
          console.log(res.data)
          setisLoading(false);
          alert('registros agregados');
        })
        .catch(err => {
            alert('Error al agregar')
            console.log(err)
        })
    }


    const readExcel = file => {
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);
            fileReader.onload = e => {
              const bufferArray = e.target.result;
              
              const wb = XLSX.read(bufferArray, {type: 'buffer', raw: true}); //cellDates:true, dateNF:'mm/dd/yyyy;@',

                const wsname = wb.SheetNames[0];
              
                const ws = wb.Sheets[wsname];

                const data = XLSX.utils.sheet_to_json(ws);

                resolve(data);
            };
            fileReader.onerror = (err => { 
              console.log('error')
              setisLoading(false)
                reject(err);
            })
        });

        promise.then(data => {
            console.log(data);
            setRegisters(data);
            setisLoading(false)
        })
    };

    const paginationOptions = {
      rowsPerPageText: 'Filas por página',
      rangeSeparatorText: 'de',
      selectAllRowsItem: true,
      selectAllRowsItemText: 'Todos',
    };

  return (
    
    <div className='sheet-container'>
      <Container>
      <Form.Group controlId="formFileLg" className="mb-3" onInputCapture={()=>setisLoading(true)} onChange={e => {          const file = e.target.files[0];
          readExcel(file);
        }}>
        <Form.Label>Seleccione excel (.csv)</Form.Label>
        <Form.Control type="file" size="lg" />
      </Form.Group>
        {registers.length ? (
          <Alert variant='primary'>
            Total de registros: {registers.length}
          </Alert>
          ) : ''
        }
      </Container>
        <Button disabled={!registers.length} className='sheet-button' onClick={handleFile}>Agregar a BD</Button>
        { isLoading &&(
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        )}
        {/* {registers.length ? (
          <Table className='sheet-table' responsive striped bordered hover>
          <thead>
            <tr>
              <th>fecha_tmk</th>
              <th>IDENTIFICADOR</th>
              <th>id_table</th>
              <th>IDEFECTO</th>
              <th>IDMOTIVO</th>
              <th>IDCONTACTO</th>
              <th>OBSERVACION</th>
              <th>IDTELEFONO</th>
              <th>IDDIRECCION</th>
              <th>IDPERSONAL</th>
              <th>NOMCONTACTO</th>
              <th>PISOS</th>
              <th>PUERTA</th>
              <th>FACHADA</th>
              <th>fecha_asignacion</th>
              <th>fecha_analisis</th>
              <th>estado</th>
              <th>id_registro</th>
              <th>fecha_promesa</th>
              <th>monto_promesa</th>
              <th>fecha_programacion</th>
            </tr>
          </thead>
          <tbody>
            {registers.map((register, index) => (
                <tr key={index}>
                    <td>{register.fecha_tmk}</td>
                    <td>{register.IDENTIFICADOR}</td>
                    <td>{register.id_table}</td>
                    <td>{register.IDEFECTO}</td>
                    <td>{register.IDMOTIVO}</td>
                    <td>{register.IDCONTACTO}</td>
                    <td>{register.OBSERVACION}</td>
                    <td>{register.IDTELEFONO}</td>
                    <td>{register.IDDIRECCION}</td>
                    <td>{register.IDPERSONAL}</td>
                    <td>{register.NOMCONTACTO}</td>
                    <td>{register.PISOS}</td>
                    <td>{register.PUERTA}</td>
                    <td>{register.FACHADA}</td>
                    <td>{register.fecha_asignacion}</td>
                    <td>{register.fecha_analisis}</td>
                    <td>{register.estado}</td>
                    <td>{register.id_registro}</td>
                    <td>{register.fecha_promesa}</td>
                    <td>{register.monto_promesa}</td>
                    <td>{register.fecha_programacion}</td>
              </tr>
            ))}
          </tbody>
        </Table>
    
          ) : ''
        } */}

        <DataTable
					// responsive
					columns={columns}
					data={registers}
					pagination
					paginationComponentOptions={paginationOptions}
					fixedHeader
					fixedHeaderScrollHeight='600px'
					title="Registros:"
				/>
    </div>
  )
}
