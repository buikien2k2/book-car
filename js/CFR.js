import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyA2io6xtVSiyvY9i1VfxlNAF9dzm_OtdQs",
    authDomain: "bookcars-web.firebaseapp.com",
    databaseURL: "https://bookcars-web-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bookcars-web",
    storageBucket: "bookcars-web.firebasestorage.app",
    messagingSenderId: "293694989624",
    appId: "1:293694989624:web:35b88103995754af9a0dcd",
    measurementId: "G-2TF938Z7ND"
};

window.firebaseApp = initializeApp(firebaseConfig);
window.firebaseDB = getDatabase(firebaseApp);
window.firebaseRef = ref;
window.firebasePush = push;
