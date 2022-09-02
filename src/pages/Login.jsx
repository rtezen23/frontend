import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import '../index.css'
import axios from 'axios';
import logo from '../assets/logo.png'

export default function Login() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [personal, setPersonal] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/users')
    .then(res=> setPersonal(res.data.users))
        .catch(err=> console.log(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/api/v1/users/login')
    .then(res=> {
      navigate('/table');
    })
    .catch(err=> console.log(err))
    
    // const personaExiste = personal.find(persona => user === persona.USUARIO && password === persona.PASSWORD);
      
  }

  return (
    <div className='login-container'>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5A5857" fill-opacity="0.8" d="M0,224L26.7,218.7C53.3,213,107,203,160,218.7C213.3,235,267,277,320,261.3C373.3,245,427,171,480,128C533.3,85,587,75,640,101.3C693.3,128,747,192,800,202.7C853.3,213,907,171,960,149.3C1013.3,128,1067,128,1120,149.3C1173.3,171,1227,213,1280,224C1333.3,235,1387,213,1413,202.7L1440,192L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5A5857" fill-opacity="0.8" d="M0,288L0,224L288,224L288,224L576,224L576,160L864,160L864,96L1152,96L1152,160L1440,160L1440,0L1152,0L1152,0L864,0L864,0L576,0L576,0L288,0L288,0L0,0L0,0Z"></path></svg> */}
        <svg className='svg-header' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5A5857" fill-opacity="1" d="M0,320L0,32L1440,32L1440,320L0,320L0,320Z"></path></svg>
        <div className='login-body'>
        <img src={logo} alt="logo" />
        <Form className='login-form' onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="text" placeholder="Enter email" value={user} onChange={e=>setUser(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Ingresar
          </Button>
        </Form>
        </div>
    </div>
  )
}
