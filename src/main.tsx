import React from "react";
import ReactDOM from "react-dom/client";

import "./css/config.css";

import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Bonus } from "./components/Bonus";
import { Assurance } from "./components/Assurance";
import { Moorage } from "./components/Moorage";
import { Recall } from "./components/Recall";
import { Depoiments } from "./components/Depoiments";
import { FAQ } from "./components/FAQ";
import { Resume } from "./components/Resume";
import { Footer } from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <About />
    <Bonus />
    <Assurance />
    <Moorage />
    <Recall />
    <Depoiments />
    <FAQ />
    <Resume />
    <Footer />
  </React.StrictMode>
);
