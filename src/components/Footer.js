import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";
import mail from "../assets/img/mail.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/aryan-seth-9190b1196/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
              <a
                href="https://github.com/aryan-prog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="github" />
              </a>
              <a
                href="mailto:seth.aryan605@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={mail} alt="mail" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
