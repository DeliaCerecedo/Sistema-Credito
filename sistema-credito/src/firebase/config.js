// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB71OpXl01jvHsaMvWeVR7t4ATcdqoFFPY",
  authDomain: "sistema-credito-139fa.firebaseapp.com",
  projectId: "sistema-credito-139fa",
  storageBucket: "sistema-credito-139fa.appspot.com",
  messagingSenderId: "226213420984",
  appId: "1:226213420984:web:22460758c6aad3a0b5f94d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;












// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB4ABT5er4ojjSDOeG6m9IShtQl8alZUUs",
//   authDomain: "notes-1a5b6.firebaseapp.com",
//   projectId: "notes-1a5b6",
//   storageBucket: "notes-1a5b6.appspot.com",
//   messagingSenderId: "803200531632",
//   appId: "1:803200531632:web:12efce1cff320c01404f75"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export default db;