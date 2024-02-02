import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.webp";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["<>Web Developer" ,"<>ML Enthusiast","<>Data Science Enthusiast" ];
  const period = 20;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1><span class="hi">{"Hi,I'm "}</span><span class="yash">Yash</span>
                <p>-----------------------------------------</p>
                <h1><span className="txt-rotate" dataPeriod="20" data-rotate='["<>Web Developer" ,"<>ML Enthusiast","<>Data Science Enthusiast"]'><span className="wrap">{text}</span></span></h1></h1>
                  <p class="result">--Results-driven software engineer with a passion for innovation and problem-solving.</p>
                  <p class="result">--Proficient in diverse technologies, experienced in full-stack development,multiple programming languages and frameworks.</p>
                  <p class="result">--Proven track record of delivering high-quality, scalable solutions. Strong problem-solving and collaborative skills.</p>
                  <a class="resume" href="https://www.altcademy.com/blog/how-to-add-hyperlink-to-button-in-reactjs/">
                  <button class="buttonresume" onClick={()=> prompt('Thanks! for Visiting. Please Enter your Good Name.')} >Resume<ArrowRightCircle size={25} /></button>
                  </a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
