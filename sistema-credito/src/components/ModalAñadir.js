import {añadirCliente} from "../firebase/auth";

import React from 'react';
import { Modal, Stack, Form, Button } from 'react-bootstrap'; 

function ModalAñadir({isModalAñadir, setIsModalAñadir, actualizarListaClientes}) {
  
  function añadirClienteModal() {
    //obtener la información del formulario
    const sku = document.getElementById("sku").value;
    const nombre = document.getElementById("nombre").value;
    console.log(sku, nombre);
 
    //enviar la información a firebase
    const infoCliente = {sku, nombre}
    añadirCliente(infoCliente);
    
    //cerrar el modal (false)
    actualizarListaClientes();
    setIsModalAñadir(false);

  }

  return (
    <Modal show={isModalAñadir} onHide={() => setIsModalAñadir(false)}>
      <Modal.Header>
        <Modal.Title>Añadir Cliente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack>
            <Form.Control id='sku' placeholder='Id' type='texto' className='mb-2'></Form.Control>
            <Form.Control id='nombre' placeholder='Nombre' type='texto'  className='mb-2'></Form.Control>
          </Stack>
        </Form>
      </Modal.Body>
      
      <Modal.Footer>
        <Button variant='secondary' onClick={() => setIsModalAñadir(false)}>Cancelar</Button>
        <Button variant='primary' onSubmit={añadirClienteModal}>Registrar</Button>
      </Modal.Footer>

    </Modal>
  );
}

export default ModalAñadir;