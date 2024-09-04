// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        <p>
          Hi, I'm Resham Gurung, a passionate and dedicated Business Analyst with a strong background in SDLC, agile, management and programming skills. Over the past 3 years, I have honed my skills in creating responsive, user-friendly websites and applications that provide a seamless experience for users.
        </p>
        <p>
          I hold a Bachelor's degree in Information Technology from LaTrobe University, where I developed a solid foundation in business development, information system, software development etc. Throughout my career, I have had the opportunity to work on various exciting projects in Univeristy.
        </p>
        <p>
          In my free time, I enjoy playing badmintion, watching movies, cycling and exploring new places, which helps me stay creative and inspired. I am always eager to learn new technologies and take on new challenges.
        </p>
        <p>
          Feel free to browse my portfolio to see some of my work. If you have any questions or would like to collaborate on a project, don't hesitate to <a href="#contact">contact me</a>.
        </p>
      </div>
    </section>
  );
};

export default About;
