import "./skill.scss";
import { Container, ProgressBar } from "react-bootstrap";

export default function Skill() {
  return (
    <div className="skill" id="skill">
      <div className="skillcontent">
        <div className="skilldesign">
          <Container>
            <h3>Skills design</h3>
            <p className="p">AdobeXD</p>
            <ProgressBar animated now={75} />
            <p className="p">Photoshop</p>
            <ProgressBar animated now={60} />
            <p className="p">Canva</p>
            <ProgressBar animated now={60} />
          </Container>
        </div>
      </div>
      <div className="skillcontent">
        <Container>
          <h3>Skills Dev</h3>
          <p className="p">php</p>
          <ProgressBar animated now={65} />
          <p lassName="p">React</p>
          <ProgressBar animated now={80} />
          <p className="p">Javascript</p>
          <ProgressBar animated now={60} />
        </Container>
      </div>
    </div>
  );
}
