import "./About.css";
import profilePic from "../../assets/AR-profile-pic.jpg";

function About() {
  return (
    <section className="about-section">
      <img
        src={profilePic}
        alt="Alexander Rocha Profile Picture"
        className="about-section__image"
      />
      <div className="about-section__content">
        <h2 className="about-section__title">About the author</h2>
        <p className="about-section__text">
          My name is Alex Rocha. I am a full-stack developer with a passion for
          creating intuitive and dynamic web applications. I am well versed in
          modern web technologies such as React, Node.js, and MongoDB. With
          experience in both front-end and back-end technologies, I enjoy
          building applications that will elevate user experiences and solve
          real-world problems.
        </p>

        <p className="about-section__text">
          From user authentication to responsive design, I strive to deliver
          high-quality code and seamless functionality in every project I
          undertake. In addition to my technical skills, I am a strong
          communicator and collaborator, always eager to work with
          cross-functional teams to bring ideas to life. I am constantly
          learning and staying up-to-date with the latest industry trends to
          ensure that my work remains innovative and effective.
        </p>
      </div>
    </section>
  );
}
export default About;
