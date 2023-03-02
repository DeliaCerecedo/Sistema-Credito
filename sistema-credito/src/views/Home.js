import { logOutFirebase, getAllClients } from "../firebase/auth";
import { Container, Stack, Form, Button, FormGroup, FormControl, Table } from "react-bootstrap";

import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import ModalAñadir from "../components/ModalAñadir";


export function Home({ user }) {
  const [clientes, setClientes] = useState([]);

  const [isModalAñadir, setIsModalAñadir] = useState(false);
  
  function actualizarListaClientes() {
    getAllClients().then((clientes) => {
      setClientes(clientes)
    });
  }

  function añadirClienteHome() {
    setIsModalAñadir(true);
  }

  useEffect(() => {
    actualizarListaClientes();
  }, []);


  return (
    <div className="homeContainer">
      <header>
        <Header />
      </header>
      <Container>
        <ModalAñadir isModalAñadir={isModalAñadir} setIsModalAñadir={setIsModalAñadir} actualizarListaClientes={actualizarListaClientes} />
        <Stack direction="horizontal" className="justify-content-between">
          <p style={{fontSize: 25}} className="usuario" >Usuario: {user.email}</p>
          <Button type="button" className="exit" onClick={logOutFirebase}>
            Cerrar sesión
          </Button>
        </Stack>
       
        <Form>
          <Stack direction="horizontal">
            <FormGroup controlId="busqueda" className="w-75 m-3 ">
              <FormControl type="text" placeholder="Buscar"/>
            </FormGroup>
            <Button variant="dark" type="submit">Buscar</Button>
            <Button variant="light" type="buttom">Borrar</Button>
          </Stack>
        </Form>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Id</th>
              <th>Nombre</th>
              <th>Acción</th>
            </tr>
          </thead>
          
          <tbody>
            {clientes && clientes.map((cliente, index) =>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{cliente.sku}</td>
                <td>{cliente.Nombre}</td>
                <td>
                  <Button variant="dark">Consultar</Button>
                  <Button variant="danger">Registrar pago</Button>
                  <Button variant="dark">Registrar nuevo crédito</Button>
                  <Button variant="danger">Eliminar</Button>
                </td>
              </tr>
            ))}    
          </tbody>
        </Table>
        <Button onClick={añadirClienteHome}>Registrar cliente</Button>
      </Container>
    </div>
  );
}

