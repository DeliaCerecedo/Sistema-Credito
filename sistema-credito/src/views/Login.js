import {loginEmailPassword} from "../firebase/auth";

import React from "react";

import mision from "../images/mision.png";
import { Header } from "../components/Header";

export function Login() {
  
  async function submitHandler(e){
    e.preventDefault();
    const correo = document.getElementById("email").value;
    const contraseña = e.target.contraseña.value;
    // console.log(correo, contraseña);
    await loginEmailPassword(correo, contraseña);

  }
  
  
  
  
  return (
    <div className="loginContainer">
      <header>
        <Header />
      </header>
      <main className="loginMain">
        <img
          src={mision}
          className="misionInvested"
          alt="Contiene la misión de Invested"
        />
        <p className="iniciarSesion">Iniciar sesión</p>
        
        <form onSubmit={submitHandler} className="form" >
         <input type="text" name="email" placeholder="correo electrónico" className="email" id="email"/>
         <input type="password" name="contraseña" placeholder="contraseña" className="contraseña" id="contraseña"/>
         <button type="submit" className="button">Inicar sesión</button>
        </form>
                 
       
      </main>
      <footer className="loginFooter">
        <p className="footer">
          Inves+ed® - Todos los derechos reservados. Aviso de privacidad
        </p>
      </footer>
    </div>
  );
}
