 // import { logOutFirebase } from "../firebase/auth";
// import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
// import db from "../firebase/config";

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import { Header } from "../components/Header";
// import { Exit } from "../components/Exit";

// import agregar_nota from "../images/agregar_nota.png";
// import editar_nota from "../images/editar_nota.png";
// import borrar_nota from "../images/borrar_nota.png";

export function Wall() {
//   const navigate = useNavigate();

//   const buttonAddNote = () => {
//     navigate("/write");
//   };

//   const [noteList, setNoteList] = useState([]);

  // función para renderizar la lista de notas

//   useEffect(() => {
//     const getNoteList = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "notes"));
//         const docs = [];
//         querySnapshot.forEach((doc) => {
//           docs.push({ ...doc.data(), id: doc.id });
//         });
//         setNoteList(docs);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getNoteList();
//   }, []);

//   const delateNote = async (id) => {
//     await deleteDoc(doc(db, "notes", id));
//     const newNote = [...noteList.filter((item) => item.id !== id)];
//     setNoteList(newNote);
//   };

//   const [getIdToEdit, setGetIdToEdit] = useState('');
  
//   const editNote = (id) => {
//     console.log(id);  
//     navigate("/edit/"+id);

//   };

  return (
    <>
      <header>
        <Header />
      
      </header>
      
    </>
  );
}