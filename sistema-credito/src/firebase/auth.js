import firebaseApp from "./config";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";


const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

async function loginEmailPassword(email, password) {
  signInWithEmailAndPassword(auth, email, password);
}
export default loginEmailPassword;

export const logOutFirebase = () => signOut(auth);

export async function getAllClients(){
  const clientes = [];
  const snapshot = await getDocs(db, collection("clientes"));
  snapshot.forEach(doc => {
    clientes.push(doc.data());
  }); 
  return clientes;
}


