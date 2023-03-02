import firebaseApp from "./config";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, setDoc } from "firebase/firestore";


const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export async function loginEmailPassword(email, password) {
  signInWithEmailAndPassword(auth, email, password);
}
// export default loginEmailPassword;

export const logOutFirebase = () => signOut(auth);

export async function getAllClients(){
  const clientes = [];
  const collectionRef = collection(db, "clientes");
  const snapshot = await getDocs(collectionRef);
  snapshot.forEach(doc => {
    clientes.push(doc.data());
  }); 
  return clientes;
}

export function añadirCliente(infoCliente) {
  const collectionRef = collection(db, "clientes");
  const docRef = doc(collectionRef, infoCliente.sku);
  setDoc(docRef, infoCliente);
}


