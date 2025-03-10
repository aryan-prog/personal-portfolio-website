import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Frontend Developer", "Software Engineer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__fadeIn">
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>{`Hi! I'm Aryan Seth`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Frontend Developer", "Software Engineer"]'><span className="wrap">{text}</span></span></h1>
              <p>I'm a frontend developer with expertise in C/C++, HTML, CSS, and JavaScript. I've honed my skills in ReactJS and NextJS, creating interactive and user-friendly websites. Now, I'm exploring Next.js and TypeScript to elevate my capabilities. My portfolio features diverse projects reflecting my commitment to crafting visually stunning and responsive web solutions. Join me on this journey of pushing boundaries and creating exceptional user experiences. Let's build something amazing together!</p>
              {/* <a href="https://drive.google.com/file/d/1Pri37t87Tho6jPaB8DDt1Gtj2Uc9eety/view?usp=sharing" target='_blank' rel='noopener noreferrer'> Download Resume <ArrowRightCircle size={25} /></a> */}
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="animate__animated animate__zoomIn">
              <img src={headerImg} alt="Header Img"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
