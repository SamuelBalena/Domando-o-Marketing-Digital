import React from "react";
import ReactDOM from "react-dom/client";

import "./css/config.css";

import { Header } from "./components/Header";
import { About } from "./components/About";
import { Assurance } from "./components/Assurance";
import { Moorage } from "./components/Moorage";
import { Recall } from "./components/Recall";
import { Resume } from "./components/Resume";
import { Footer } from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <About />
    <Moorage />
    <Assurance />
    <Recall />
    <Resume />
    <Footer />
  </React.StrictMode>
);
