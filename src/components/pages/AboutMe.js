import React from "react";
import Picture from "../assets/biopic.jpg";

export default function AboutMe() {
  return (
    <div>
      <div className="bio-pic-container">
        <img className="bio-pic" src={Picture} alt="Johnathan McGown"></img>
      </div>
      <h1 id="about-me">About Me</h1>
      <article className="my-info">
        <p>
          Results-oriented professional with a strong background in admissions,
          finance, and customer service, now transitioning into the dynamic
          world of the tech industry. I bring a diverse skill set and a genuine
          passion for web development and coding, as evidenced by my recent
          certification in Full-Stack Web Development from the University of
          Denver Boot Camps.
        </p>

        <p>
          Combining my experience in evaluating and recruiting candidates with
          my newly acquired technical expertise, I am poised to make a
          meaningful impact in the development field. As an Admission Counselor
          at 2U, I successfully managed a pipeline of over 100 students,
          ensuring smooth application processes and meeting strict deadlines. My
          keen eye for detail and adherence to regulatory standards, gained from
          my experience in quality assurance and compliance, aligns perfectly
          with the meticulous nature of the tech industry.
        </p>

        <p>
          During my tenure as a Financial Services Professional at Charles
          Schwab, I excelled in a fast-paced call center environment, displaying
          resilience and adaptability in handling high call volumes. My ability
          to provide exceptional customer service while leveraging technology to
          deliver effective solutions will undoubtedly translate seamlessly into
          the tech industry.
        </p>

        <p>
          Proficient in HTML, CSS, JavaScript, Node.js, React.js, Express.js,
          MongoDB, and more, I am well-equipped to contribute to cutting-edge
          projects and drive innovation. I thrive on challenges, possess a
          collaborative mindset, and continuously seek opportunities to expand
          my skill set.
        </p>

        <p>
          I am excited to leverage my background in finance, customer service,
          and admissions alongside my newfound technical prowess to make a
          meaningful impact in the tech industry.
        </p>

        <p>
          Let's connect and explore how my unique blend of experiences can add
          value to your organization's technological initiatives.
        </p>
      </article>
    </div>
  );
}
