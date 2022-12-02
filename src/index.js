import React from "react";
import ReactDOM from "react-dom/client";
import "./Resources/css/app.css";
import { app } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const auth = getAuth(app);

const Container = (props) => {
  return <App {...props} />;
};

//FIREBASE FUNCTION THAT LISTEN TO SIGNIN STATE OF OUR APP
onAuthStateChanged(auth, (user) => {
  // console.log(user, "qwtwtwtwtwtwt");
  root.render(
    <BrowserRouter>
      <Container user={user} />
    </BrowserRouter>
  );
});

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });
