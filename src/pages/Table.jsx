import React, { useEffect, useState } from 'react';
import DataTable, {createTheme} from 'react-data-table-component';
import 'styled-components';
import '../index.css'

const columns = [
    {
        name: 'id',
        selector: row => row.id,
    },
    {
        name: 'fecha_tmk',
        selector: row => row.fecha_tmk,
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
    },
    {
        name: 'fecha_programacion',
        selector: row => row.fecha_programacion,
    },
];

export const Table = () => {

    const [personal, setPersonal] = useState([])

    const URL = 'http://localhost:4000/api/v1/gestions';

    const showData = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        data.gestions[0].fecha_tmk
        setPersonal(data.gestions);
    }

    useEffect(() => {
        showData();
    }, [])

    console.log(personal)

    // createTheme('custom', {
    //     text: {
    //       primary: '#268bd2',
    //       secondary: '#2aa198',
    //     },
    //     background: {
    //       default: '#002b36',
    //     },
    //     context: {
    //       background: '#cb4b16',
    //       text: '#FFFFFF',
    //     },
    //     divider: {
    //       default: '#073642',
    //     },
    //     action: {
    //       button: 'rgba(0,0,0,.54)',
    //       hover: 'rgba(0,0,0,.08)',
    //       disabled: 'rgba(0,0,0,.12)',
    //     },
    //   }, 'dark');
      
    //   const MyComponent = () => (
    //     <DataTable
    //       title="Personal"
    //       columns={columns}
    //       theme="solarized"
    //     />
    //   );

    return (
        <>
            <h1 className='personal-title'>Registros Personal</h1>
            <DataTable
                columns={columns}
                data={personal}
                // theme='custom'
                pagination
            />
        </>
    );
};