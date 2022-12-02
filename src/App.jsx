import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Footer } from "./components/Header_Footer/Footer";
import { Header } from "./components/Header_Footer/Header";
import { Home } from "./components/Home";
import { Signin } from "./components/signin";
const App = (props) => {
  return (
    <Fragment>
      <Header user={props.user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign_in" element={<Signin />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </Fragment>
  );
};

export default App;
