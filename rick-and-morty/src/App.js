import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/public/Footer";
import Main from "./components/public/Main";
import { NavBar } from "./components/public/NavBar";
import { Detail } from "./components/public/Detail";
import { UserForm } from "./components/public/login/UserForm";
import { Cards } from "./components/public/Cards";
import UserFormRegister from "./components/public/login/UserFormRegister";
import About from "./components/public/About";
import Contacto from "./components/public/Contacto";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="/user-form" element={<UserForm />} />
        <Route path="/user-form-register" element={<UserFormRegister />} />
        <Route path="/page/:numeroPagina" element={<Cards />} />
        <Route path="/details/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
