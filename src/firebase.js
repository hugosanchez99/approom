import firebase from 'firebase/app'
import 'firebase/auth'

var config = {
  apiKey: "AIzaSyCYL6_LfYB4hez6NaqTob1td_lFeMXs8pM",
  authDomain: "rentroom-4e002.firebaseapp.com",
  projectId: "rentroom-4e002",
  storageBucket: "rentroom-4e002.appspot.com",
  messagingSenderId: "524827723909",
  appId: "1:524827723909:web:c851985ebc874b451581ec",
  measurementId: "G-EV0WVB1L5Z"
};

firebase.initializeApp(config)

export default firebase;

export const auth = firebase.auth()