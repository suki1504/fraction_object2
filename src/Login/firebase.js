import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var config = {
    apiKey: "AIzaSyD4DKAEdKL20t3Ocg-UrFrkRTgzfmBGW7Y",
    authDomain: "live-45891.firebaseapp.com",
    projectId: "live-45891",
    storageBucket: "live-45891.appspot.com",
    messagingSenderId: "1097224603358",
    appId: "1:1097224603358:web:a09a698100b9a0aa15244f",
    measurementId: "G-59QYXE6LR8"
};
const fire = firebase.initializeApp(config);
export default fire;