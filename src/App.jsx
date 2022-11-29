import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Header_Footer/Footer";
import { Header } from "./components/Header_Footer/Header";
import { Home } from "./components/Home";
const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
