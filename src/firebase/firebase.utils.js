import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAQQn6PBm-YK1mj31_GOZUh0IcBjI5xFes",
  authDomain: "barber-9b962.firebaseapp.com",
  databaseURL: "https://barber-9b962.firebaseio.com",
  projectId: "barber-9b962",
  storageBucket: "barber-9b962.appspot.com",
  messagingSenderId: "972286675557",
  appId: "1:972286675557:web:28c0ebe6e644ffd19e148c",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exist) {
    const { displayName, email, phoneNumber } = userAuth;

    try {
      await userRef.set({
        displayName,
        email,
        phoneNumber,
        ...additionalData,
      });
    } catch (error) {
      console.log("error ", error);
    }
  }
  console.log(userRef);

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

//enter with google
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
