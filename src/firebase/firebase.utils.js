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
  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const { displayName, email, phoneNumber } = userAuth;

  try {
    await userRef.set({
      displayName,
      email,
      phoneNumber,
      ...additionalData,
    });
    console.log("user prof document created");
  } catch (error) {
    console.log("error ", error);
  }

  return userRef;
};

export const addNameAndPhoneNumberToUserProfileDoc = async (
  user,
  name,
  phone
) => {
  const userRef = await firestore.doc(`user/${user.uid ? user.uid : user.id}`);
  try {
    await userRef.update({
      displayName: name,
      phoneNumber: phone,
    });
    console.log("data edded");
  } catch (error) {
    console.log(error);
  }
};

export const addOrder = async (user, orderName, orderDate) => {
  try {
    const userRef = firestore.doc(`user/${user.uid ? user.uid : user.id}`);
    await userRef.collection("order").doc(orderName).set({
      name: orderName,
      date: orderDate,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOrders = async (user) => {
  const output = [];
  firestore
    .doc(`user/${user.uid ? user.uid : user.id}`)
    .collection("order")
    .get()
    .then((snapshot) => {
      snapshot.forEach((el) => {
        output.push(el.data());
      });
    });
  return output;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

//enter with google
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
