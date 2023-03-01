import { logOutFirebase, getAllClients } from "../firebase/auth";

import React, { useState } from "react";
import { Header } from "../components/Header";
import { Container, Stack, Form, Button, FormGroup, FormControl, Table } from "react-bootstrap";

export function Home({ user }) {
  const [clientes, setClientes] = useState([]);


  return (
    <div className="homeContainer">
      <header>
        <Header />
      </header>
      <Container>
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
              <th>id</th>
              <th>Nombre</th>
              <th>Acción</th>
            </tr>
          </thead>
          
          <tbody>
            {clientes && clientes.map((cliente, index) =>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{cliente.Nombre}</td>
                <td>
                  <Button variant="dark">Consultar</Button>
                  <Button variant="danger">Registrar pago</Button>
                  <Button variant="danger">Registrar nuevo crédito</Button>
                  <Button variant="danger">Registrar pago</Button>eliminar
                </td>
              </tr>
            ))}    

            <tr>
              <td>5821475</td>
              <td>Daniel Gutiérrez</td>
              <td></td>
            </tr>
          </tbody>


        </Table>
      </Container>
    </div>
  );
}

// import { Header } from "../components/Header";
// import { InnerContainer } from "../components/InnerContainer";

// export function Home() {

//   return (
//     <div className="homeContainer">
//       <header>
//         <Header />
//         {/* <Exit logOut={logOut} /> */}
//       </header>
//       <main className="homeMain">
//         <InnerContainer />
//         <div className="userName"></div>

//       </main>
//     </div>
//   );
// }
