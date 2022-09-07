import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import './signup.css';
import { useEffect } from 'react';
import { useState } from 'react';
/*  */

function Signup() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            departamento: ""
    }});
    const navigate = useNavigate();
    const [ubigeos, setUbigeos] = useState([])
    const [departments, setDepartments] = useState([])
    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([])

    const URL = 'http://localhost:4000/api/v1/users/signup';

    const setDepartamentos = (data) => {
        const departamentos = [...new Set(data.map(item => item.departamento))];
        setDepartments(departamentos.sort())
    }

    useEffect(()=>{
        axios.get('http://localhost:4000/api/v1/ubigeos')
        .then(res => {
            setUbigeos(res.data.ubigeos)
            setDepartamentos(res.data.ubigeos);
        })
        .catch(err => console.log(err))
    },[])

    /* W0RKING */
    const handleProvinces = ( {value} ) => {
        const departamentos = ubigeos.filter(ubigeo => ubigeo.departamento === value)
        const provincias = [...new Set(departamentos.map(item => item.provincia))]
        setProvinces(provincias.sort())
    }
    
    const handleDistricts = ( {value} ) => {
        const provincias = ubigeos.filter(ubigeo => ubigeo.provincia === value)
        console.log(provincias)
        const distritos = [...new Set(provincias.map(item => item.distrito))]
        console.log(distritos)
        setDistricts(distritos.sort())
    }

    const onSubmit = (data, event) => {
        event.preventDefault();
        // const apellidos = data.apellidos.toUpperCase();
        // const nombres = data.nombres.toUpperCase();
        
        // const usuario = data.usuario;
        // const password = data.password;
        console.log(data)
		axios
			.post(URL, data)
			.then(res => {
          alert('Usuario creado')
				  navigate('/');
			})
			.catch(err => {
            console.log(err)
      });
    }

    return (
        // <div className='signup-container rounded'>
            <div className="signup-form rounded">
                <h1 className='signup-header mb-1'>Crear usuario</h1>
                <Form className=' p-3 p-md-5' onSubmit={handleSubmit(onSubmit)}>
                    <Container>
                        <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicApellidos">
                      <Form.Label>Apellidos</Form.Label>
                      <Form.Control type="text" placeholder="Apellidos" {...register('apellidos')}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicNombres">
                      <Form.Label>Nombres</Form.Label>
                      <Form.Control type="text" placeholder="Nombres" {...register('nombres')}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicSexo">
                      <Form.Label>Sexo</Form.Label>
                      <Form.Select {...register('sexo')}>
                        <option>Seleccionar</option>
                        <option value="1">Masculino</option>
                        <option value="2">Femenino</option>
                      </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicNacimiento">
                      <Form.Label>Fecha nacimiento</Form.Label>
                      <Form.Control type="date" placeholder="Fecha nacimiento" {...register('fechanac')}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicDoc">
                      <Form.Label>Doc</Form.Label>
                      <Form.Control type="text" placeholder="Doc" {...register('doc')}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicNombresEstado">
                      <Form.Label>Estado civil</Form.Label>
                      <Form.Select {...register('estciv')}>
                        <option>Seleccionar</option>
                        <option value="1">Soltero</option>
                        <option value="2">Casado</option>
                      </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCarfam">
                      <Form.Label>Carfam</Form.Label>
                      <Form.Select {...register('carfam')}>
                      <option>Seleccionar</option>
                      <option value="1">Si</option>
                      <option value="2">No</option>
                      </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicHijos">
                      <Form.Label>Hijos</Form.Label>
                      <Form.Control type="number" placeholder="Hijos" {...register('numhij')}/>
                  </Form.Group>
                  </Col>
                  <Col>
                  <Form.Group className="mb-3" controlId="formBasicDirección">
                      <Form.Label>Dirección</Form.Label>
                      <Form.Control type="text" placeholder="Dirección" {...register('direccion')}/>
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formBasicDepartamento">
                      <Form.Label>Departamento</Form.Label>
                      {/* <Form.Select {...register('dpto')}>
                        <option>Seleccionar</option>
                        <option value="1">Lima</option>
                        <option value="2">Chiclayo</option>
                      </Form.Select> */}
                      <Select
                        defaultValue={ { label: 'Buscar departamento' } }
                        options = {departments?.map(department => ({ label: department, value: department }))}
                        onChange={handleProvinces}
                        // {...register('departamento')}
                        />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicDistrito">
                      <Form.Label>Provincia</Form.Label>

                      {/* <Form.Select {...register('distrito')}>
                        <option>Seleccionar</option>
                        <option value="1">San Isidro</option>
                        <option value="2">Surco</option>
                      </Form.Select> */}

                      <Select
                        defaultValue={ { label: 'Buscar provincia' } }
                        options = {provinces?.map(province => ({ label: province, value: province }))}
                        onChange={handleDistricts}
                        // {...register('distrito')}
                        />

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicDistrito">
                      <Form.Label>Distrito</Form.Label>

                      {/* <Form.Select {...register('distrito')}>
                        <option>Seleccionar</option>
                        <option value="1">San Isidro</option>
                        <option value="2">Surco</option>
                      </Form.Select> */}

                      <Select
                        defaultValue={ { label: 'Buscar distrito' } }
                        options = {districts?.map(district => ({ label: district, value: district }))}
                        // {...register('distrito')}
                        />

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicRefDir">
                      <Form.Label>Rerefencia</Form.Label>
                      <Form.Control type="text" placeholder="RefDir" {...register('refdir')}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicTelefono">
                      <Form.Label>Teléfono</Form.Label>
                      <Form.Control type="text" placeholder="Teléfono" {...register('tlf')}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCelular">
                      <Form.Label>Celular</Form.Label>
                      <Form.Control type="text" placeholder="Celular" {...register('cel')}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Email" {...register('email')}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicGradoIns">
                      <Form.Label>Grado Ins</Form.Label>
                      <Form.Select {...register('gradoins')}>
                        <option>Seleccionar</option>
                        <option value="1">SECUNDARIA COMPLETA</option>
                        <option value="2">TECNICO INCOMPLETO</option>
                        <option value="2">TECNICO COMPLETO</option>
                        <option value="2">UNIVERSITARIO INCOMPLETO</option>
                        <option value="2">UNIVERSITARIO COMPLETO</option>
                        <option value="2">OTRO</option>
                      </Form.Select>
                  </Form.Group>
                  </Col>
                  <Col>
                  <Form.Group className="mb-3" controlId="formBasicCargo">
                      <Form.Label>Cargo</Form.Label>
                      <Form.Select {...register('cargo')}>
                        <option>Seleccionar</option>
                        <option value="1">ADMIN</option>
                        <option value="1">CALIDAD</option>
                        <option value="1">GESTOR</option>
                        <option value="1">SISTEMAS</option>
                        <option value="1">SUPER</option>
                        <option value="1">TEAMLEADER</option>
                      </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicIdSucursal">
                      <Form.Label>Sucursal</Form.Label>
                      <Form.Select {...register('idsucursal')}>
                        <option>Seleccionar</option>
                        <option value="1">SEDE PRINCIPAL | SAN ISIDRO</option>
                        <option value="1">SEDE SUR | CHORRILLOS</option>
                        <option value="1">SEDE CIX | CHICLAYO</option>
                        <option value="1">SUCURSAL TRUX | HUANCHACO</option>
                      </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicUsuario">
                      <Form.Label><span className='asterisco'>*</span>Usuario</Form.Label>
                      <Form.Control type="text" placeholder="Usuario" 
                      {...register("usuario", {
                          required: {
                            value: true,
                            message: 'Ingrese usuario'
                          }
                        })}/>
                  </Form.Group>
                  {errors.usuario && <Alert variant='danger'>{errors.usuario.message}</Alert>}
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label><span className='asterisco'>*</span>Contraseña</Form.Label>
                      <Form.Control type="password" placeholder="Contraseña" 
                      {...register("password", {
                          required: {
                            value: true,
                            message: "Ingrese contraseña"
                          },
                          minLength: {
                            value: 4,
                            message: "La contraseña debe tener al menos 4 caracteres"
                          }
                        })}/>
                  </Form.Group>
                  {errors.password && <Alert variant='danger'>{errors.password.message}</Alert>}
                  <Form.Group className="mb-3" controlId="formBasicIdEstado">
                      <Form.Label>Id Estado</Form.Label>
                      <Form.Control type="text" placeholder="Id Estado" {...register('idestado')}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicRegistro">
                      <Form.Label>Fecha registro</Form.Label>
                      <Form.Control type="date" placeholder="Registro" {...register('fecha_registro')}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicBaja">
                      <Form.Label>Fecha baja</Form.Label>
                      <Form.Control type="date" placeholder="Baja" {...register('fecha_baja')}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicIdCartera">
                      <Form.Label>Cartera</Form.Label>
                      <Form.Select {...register('id_cartera')}>
                        <option>Seleccionar</option>
                        <option value="1">PREVENTIVA: PREVENTIVA_BANBIF</option>
                        <option value="1">REPROGRAMACIONES: VIGENTE_BANBIF</option>
                        <option value="1">TEMPRANA: VIGENTE_BANBIF</option>
                        <option value="1">RECOVERY: CASTIGADA_BANBIF</option>
                        <option value="1">CASTIGO: CASTIGADA_BANBIF</option>
                        <option value="1">PREVENTIVA REFINANCIADO: PREVENTIVA_BANCO_FALABELLA</option>
                        <option value="1">PREVENTIVA REPROGRAMACIONES: PREVENTIVA_BANCO_FALABELLA</option>
                      </Form.Select>
                  </Form.Group>
                  </Col>
                  </Row>
                  </Container>
                  <Button variant="primary" type="submit">
                      Crear
                  </Button>
                </Form>
                
            </div>
        // </div>
      );
}

export default Signup;