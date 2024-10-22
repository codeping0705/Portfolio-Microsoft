

import React from "react";

import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";



const description =
  "A proactive and enthusiastic recent graduate, ready to contribute to a dynamic organization. I am actively seeking opportunities to utilize my skills and knowledge in a challenging environment while fostering the company’s growth and success. Driven by a strong desire to make a positive impact, I look forward to embarking on a journey of professional development and contributing to the organization’s overall success";


const skillsList = [
  "Web Designer",
  "UI/UX Developer",
  "FrontEnd Developer",
  "Backend Developer",
  "MERN Stack Developer",
];

const detailOrQuote =
  "Dynamic and motivated software developer with a Bachelor’s degree in Engineering and hands-on experience in both frontend and backend technologies. Proficient in designing and implementing web applications using React, Node.js, and MongoDB, with a strong emphasis on user experience and responsive design. Recognized for producing high-quality app wireframes during an internship, demonstrating a keen eye for detail and a commitment to excellence.Eager to join a forward-thinking organization where I can leverage my technical skills and innovative mindset to contribute to impactful projects. Passionate about collaborating with cross-functional teams to develop solutions that drive business success and enhance customer satisfaction. Committed to ongoing professional growth and looking forward to making meaningful contributions that support the company’s objectives.";
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
