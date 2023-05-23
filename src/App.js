import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Usa from "./components/Usa";

import Nor from "./components/Nor";
import India from "./components/India"
import Japan from "./components/Japan";
import China from "./components/China";
import Footer from "./components/Footer";
import { Routes, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
        <Navbar title="EV_Policies" />
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="India" element={<India/>}/>
        <Route exact path="Usa" element={<Usa/>}/>
        <Route exact path="China" element={<China/>}/>
        <Route exact path="Japan" element={<Japan/>}/>
        <Route exact path="Nor" element={<Nor/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
