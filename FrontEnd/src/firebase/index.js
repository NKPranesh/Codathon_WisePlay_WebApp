import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBHtoVjoecOCxLW6NB3vS7TweRLzbpwi-Y",
    authDomain: "reactupload-c16bf.firebaseapp.com",
    projectId: "reactupload-c16bf",
    storageBucket: "reactupload-c16bf.appspot.com",
    messagingSenderId: "833301950233",
    appId: "1:833301950233:web:e9f2ac6fcb2ab559591f88"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };