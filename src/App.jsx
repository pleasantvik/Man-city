import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Footer } from "./components/Header_Footer/Footer";
import { Header } from "./components/Header_Footer/Header";
import { Home } from "./components/Home";
import { Signin } from "./components/signin";
import { Dashboard } from "./components/Admin/Dashboard";
// import { AuthGuard } from "./Hoc/Auth";

const App = (props) => {
  return (
    <Fragment>
      <Header user={props.user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route>
          {props.user && (
            <Route path="/dashboard" element={<Dashboard {...props} />} />
          )}
          {!props.user && (
            <Route path="/dashboard" element={<Navigate to="/sign_in" />} />
          )}
        </Route>

        {!props.user && <Route path="/sign_in" element={<Signin />} />}
        {props.user && (
          <Route path="/sign_in" element={<Navigate to="/dashboard" />} />
        )}
      </Routes>
      <ToastContainer />
      <Footer />
    </Fragment>
  );
};

export default App;
