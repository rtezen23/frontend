import React, { useState } from 'react'
import * as XLSX from 'xlsx/xlsx.mjs';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import './sheetjs.css'


export const SheetJS = () => {

    const [registers, setRegisters] = useState([]);

    const handleFile = () => {
        axios.post('http://localhost:4000/api/v1/gestions', registers)
        .then(res => {
            alert('registros agregados');
            console.log(res.data)
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

                const wb = XLSX.read(bufferArray, {type: 'buffer'});

                const wsname = wb.SheetNames[0];

                const ws = wb.Sheets[wsname];

                const data = XLSX.utils.sheet_to_json(ws);

                resolve(data);
            };
            fileReader.onerror = (err => { 
                reject(err);
            })
        });

        promise.then(data => {
            console.log(data);
            setRegisters(data);
        })
    };

  return (
    <div className='sheet-container'>
      <input type="file" onChange={e => {
          const file = e.target.files[0];
            readExcel(file);
        }} />
        <Button className='sheet-button' onClick={handleFile}>Agregar a BD</Button>
<Table className='sheet-table' responsive striped bordered hover>
      <thead>
        <tr>
          {/* <th>IDPERSONAL</th>
          <th>APELLIDOS</th>
          <th>NOMBRES</th>
          <th>FECHANAC</th>
          <th>SEXO</th>
          <th>DOC</th>
          <th>ESTCIV</th>
          <th>CARFAM</th>
          <th>NUMHIJ</th>
          <th>DIRECCION</th>
          <th>DISTRITO</th>
          <th>DPTO</th>
          <th>REFDIR</th>
          <th>TLF</th>
          <th>CEL</th>
          <th>EMAIL</th>
          <th>GRADOINS</th>
          <th>CARGO</th>
          <th>IDSUCURSAL</th>
          <th>USUARIO</th>
          <th>PASSWORD</th>
          <th>IDESTADO</th>
          <th>fecha_registro</th>
          <th>fecha_baja</th>
          <th>id_cartera</th>
          <th>api_token</th> */}
          <th>id</th>
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
    </div>
  )
}
