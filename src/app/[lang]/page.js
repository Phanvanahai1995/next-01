import React from "react";
import Header from "../component/Header/Header";
import About from "../component/Section/About/About";
import Section from "../component/Section/Section";
import Skills from "../component/Section/Skills/Skills";
import Projects from "../component/Section/Projects/Projects";
import Contact from "../component/Section/Contact/Contact";

export default async function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto pb-40">
        <Section Children={About} id="about" className="pt-20" />
        <Section Children={Skills} id="skills" className="pt-20" />
        <Section Children={Projects} id="project" className="pt-20" />
        <Section Children={Contact} id="contact" className="pt-20" />
      </main>
    </>
  );
}
