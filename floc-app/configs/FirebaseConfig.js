import firebase from 'firebase/compat/app';

const FirebaseConfig = {
    apiKey: "AIzaSyDNwqSPGYOhvM0_EzM4GfGX6JG4FW1e1rc",
    authDomain: "floc-9ebcf.firebaseapp.com",
    projectId: "floc-9ebcf",
    storageBucket: "floc-9ebcf.appspot.com",
    messagingSenderId: "390997444310",
    appId: "1:390997444310:web:f93a11bcc2978a91a02b77",
    measurementId: "G-VWTE2QG3DN"
  };

  const FirebaseInitialize = firebase.initializeApp(FirebaseConfig);
  export default FirebaseInitialize;