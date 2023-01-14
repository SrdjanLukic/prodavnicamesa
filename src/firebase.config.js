import {getApp,getApps,initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAeY3sGgrKrFpAHnyvL6IAotbUjwc96dRw",
    authDomain: "meatstore-7a6cd.firebaseapp.com",
    databaseURL: "https://meatstore-7a6cd-default-rtdb.firebaseio.com",
    projectId: "meatstore-7a6cd",
    storageBucket: "meatstore-7a6cd.appspot.com",
    messagingSenderId: "369615353864",
    appId: "1:369615353864:web:6e11fbb464d45a0a71f9bd"
  };

  const app = getApps.lenght > 0 ? getApp() : initializeApp(firebaseConfig);


  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};