import React, { useEffect, useState, useMemo } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import DataTable, { createTheme } from 'react-data-table-component';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'styled-components';
import '../index.css';

const columns = [
	{
		name: 'id',
		selector: row => row.id,
		grow: 1,
	},
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

export const Table = () => {
	
	const personalActivo = useSelector(state => state.personal )
	const navigate = useNavigate();
	
	const [personal, setPersonal] = useState([]);

	const URL = 'http://localhost:4000/api/v1/gestions';

	const showData = async () => {
		const response = await fetch(URL);
		const data = await response.json();
		// data.gestions[0].fecha_tmk;
		const newGestions = data.gestions.map(gestion => {
			const newDate = new Date (gestion.fecha_tmk)
			return {...gestion, fecha_tmk: newDate.toLocaleString()}
		})
		setPersonal(newGestions);
		setFilteredPersonal(newGestions);
	};

	useEffect(() => {
		showData();
	}, []);

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

	const paginationOptions = {
		rowsPerPageText: 'Filas por página',
		rangeSeparatorText: 'de',
		selectAllRowsItem: true,
		selectAllRowsItemText: 'Todos',
	};
	
	/* ---------------------- DATATABLE FILTER ----------------------- */
	const [search, setSearch] = useState('');
	const [filteredPersonal, setFilteredPersonal] = useState([]);

	useEffect(() => {
		const result = personal.filter( item => {
			return item.IDENTIFICADOR.toLowerCase().match(search.toLowerCase());
		});
		setFilteredPersonal(result);
	}, [search])
	return (
		<>
			<h2 style={{color: '#000'}}>Bienvenido(a) {personalActivo.NOMBRES} {personalActivo.APELLIDOS}</h2>
			<h1 className='personal-title'>Registros Personal</h1>
			<Button onClick={()=>navigate('/signup')} variant='success' className='mb-5'>Crear usuario</Button>
			<div className='table-responsive'>
				<DataTable
					// responsive
					columns={columns}
					data={filteredPersonal}
					// theme='custom'
					pagination
					paginationComponentOptions={paginationOptions}
					fixedHeader
					fixedHeaderScrollHeight='600px'
					title="Contact List"
					subHeader
					subHeaderComponent={
						<Form.Control type="text" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Baja" />
					}
					subHeaderAlign='left'
			// selectableRows
			// persistTableHead
				/>
			</div>
		</>
	);
};
