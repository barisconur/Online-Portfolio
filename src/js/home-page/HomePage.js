// eslint-disable-next-line no-unused-vars
import React, {Fragment} from 'react';
import "./HomePage.scss";
import Jumbotron from "../Components/Jumbotron";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Education from "../Components/Education";
import Courses from "../Components/Courses";

export default function HomePage() {
  return (
      <>
        <div id="home-page-container">
          <div id="header"><Jumbotron/></div>
          <div id="links">{ displayLinks() }</div>
        </div>

        <div id="about-me-container" className="section"><AboutMe/></div>
        <div id="skills-container" className="section"><Skills/></div>
        <div id="education-container" className="section"><Education/></div>
        <div id="courses-container" className="section"><Courses/></div>
        {/*<div id="experience-section" className="section"><AboutMe/></div>*/}
        {/*<div id="Contact-section" className="section"><AboutMe/></div>*/}
      </>

  );
}

function displayLinks() {
  const links = ([
    {text: 'About Me'},
    {text: 'Skills'},
    {text: 'Education'},
    {text: 'Courses'},
    {text: 'Experience'},
    {text: 'Contact'},
  ]);
  return <>
    <ul>{links.map((link, index) => (
      <li className="link-container" key={index}> <a className="link" href={"#" + link.text}>{link.text}</a> </li>
      ))}
    </ul>
  </>
  }