import React from "react";
import PropTypes from "prop-types";

const EducationItem = ({ school, degree, percentage, years }) => {
  return (
    <div className="education-item">
      <h3>{school}</h3>
      <p>{degree}</p>
      <p>Percentage: {percentage}</p>
      <p>Years: {years}</p>
    </div>
  );
};

EducationItem.propTypes = {
  school: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
  years: PropTypes.string.isRequired,
};

const Education = () => {
  const educationData = [
    {
      school: "Dayananda Sagar College of Engineering",
      degree: "Bachelor of Engineering",
      percentage: "78%",
      years: "2019 - 2023",
    },
    {
      school: "Sheyn International School",
      degree: "12th Intermediate (CBSE)",
      percentage: "62.3%",
      years: "2017 - 2019",
    },
    {
      school: "D.B.M.S English School",
      degree: "10th Matriculate (ICSE)",
      percentage: "71.2%",
      years: "2017 - 2019",
    },
  ];

  return (
    <section className="light"
      id="education"
      style={{
        backgroundColor: "white",
        width: "50%",
        padding: "4rem",
        margin: "3rem auto",
        textAlign: "center",
      }}
    >
      <h2>Education</h2>
      {educationData.map((item, index) => (
        <EducationItem
          key={index}
          school={item.school}
          degree={item.degree}
          percentage={item.percentage}
          years={item.years}
        />
      ))}
    </section>
  );
};

export default Education;
