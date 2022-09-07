import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import logo from '../assets/logo.jpg';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { setPersonal } from '../store/slices/personal.slice';


export default function Login() {
	// const [usuario, setUser] = useState('');
	// const [password, setPassword] = useState('');
	// const [personal, setPersonal] = useState([]);
	const dispatch = useDispatch();

	useEffect(()=>{
			const token = localStorage.getItem('token', '');
			if (token) {
				if (token !== '' ) {
					navigate('/table');
				}
			}
	},[])

  	const { register, handleSubmit, formState: { errors } } = useForm();

	const navigate = useNavigate();

	// useEffect(() => {
	// 	axios
	// 		.get('http://localhost:4000/api/v1/users')
	// 		.then(res => setPersonal(res.data.users))
	// 		.catch(err => console.log(err));
	// }, []);

	const onSubmit = (data, event) => {
		event.preventDefault();
    // const usuario = data.usuario;
    // const password = data.password;
		axios
			.post('http://localhost:4000/api/v1/users/login', data)
			.then(res => {
				localStorage.setItem('token', res.data.token)
				dispatch(setPersonal(res.data.user))
        		alert('Usuario correcto')
				navigate('/table');
			})
			.catch(error => {
                if (error.response.status === 404 || error.response.status === 401 || error.response.status === 400) {
                    alert('Usuario o contraseña incorrectos');
                }
            })
			
		// const personaExiste = personal.find(persona => user === persona.USUARIO && password === persona.PASSWORD);
	};

	return (
		<Container className='login-container'>
			<div className='svg-header'></div>
			<div className='login-body'>
				<img className='login-logo' src={logo} alt='logo' />
				<Form className='rounded p-4 p-sm-3 form-container' onSubmit={handleSubmit(onSubmit)}>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Usuario</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter email'
							// value={usuario}
							// onChange={e => setUser(e.target.value)}
              {...register("usuario", {
                required: {
                  value: true,
                  message: 'Ingrese usuario'
                }
              })}
              />
					</Form.Group>
          {errors.usuario && <Alert variant='danger'>{errors.usuario.message}</Alert>}

					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label>Contraseña</Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							// value={password}
							// onChange={e => setPassword(e.target.value)}
              {...register("password", {
                required: {
                  value: true,
                  message: "Ingrese contraseña"
                },
                minLength: {
                  value: 4,
                  message: "La contraseña debe tener al menos 4 caracteres"
                }
              })}
              />
					</Form.Group>
          {errors.password && <Alert variant='danger'>{errors.password.message}</Alert>}

					<Button variant='primary' type='submit'>
						Ingresar
					</Button>
            <Link className='signup' to='/signup'>Crear usuario</Link>
				</Form>
			</div>
		</Container>
	);
}
