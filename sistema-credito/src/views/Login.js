// import { googleAuth } from "../firebase/auth";

// import { useNavigate } from "react-router-dom";

import mision from "../images/mision.png";
import btn_google from "../images/btn_google.png";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";



export function Login() {
  // const navigate = useNavigate();

  // console.log(props);

  // const buttonLogin = () => {
  //   const userAuth = googleAuth();
  //   userAuth
  //     .then((user) => {
  //       setUser(user);
  //      // console.log(user.displayName, user.email);
  //       navigate("/wall");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
     

  //   console.log("ya quedó");
  // };

  

  return (
    <div className="loginContainer">
      <header>
        <Header/>
      </header>
      <main className="loginMain">
        <img
          src={mision}
          className="misionInvested"
          alt="Contiene la misión de Invested"
        />
        <p className="iniciarSesion">Iniciar sesión</p>
        <img
          src={btn_google}
          className="btn-google"
          alt="Botón de Google"
        />
      </main>
      <footer className="loginFooter">
        <Footer/>
      </footer>
    </div>
  );
}
 