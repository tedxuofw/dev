import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyCywAz7wKV-1GxtOyNLMvsQGN35eV9wdtA",
  authDomain: "moonshot-2018.firebaseapp.com",
  databaseURL: "https://moonshot-2018.firebaseio.com",
  projectId: "moonshot-2018",
  storageBucket: "moonshot-2018.appspot.com",
  messagingSenderId: "598191876823"
};
firebase.initializeApp(config);
export default firebase;