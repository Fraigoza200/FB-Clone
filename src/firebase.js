import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCtnQF4Z0y_Hvaq-ZcfINOctFANDbVyOOM",
  authDomain: "facebook-clone-17f0b.firebaseapp.com",
  databaseURL: "https://facebook-clone-17f0b.firebaseio.com",
  projectId: "facebook-clone-17f0b",
  storageBucket: "facebook-clone-17f0b.appspot.com",
  messagingSenderId: "1040408606531",
  appId: "1:1040408606531:web:9874792edf40ce8e85a1f6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db