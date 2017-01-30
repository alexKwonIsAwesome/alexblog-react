import firebase from 'firebase';

const API_KEY = "AIzaSyB3LJXLUfX1xDottjkwhIv7nV-zgkbhd3M";
const AUTH_DOMAIN = "alexblog-react.firebaseapp.com";
const DATABASE_URL = "https://alexblog-react.firebaseio.com";
const STORAGE_BUCKET = "alexblog-react.appspot.com";
const MESSAGING_SENDER_ID = "437972920410";

const config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();

export default database; 
