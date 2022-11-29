import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Header_Footer/Footer";
import { Header } from "./components/Header_Footer/Header";
import { Home } from "./components/Home";
import { Signin } from "./components/signin";
const App = () => {
  return (
    <Fragment>
      <Header />
      <Signin />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign_in" element={<Signin />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
