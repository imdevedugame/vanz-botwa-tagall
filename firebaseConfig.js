const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyCX5BjtFGH282KdPLRARvvH8XV2zx6TQKg",
    authDomain: "quiz-imvanz.firebaseapp.com",
    projectId: "quiz-imvanz",
    storageBucket: "quiz-imvanz.appspot.com",
    messagingSenderId: "855022615184",
    appId: "1:855022615184:web:b8bd39508e4f72c4b5f615",

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db;