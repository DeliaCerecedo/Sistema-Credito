# Sistema-Credito

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Organización del proyecto](#2-organización-del-proyecto)
* [3. Criterios de Aceptación](#3-criterios-de-aceptación)
* [4. Hacker Edition](#4-hacker-edition)
* [5. Estado actual del proyectoo](#5-estado-actual-del-proyecto)
* [6. Diseño de alta fidelidad](#6-diseño-de-alta-fidelidad)
* [7. Historias de usuario](#7-historias-de-usuario)


***

## 1. Preámbulo

Como parte del proceso de selección, estamos pidiendo realizar una prueba para evaluar los skills técnicos, la capacidad de análisis, diseño y presentación de soluciones para problemas de arquitectura de software.

Objetivo: Desarrollar una aplicación proponiendo una arquitectura en el lenguaje de tu preferencia y utilizando las operaciones CRUD.

Consiste en un sistema de créditos, el cual ya cuenta con algunos clientes registrados, y tiene la opción de dar de alta a nuevos clientes con un monto de dinero solicitado. Algunos clientes tienen más de 1 crédito y cada crédito se paga en 4 parcialidades, algunos clientes ya tienen su cuenta liquidada (todos los pagos hechos), otros tienen algunos pagos y algunos no tienen ningún pago realizado, también el sistema te da la opción de registrar un nuevo pago.

Puedes utilizar un mock server o la memoria del navegador para la consistencia de datos (no es necesario desarrollar el backend de la aplicación).

Al terminar la aplicación, sube tu proyecto a git con el README para levantarlo y enviar la información a ***armando.vera@invested.mx** con el asunto **Prueba técnica Invested + Nombre + Apellido***  

Tendrás una semana después de recibir la prueba.

¡Éxito!

## 2. Organización del proyecto

* Se realizó una lectura general del proyecto para obtener los criterios de aceptación.
* En base a los criterios de aceptación se propusieron varias Hacker Edition para mejorar el proyecto.
* Se realizó un prototipo de baja fidelidad en base a los criterios de aceptación planteados para tener una idea de los layouts.
* Se realizó una encuesta para preguntar a un tercero sobre la interfaz propuesta en cuanto a su manejo, estética, funcionalidad, etc.
* Se aplicaron los cambios de acuerdo a la retroalimentación obtenido.
* Se realizaron las Historias de Usuario pertinentes para cubrir los criterios de aceptación del proyecto.
* Se realizó prototipo de alta fidelidad en figma.
* Se realizó una encuesta se realizó una prueba de usabilidad en figma interactivo para preguntar a un tercero sobre la interfaz propuesta en cuanto a su manejo, estética, funcionalidad, etc.
* Se aplicaron los cambios de acuerdo a la retroalimentación obtenida.
* Se realizaron las HU necesarias para cumplir con los requerimientos del proyecto, así como las Historias de Usuario y Criterios de Terminación de cada una.
* Se comenzó a codear en React.js

## 3. Criterios de Aceptación

El proyecto es debe contener, al menos, los siguientes criterios de aceptación:

- [X] Es un sistema de crédito.
- [X] Tiene clientes registrados
- [X] Opción de dar de atla nuevos clientes con un monto de dinero solicitado.
- [X] Algunos clientes tienen más de 1 crédito.
- [X] Cada crédito se paga en 4 parcialidades.
- [X] Algunos clinetes ya tienen su centa liquidada.
- [X] Algunos clientes tienen algunos pagos.
- [X] Algunos cliente sno tienen ningún pago realizado.
- [X] Opción de registrar nuevo pago.

## 4. Hacker Edition

- [X] Iniciar sesión mediante la dirección de correo electrónico y constraseña.
- [X] Unir el proyecto a Firebase (Authentication y Cloude Firestore).
- [ ] Conocer el nombre del usuario que eliminó a clientes.
- [ ] Buscar a un cliente por nombre.

## 5. Estado actual del proyecto

- Se puede ingresar mediante una cuenta de correo electrónico que previamente se dió de dalta en firebase (dhdiaz@gmail.com, password: 123456).
- Al ingresar, en el siguiente layout llamado Home, se observa:
  >* Se muestra una lista de los clientes que se dieron de alta previamente en firebase, esta tabla se actualiza automáticamente.
  >* Se observa el email del usuario y no el nombre como se había planeado, sin embargo, se puede plantear dejarlo así o buscar mostrar el nombre.
  >* ÚNICAMENTE funcionan dos botones: Cerrar sesión y Registrar nuevo cliente.
  >* Se cierra sesión desde el layout Home.
  >* Al dar click en registrar cliente, obtenemos un Modal equivalente al layout llamados Registrar nuevo cliente. 
- En el Layout Registar nuevo cliente mencionado, se tiene:
  >* Dos entradas: id y nombre y dos botónes.
  >* Se deben agregar más entradas para obtener los datos completos del cliente.
  >* El Botón de cancelar funciona por lo que se puede regresar al layout de Home.
  >* E Botón de Registrar no funciona.
 - Se debe dar maquetación a los alyout Home y Registrar nuevo cliente.
 - El poryecto se encuentra en gh-pages, el link es el siguiente: [Sistema de crédito](https://deliacerecedo.github.io/Sistema-Credito/)

## 6. Diseño de alta fidelidad

Se anexa el link del figma donde se encuentra el diseño de alta fidelidad interactivo con la finalidad de conocer la secuencia del sistema de crédito. 

[Prototipo de alta fidelidad interactivo](https://www.figma.com/file/otXsYwTEsdkpZv8eVvRLCV/sistema-credito?node-id=0%3A1&t=IxWhFQG5x8Jg1C6z-0)

## 7. Historias de usuario

#### [Historia de usuario 1]

Yo como usuario del sistema de crédito quiero poder iniciar sesión con correo electrónico y contraseña para poder manipular y ver los datos de los clientes.

**Criterios de Aceptación.**

- [X] Quiero poder iniciar sesión con email y password.
- [X] Quiero que se oculte el texto escrito en el campo de contraseña.
- [ ] Quiero mensajes descriptivo en caso de que mi cuenta o contaseña no sean válidas, en caso de no tener una cuenta.
- [X] Quiero ir directamente al muro para poder ver la tabla que contiene la lista de los clientes.
 
**Definición de Terminado.**

- [X] Debe ser responsive
- [ ] Testearon manualmente buscando errores e imperfecciones simples.
- [ ] Hacer 2 pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
- [ ] Deben haber recibido code review por parte del  leader del proyecto.
- [X] Todo el código está en la rama principal/main del repositorio.
- [X] La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.

#### [Historia de usuario 2]

Yo como usuario del sistema de crédito quiero poder ver una tabla con la lista de clientes para poder manipular y ver los datos de los clientes.

**Criterios de Aceptación del proyecto.**

- [X] Quiero poder cerrar sesión.
- [X] Quiero ver el nombre del usuario que ingreso con su correo electrónico y contraseña.
- [ ] Quiero poder hacer una búsqueda por nombre del cliente y borrar el nombre en la búsqueda.
- [X] Quiero ver la tabla que contiene la lista de los clientes con la siguiente información: Id, Nombre y acciones a realizar.
- [ ] Quiero tener un botón que me permita consultar la información completa de cada uno de los clientes.
- [ ] Quiero tener un botón que me permita registrar un pago.
- [ ] Quiero tener un botón que me permita registrar un nuevo crédito.
- [ ] Quiero tener un botón que me permita eliminar a un cliente pero que quede registrado en la base de datos quien realizó          esta acción.
- [ ] Quiero poder registrar un nuevo cliente.
 
**Definición de Terminado.**

- [X] Debe ser responsive
- [ ] Testearon manualmente buscando errores e imperfecciones simples.
- [ ] Hacer 2 pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
- [ ] Deben haber recibido code review por parte del  leader del proyecto.
- [X] Todo el código está en la rama principal/main del repositorio.
- [X] La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.

#### [Historia de usuario 3]

Yo como usuario del sistema de crédito quiero poder registrar un nuevo cliente para tener todos sus datos.

**Criterios de Aceptación.**

- [X] Quiero poder cancelar el proceso de registro.
- [ ] Quiero poder escribir los siguientes datos: Id, Nombre, apellido paterno, apellido materno, monto solicitado, monto             aprobado, fecha de la aprobación, correo electrónico, teléfono, Dirección con calle, número exterior, número interior,         colonia, alcaldía, CP y estado.
- [ ] Quiero poder registrar la información del cliente.
- [ ] Quiero después de registrar al cliente, regresal al muro donde se encuentra la tabla con la lista de los clientes.
  
**Definición de Terminado.**

- [X] Debe ser responsive
- [ ] Testearon manualmente buscando errores e imperfecciones simples.
- [ ] Hacer 2 pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
- [ ] Deben haber recibido code review por parte del  leader del proyecto.
- [X] Todo el código está en la rama principal/main del repositorio.
- [X] La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.

#### [Historia de usuario 4]

Yo como usuario del sistema de crédito quiero poder consultar toda la información del cada cliente para poder verificar y consultar el estado de los créditos de cada cliente.

**Criterios de Aceptación.**

- [ ] Quiero poder regresar a ver la lista de clientes.
- [ ] Quiero poder visualizar los siguientes datos: Id, Nombre, apellido paterno, apellido materno, monto solicitado, monto           aprobado, fecha de la aprobación, correo electrónico, teléfono, Dirección con calle, número exterior, número interior,         colonia, alcaldía, CP y estado.
- [ ] Quiero una tabla que contenga los siguientes datos: número de crédito, estado (liquidado o no), Monto solicitado, monto aprobado, pagos realizados junto con el monto y la fecha en que se realizó dicho pago, el monto total pagado y el monto que se adeuda. 
- [ ] Quiero poder registrar un nuevo pago.
- [ ] Quiero después de registrar el nuevo pago o de terminar la consulta en general, regresal al muro donde se encuentra la tabla con la lista de los clientes.
 
**Definición de Terminado.**

- [ ] Debe ser responsive
- [ ] Testearon manualmente buscando errores e imperfecciones simples.
- [ ] Hacer 2 pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
- [ ] Deben haber recibido code review por parte del  leader del proyecto.
- [ ] Todo el código está en la rama principal/main del repositorio.
- [ ] La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.

#### [Historia de usuario 5]

Yo como usuario del sistema de crédito quiero poder registrar un nuevo pago para tener el registro y control de los pagos realizados por cada cliente.

**Criterios de Aceptación.**

- [ ] Quiero poder ver los siguientes datos: Id y nombre.
- [ ] Quiero poder cancelar el proceso de registro.
- [ ] Quiero poder elegir el crédito al que se realizará el pago.
- [ ] Quiero poder escribir el monto del pago.
- [ ] Quiero poder registrar un nuevo pago.
- [ ] Quiero después de registrar el nuevo pago, regresal al muro donde se encuentra la tabla con la lista de los clientes.
 
**Definición de Terminado.**

- [ ] Debe ser responsive
- [ ] Testearon manualmente buscando errores e imperfecciones simples.
- [ ] Hacer 2 pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
- [ ] Deben haber recibido code review por parte del  leader del proyecto.
- [ ] Todo el código está en la rama principal/main del repositorio.
- [ ] La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.

#### [Historia de usuario 6]

Yo como usuario del sistema de crédito quiero poder registrar un nuevo crédito para tener el registro y control de los créditos obtenidos por cada cliente.

**Criterios de Aceptación.**

- [ ] Quiero poder ver los siguientes datos: Id y nombre.
- [ ] Quiero poder cancelar el proceso de registro.
- [ ] Quiero poder escribir el monto solicitdado por el cliente.
- [ ] Quiero poder escribir el monto aprobado.
- [ ] uiero poder escribir el número de crédito. 
- [ ] Quiero poder registrar un nuevo crédito.
- [ ] Quiero después de registrar el nuevo crédito, regresal al muro donde se encuentra la tabla con la lista de los clientes.
 
**Definición de Terminado.**

- [ ] Debe ser responsive
- [ ] Testearon manualmente buscando errores e imperfecciones simples.
- [ ] Hacer 2 pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
- [ ] Deben haber recibido code review por parte del  leader del proyecto.
- [ ] Todo el código está en la rama principal/main del repositorio.
- [ ] La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.




 

