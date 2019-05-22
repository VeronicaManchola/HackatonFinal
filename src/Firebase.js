import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDUGgco_94yayaUfPyfF9HqDc4iJZkYTsc",
    authDomain: "hackatonfinal-3724f.firebaseapp.com",
    databaseURL: "https://hackatonfinal-3724f.firebaseio.com",
    projectId: "hackatonfinal-3724f",
    storageBucket: "hackatonfinal-3724f.appspot.com",
    messagingSenderId: "1042219548735",
    appId: "1:1042219548735:web:ff4f131b0bf63bc0"
};

firebase.initializeApp(config);

export default firebase;