import {
    GoogleAuthProvider,
    signInWithPopup,
    getAuth,
    signOut,
  } from "firebase/auth";
  import { getFirestore, collection, addDoc,getDocs, doc, deleteDoc, getDoc, setDoc } from "firebase/firestore"; 
  
  
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  
  
  export const googleAuth = () => {
    
    const promiseFirebase = signInWithPopup(auth, provider);
    return promiseFirebase
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
      //  console.log(user.displayName, user.email);
        return user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        return error;
        // ...
      });
  };
  
  export const logOutFirebase = () => signOut(auth);