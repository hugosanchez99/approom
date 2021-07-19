import firebase from 'firebase'
import { ref, onUnmounted } from 'vue';

var config = {
    apiKey: "AIzaSyCVXiN-YW1HadCNDOEGu4s9nqNP1Jb1u30",
    authDomain: "rent-room-5c80f.firebaseapp.com",
    databaseURL: "https://rent-room-5c80f-default-rtdb.firebaseio.com",
    projectId: "rent-room-5c80f",
    storageBucket: "rent-room-5c80f.appspot.com",
    messagingSenderId: "302419163816",
    appId: "1:302419163816:web:23d54ada32c8f8579f209d"
};

const firebaseApp = firebase.initializeApp(config)

const db = firebase.firestore()
const usersCollection = db.collection('user')

export const createUser = user => {
    return usersCollection.add(user)
}

export const getUser = async id => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
    return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
    return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
    const users = ref([])
    usersCollection.onSnapshot(snapshot => {
        users.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    })
    onUnmounted(close)
    return users;
}