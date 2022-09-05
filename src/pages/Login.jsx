import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import axios from 'axios';
import logo from '../assets/logo.png';

export default function Login() {
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const [personal, setPersonal] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get('http://localhost:4000/api/v1/users')
			.then(res => setPersonal(res.data.users))
			.catch(err => console.log(err));
	}, []);

	const handleSubmit = e => {
		e.preventDefault();
		axios
			.post('http://localhost:4000/api/v1/users/login')
			.then(res => {
				navigate('/table');
			})
			.catch(err => console.log(err));

		// const personaExiste = personal.find(persona => user === persona.USUARIO && password === persona.PASSWORD);
	};

	return (
		<div className='login-container'>
			<div className='svg-header'></div>

			<div className='login-body'>
				<img src={logo} alt='logo' />
				<Form className='login-form' onSubmit={handleSubmit}>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Usuario</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter email'
							value={user}
							onChange={e => setUser(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label>Contraseña</Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</Form.Group>

					<Button variant='primary' type='submit'>
						Ingresar
					</Button>
				</Form>
			</div>
		</div>
	);
}
