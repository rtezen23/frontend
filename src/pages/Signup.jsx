import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import './signup.css';
import { useEffect } from 'react';
import { useState } from 'react';
import {FaUserLock} from 'react-icons/fa';
import {FaUserAlt} from 'react-icons/fa';
import {ImArrowRight} from 'react-icons/im';

function Signup() {

    const { register, handleSubmit, formState: { errors }, watch, setValue, control } = useForm({
        defaultValues: {
            dpto: '',
            distrito: ''
    }});
    // const { handleSubmit, reset, setValue, control } = useForm({ defaultValues });
    const navigate = useNavigate();
    const [ubigeos, setUbigeos] = useState([])
    const [departments, setDepartments] = useState([])
    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([])

    const [dpto, setDpto] = useState('')
    // const { onChange, onBlur, name, ref } = register('dpto'); 
    /* INPUTS */
    // const [doc, setDoc] = useState('')
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
    // e.name = 'hola'
    // setDpto(data.value)
    // e.value = data.value;

    // const handleProvinces = ( data, e ) => {
    const handleProvinces = ( e ) => {
        setDpto(e.value)
        const departamentos = ubigeos.filter(ubigeo => ubigeo.departamento === e.value)
        const provincias = [...new Set(departamentos.map(item => item.provincia))]
        setProvinces(provincias.sort())
    }
    
    // const handleDistricts = ( {value} ) => {
    const handleDistricts = ( e ) => {
        const provincias = ubigeos.filter(ubigeo => ubigeo.provincia === e.value)
        const distritos = [...new Set(provincias.map(item => item.distrito))]
        setDistricts(distritos.sort())
    }

    const onSubmit = (data, event) => {
        data.dpto = dpto;
        data.distrito = data.distrito.value;
        event.preventDefault();
        console.log(data)
        // const apellidos = data.apellidos.toUpperCase();
        // const nombres = data.nombres.toUpperCase();
        
        // const usuario = data.usuario;
        // const password = data.password;

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

    const handleDoc = ( e ) => {
        // console.log(e)
        // setDoc(e.target.value)
    }

    return (
        // <div className='signup-container rounded'>
            <div className="signup-form rounded">
                <h1 className='signup-header mt-4'>Registrar usuario</h1>
                <hr />
                <Form className=' p-3 p-md-5' onSubmit={handleSubmit(onSubmit)}>
                    <Container>
                    
                      <h4><FaUserAlt/> DATOS PERSONALES</h4>
                      <hr />
                        <Row xs={1} md={2} lg={3}>
                <Col>
                {/* <Controller
            name="ReactSelect"
            control={control}
            render={({ field }) => (
              <ReactSelect
                isClearable
                {...field}
                options={departments?.map(department => ({ label: department, value: department }))}
                {...register('dpto')}
              />
            )}
          /> */}
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
                      <Form.Control type="text" placeholder="Doc" {...register('doc', {
                        //   required: {
                        //     value: true,
                        //     message: "Ingrese contraseña"
                        //   },
                        minLength: {
                            value: 8,
                            message: "La contraseña debe tener 8 caracteres"
                          },
                          maxLength: {
                            value: 8,
                            message: "La password debe tener 8 caracteres"
                          },
                        })}/>
                        {errors.doc && <Form.Text variant='danger'>{errors.doc.message}</Form.Text>}
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
                  <Form.Group className="mb-3" controlId="formBasicDirección">
                      <Form.Label>Dirección</Form.Label>
                      <Form.Control type="text" placeholder="Dirección" {...register('direccion')}/>
                  </Form.Group>
                  </Col>
                  <Col>
                  
                  <Form.Group className="mb-3" controlId="formBasicDepartamento">
                      <Form.Label>Departamento</Form.Label>
                      {/* <Form.Select {...register('dpto')} onChange={handleProvinces}>
                        <option>Seleccionar</option>
                        {
                            departments?.map((department, index) => (
                                <option key={index}>{department}</option>
                            ))
                        }
                      </Form.Select> */}
                        {/* <Controller
                          render={({ field }) => (
                              <Select { ...field } onChange={handleProvinces}
                              options = {departments?.map(department => ({ label: department, value: department }))}/>)}
                          name='dpto'
                          control={control}
                        >
                        </Controller> */}
                        <Select onChange={handleProvinces}
                              options = {departments?.map(department => ({ label: department, value: department }))}/>                        
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicProvincia">
                      <Form.Label>Provincia</Form.Label>
                      {/* {...register('provincia')} */}
                      {/* <Form.Select onChange={handleDistricts}>
                        <option>Seleccionar</option>
                        {
                            provinces?.map((province, index) => (
                                <option key={index}>{province}</option>
                            ))
                        }
                      </Form.Select> */}

                              <Select onChange={handleDistricts}
                              options = {provinces?.map(province => ({ label: province, value: province }))}/>                        

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicDistrito">
                      <Form.Label>Distrito</Form.Label>

                      {/* <Form.Select {...register('distrito')}>
                        <option>Seleccionar</option>
                        {
                            districts?.map((district, index) => (
                                <option key={index}>{district}</option>
                            ))
                        }
                      </Form.Select> */}
                        <Controller
                          render={({ field }) => (
                            <Select { ...field } options = {districts?.map(district => ({ label: district, value: district }))}/>)}
                            name='distrito'
                            // {...register('dpto')}
                           
                            control={control}
                            >
                        </Controller>

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicRefDir">
                      <Form.Label>Rerefencia</Form.Label>
                      <Form.Control type="text" placeholder="RefDir" {...register('refdir')}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicTelefono">
                      <Form.Label>Teléfono</Form.Label>
                      <Form.Control type="text" placeholder="Teléfono" {...register('tlf', {
                        minLength: {
                            value: 8,
                            message: "El teléfono debe tener 8 caracteres"
                          },
                          maxLength: {
                            value: 8,
                            message: "El teléfono debe tener 8 caracteres"
                          },
                      })}/>
                      {errors.tlf && <Form.Text variant='danger'>{errors.tlf.message}</Form.Text>}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCelular">
                      <Form.Label>Celular</Form.Label>
                      <Form.Control type="text" placeholder="Celular" {...register('cel', {
                        minLength: {
                            value: 9,
                            message: "El celular debe tener 9 caracteres"
                          },
                          maxLength: {
                            value: 9,
                            message: "El celular debe tener 9 caracteres"
                          },
                      })}/>
                      {errors.cel && <Form.Text variant='danger'>{errors.cel.message}</Form.Text>}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Email" {...register('email', {
                    required: {
                      value: true,
                      message: "Necesitas este campo"
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "El formato no es correcto"
                    }
                  })}/>
                  {errors.email && <Form.Text variant='danger'>{errors.email.message}</Form.Text>}
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
                  </Col>
                  <Col>
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
                  <Card>
                    <Card.Body>
                    <Card.Title><FaUserLock /> Acceso</Card.Title>
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
                  {errors.usuario && <Alert className='alert' variant='danger'>{errors.usuario.message}</Alert>}
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
                  {errors.password && <Alert className='alert' variant='danger'>{errors.password.message}</Alert>}
                  </Card.Body>
                  </Card>
                  </Col>
                  </Row>
                  </Container>
                  <div className='signup-btn'>
                  <Button variant="primary" type="submit">
                      Registrar <ImArrowRight/>
                  </Button>
                  </div>
                </Form>
                
            </div>
        // </div>
      );
}

export default Signup;