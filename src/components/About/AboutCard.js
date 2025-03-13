import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kirubakran</span>
            from <span className="purple"> TamilNadu, India.</span>
            <br />
An enthusiastic engineering student passionate about IoT, Embedded Systems, and Full-Stack Development.
<br />
Driven developer with experience in creating innovative solutions using ReactJS, TypeScript, Node.js, and IoT technologies. Skilled in building secure blockchain systems with Hyperledger Fabric and developing smart hardware integrations for real-time monitoring and tracking.
<br />
Beyond coding, I enjoy exploring emerging technologies, participating in hackathons, and collaborating on impactful projects.
</p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
