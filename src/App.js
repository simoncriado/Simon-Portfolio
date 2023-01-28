import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Work from "./components/Portfolio/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";

const App = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(defaultDark ? "dark" : "light");

  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("light");
    } else if (localStorage.getItem("dark")) {
      setTheme("dark");
    }
  }, []);

  const switchTheme = (e) => {
    e.preventDefault();
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <>
      <div data-theme={theme}>
        <Header switchTheme={switchTheme} theme={theme} />

        <main className="main">
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Work />
          <Contact />
        </main>

        <Footer />
        <ScrollUp />
      </div>
    </>
  );
};

export default App;
